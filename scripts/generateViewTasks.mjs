import fs from 'fs';
import path from 'path';

const COMPLEMENT_API_PATH = path.resolve('tasks/complement-api.json');
const VIEWS_DIR = path.resolve('tasks/vues');
const OUTPUT_DIR = path.resolve('tasks/generated');

const HTTP_METHODS = new Set(['get', 'post', 'put', 'delete', 'patch', 'options', 'head', 'trace']);

const ACTION_METHOD_DEFAULTS = {
  GET_LIST: 'GET',
  GET_ONE: 'GET',
  GET_MANY: 'GET',
  GET_MANY_REFERENCE: 'GET',
  GET: 'GET',
  CREATE: 'POST',
  UPDATE: 'PUT',
  UPSERT: 'POST',
  DELETE: 'DELETE',
  REMOVE: 'DELETE',
  EXPORT: 'POST',
  IMPORT: 'POST',
};

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function canonicalizePath(input) {
  if (!input || typeof input !== 'string') return null;
  let value = input.trim();
  if (!value) return null;
  value = value.replace(/^https?:\/\/[^/]+/i, '');
  value = value.replace(/^file:\/\//i, '');
  value = value.replace(/\\/g, '/');
  const queryIndex = value.indexOf('?');
  if (queryIndex >= 0) {
    value = value.slice(0, queryIndex);
  }
  const hashIndex = value.indexOf('#');
  if (hashIndex >= 0) {
    value = value.slice(0, hashIndex);
  }
  if (!value.startsWith('/')) {
    value = `/${value}`;
  }
  value = value.replace(/\/+/g, '/');
  if (value.length > 1 && value.endsWith('/')) {
    value = value.slice(0, -1);
  }
  return value;
}

function normalizePathKey(pathValue) {
  if (!pathValue) return null;
  return pathValue.replace(/\{[^}]+\}/g, '{}');
}

function normalizeCandidateUrl(raw) {
  if (!raw) return null;
  let value = raw.trim();
  if (!value) return null;
  value = value.replace(/[;,]+$/g, '');
  value = value.replace(/\)\.*$/g, ')');
  value = value.replace(/\.$/, '');
  value = value.replace(/\$\{([^}]+)\}/g, (_, expr) => {
    const trimmed = expr.trim();
    const parts = trimmed.split(/[^A-Za-z0-9_]+/).filter(Boolean);
    const fallback = parts.length ? parts[parts.length - 1] : 'param';
    return `{${fallback}}`;
  });
  value = value.replace(/\{SERVER_URL\}/g, '');
  value = value.replace(/\{BASE_URL\}/g, '');
  value = value.replace(/\{API_BASE_URL\}/g, '');
  value = value.replace(/\{HOST\}/g, '');
  const canonical = canonicalizePath(value);
  if (!canonical) return null;
  return canonical;
}

function buildComplementIndex(paths = {}) {
  const index = new Map();
  const entries = [];
  Object.entries(paths).forEach(([pathKey, pathItem]) => {
    const canonical = canonicalizePath(pathKey);
    if (!canonical) return;
    const operations = [];
    Object.entries(pathItem || {}).forEach(([method, operation]) => {
      if (!HTTP_METHODS.has(method)) {
        if (HTTP_METHODS.has(method.toLowerCase())) {
          method = method.toLowerCase();
        } else {
          return;
        }
      }
      const normalizedMethod = method.toUpperCase();
      if (!operation || typeof operation !== 'object') {
        return;
      }
      operations.push({
        method: normalizedMethod,
        summary: operation.summary || '',
        description: operation.description || '',
        operationId: operation.operationId || '',
        tags: Array.isArray(operation.tags) ? operation.tags.filter(Boolean) : [],
      });
    });
    if (!operations.length) return;
    const normalizedKey = normalizePathKey(canonical);
    const entry = { path: canonical, normalizedKey, operations };
    entries.push(entry);
    if (!index.has(normalizedKey)) {
      index.set(normalizedKey, []);
    }
    index.get(normalizedKey).push(entry);
  });
  return { index, entries };
}

function findOperationsForCandidate(candidatePath, complementIndex) {
  const canonical = canonicalizePath(candidatePath);
  if (!canonical) return [];
  const normalized = normalizePathKey(canonical);
  const direct = normalized ? complementIndex.index.get(normalized) : null;
  if (direct && direct.length) {
    return dedupeEntries(direct);
  }
  const matches = complementIndex.entries.filter((entry) => {
    if (entry.path === canonical) return true;
    if (entry.path.endsWith(canonical)) return true;
    if (canonical.endsWith(entry.path)) return true;
    return false;
  });
  return dedupeEntries(matches);
}

function dedupeEntries(entries) {
  const byPath = new Map();
  entries.forEach((entry) => {
    if (!byPath.has(entry.path)) {
      byPath.set(entry.path, { path: entry.path, operations: [] });
    }
    const accumulator = byPath.get(entry.path);
    entry.operations.forEach((operation) => {
      if (
        !accumulator.operations.some(
          (existing) =>
            existing.method === operation.method &&
            existing.operationId === operation.operationId &&
            existing.summary === operation.summary,
        )
      ) {
        accumulator.operations.push(operation);
      }
    });
  });
  const result = Array.from(byPath.values());
  result.forEach((entry) => {
    entry.operations.sort((a, b) => {
      if (a.method === b.method) {
        return (a.operationId || '').localeCompare(b.operationId || '');
      }
      return a.method.localeCompare(b.method);
    });
  });
  return result.sort((a, b) => a.path.localeCompare(b.path));
}

const METADATA_LABELS = {
  'Groupe fonctionnel': 'functionalGroup',
  Module: 'module',
  'Ressource': 'resource',
  'Clé / route': 'routeKey',
  "Clé / route": 'routeKey',
  "Type d'écran": 'screenType',
  Menu: 'menu',
  'Icône': 'icon',
};

function parseSections(content) {
  const lines = content.split(/\r?\n/);
  const sections = new Map();
  let current = null;
  let buffer = [];
  lines.forEach((line) => {
    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      if (current) {
        sections.set(current, buffer.join('\n'));
      }
      current = headingMatch[1].trim();
      buffer = [];
    } else if (current) {
      buffer.push(line);
    }
  });
  if (current) {
    sections.set(current, buffer.join('\n'));
  }
  return sections;
}

function parseProviders(sectionContent = '') {
  const lines = sectionContent.split(/\r?\n/);
  const providers = [];
  let current = null;
  const flushCurrent = () => {
    if (!current) return;
    const body = current.lines.join('\n').trim();
    const methodMatch = body.match(/^\s*method\s*:\s*['"]?([A-Za-z]+)['"]?/im);
    const actionKey = current.action.toUpperCase();
    const method = methodMatch ? methodMatch[1].toUpperCase() : ACTION_METHOD_DEFAULTS[actionKey] || 'GET';
    const urls = extractUrls(body);
    providers.push({
      action: actionKey,
      method,
      body,
      urls,
      matches: [],
      unmatched: [],
    });
    current = null;
  };

  lines.forEach((line) => {
    const bulletMatch = line.match(/^\s*-\s*([^:]+?):\s*(.*)$/);
    if (bulletMatch) {
      flushCurrent();
      const action = bulletMatch[1].trim();
      const remainder = bulletMatch[2] ? bulletMatch[2].trimEnd() : '';
      current = { action, lines: [] };
      if (remainder) {
        current.lines.push(remainder);
      }
    } else if (line.trim() === '') {
      if (current) {
        current.lines.push('');
      }
    } else if (current) {
      current.lines.push(line.replace(/\s+$/, ''));
    }
  });
  flushCurrent();
  return providers;
}

function extractUrls(body) {
  const urls = [];
  const seen = new Set();
  const addUrl = (raw) => {
    const canonical = normalizeCandidateUrl(raw);
    if (!canonical) return;
    const normalized = normalizePathKey(canonical);
    const key = `${canonical}|${normalized}`;
    if (seen.has(key)) return;
    seen.add(key);
    urls.push({ raw, canonical, normalized });
  };

  const directRegex = /\burl\s*:\s*(?:['"]([^'"`]+)['"]|`([^`]+)`)/g;
  let match;
  while ((match = directRegex.exec(body))) {
    addUrl(match[1] || match[2]);
  }

  const pathRegex = /\bpath\s*:\s*(?:['"]([^'"`]+)['"]|`([^`]+)`)/g;
  while ((match = pathRegex.exec(body))) {
    addUrl(match[1] || match[2]);
  }

  const returnRegex = /return\s+(?:['"]([^'"`]+)['"]|`([^`]+)`)/g;
  while ((match = returnRegex.exec(body))) {
    addUrl(match[1] || match[2]);
  }

  return urls;
}

function parseLocalization(sectionContent = '') {
  const labels = { fr: null, en: null }; 
  const lines = sectionContent.split(/\r?\n/);
  lines.forEach((line) => {
    const frMatch = line.match(/-\s*Libellé\s*FR\s*:\s*(.+)/i);
    if (frMatch) {
      labels.fr = frMatch[1].trim();
    }
    const enMatch = line.match(/-\s*Libellé\s*EN\s*:\s*(.+)/i);
    if (enMatch) {
      labels.en = enMatch[1].trim();
    }
  });
  return labels;
}

function parseViewFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const id = path.basename(filePath, '.md');
  const lines = content.split(/\r?\n/);
  const titleLine = lines.find((line) => /^#\s+/.test(line));
  const title = titleLine ? titleLine.replace(/^#\s+/, '').trim() : id;

  const metadata = {};
  lines.forEach((line) => {
    const metaMatch = line.match(/^-\s+\*\*([^*]+)\*\*\s*:\s*(.+)$/);
    if (metaMatch) {
      const label = metaMatch[1].trim();
      const value = metaMatch[2].trim();
      const key = METADATA_LABELS[label];
      if (key && !metadata[key]) {
        metadata[key] = value;
      }
    }
  });

  const sections = parseSections(content);
  const providers = parseProviders(sections.get('Fournisseur de données') || '');
  const localization = parseLocalization(sections.get('Localisation et libellés') || '');

  return {
    id,
    title,
    metadata,
    providers,
    localization,
    source: path.relative(process.cwd(), filePath).replace(/\\/g, '/'),
  };
}

function sanitizeDescription(text) {
  if (!text) return '';
  return text
    .replace(/\r?\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function enrichProvidersWithMatches(providers, complementIndex) {
  providers.forEach((provider) => {
    const pathMatches = new Map();
    const unmatched = new Set();
    provider.urls.forEach((urlInfo) => {
      const matches = findOperationsForCandidate(urlInfo.canonical, complementIndex);
      if (!matches.length) {
        unmatched.add(urlInfo.raw);
        return;
      }
      matches.forEach((match) => {
        if (!pathMatches.has(match.path)) {
          pathMatches.set(match.path, { path: match.path, operations: [] });
        }
        const accumulator = pathMatches.get(match.path);
        match.operations.forEach((operation) => {
          if (
            !accumulator.operations.some(
              (existing) =>
                existing.method === operation.method &&
                existing.operationId === operation.operationId &&
                existing.summary === operation.summary,
            )
          ) {
            accumulator.operations.push(operation);
          }
        });
      });
    });
    provider.matches = Array.from(pathMatches.values()).sort((a, b) => a.path.localeCompare(b.path));
    provider.matches.forEach((entry) => {
      entry.operations.sort((a, b) => {
        if (a.method === b.method) {
          return (a.operationId || '').localeCompare(b.operationId || '');
        }
        return a.method.localeCompare(b.method);
      });
    });
    provider.unmatched = Array.from(unmatched);
  });
}

function renderViewTask(view, generatedAt) {
  const timestamp = generatedAt || new Date().toISOString();
  const lines = [];
  lines.push(`# ${view.id} — ${view.title}`);
  lines.push('');
  lines.push(
    `_Tâche générée automatiquement le ${timestamp} à partir de \`${view.source}\` et de \`tasks/complement-api.json\`._`,
  );
  lines.push('');
  lines.push('## Métadonnées de la vue');
  lines.push('');
  const orderedMetadata = [
    ['functionalGroup', 'Groupe fonctionnel'],
    ['module', 'Module'],
    ['resource', 'Ressource'],
    ['routeKey', 'Clé / route'],
    ['screenType', "Type d'écran"],
    ['menu', 'Menu'],
    ['icon', 'Icône'],
  ];
  let hasMetadata = false;
  orderedMetadata.forEach(([key, label]) => {
    if (view.metadata[key]) {
      lines.push(`- ${label} : ${view.metadata[key]}`);
      hasMetadata = true;
    }
  });
  if (!hasMetadata) {
    lines.push('- Aucune métadonnée trouvée.');
  }
  if (view.localization.fr || view.localization.en) {
    lines.push('');
    lines.push('### Libellés');
    if (view.localization.fr) {
      lines.push(`- FR : ${view.localization.fr}`);
    }
    if (view.localization.en) {
      lines.push(`- EN : ${view.localization.en}`);
    }
  }
  lines.push('');
  lines.push('## Fournisseurs et API associées');
  lines.push('');
  if (!view.providers.length) {
    lines.push('_Aucun fournisseur détecté dans le fragment de vue._');
  } else {
    view.providers.forEach((provider) => {
      lines.push(`### ${provider.action}`);
      lines.push('');
      lines.push(`- Méthode HTTP estimée : ${provider.method}`);
      if (provider.urls.length) {
        lines.push('- Cibles détectées :');
        provider.urls.forEach((url) => {
          lines.push(`  - ${url.canonical}`);
        });
      } else {
        lines.push('- Aucune URL détectée.');
      }
      if (provider.body) {
        lines.push('');
        lines.push('```text');
        lines.push(provider.body);
        lines.push('```');
      }
      if (provider.matches.length) {
        lines.push('');
        lines.push('- Opérations correspondantes :');
        provider.matches.forEach((match) => {
          lines.push(`  - Chemin ${match.path}`);
          match.operations.forEach((operation) => {
            const summary = operation.summary ? operation.summary.trim() : 'Résumé indisponible';
            const description = sanitizeDescription(operation.description);
            const operationIdLabel = operation.operationId ? operation.operationId : '—';
            lines.push(`    - ${operation.method} — ${summary} (operationId: ${operationIdLabel})`);
            if (operation.tags && operation.tags.length) {
              lines.push(`      - Tags: ${operation.tags.join(', ')}`);
            }
            if (description) {
              lines.push(`      - Description: ${description}`);
            }
          });
        });
      } else {
        lines.push('');
        lines.push('- Aucune opération correspondante dans `complement-api.json`.');
      }
      if (provider.unmatched.length) {
        lines.push('');
        lines.push('- URLs sans correspondance détectée :');
        provider.unmatched.forEach((rawUrl) => {
          lines.push(`  - ${rawUrl}`);
        });
      }
      lines.push('');
    });
  }
  lines.push('---');
  lines.push('');
  lines.push("_Fichier généré automatiquement. Toute modification manuelle sera potentiellement écrasée lors d'une prochaine exécution._");
  lines.push('');
  return lines.join('\n');
}

function main() {
  if (!fs.existsSync(COMPLEMENT_API_PATH)) {
    throw new Error(`Impossible de trouver ${COMPLEMENT_API_PATH}`);
  }
  if (!fs.existsSync(VIEWS_DIR)) {
    throw new Error(`Impossible de trouver ${VIEWS_DIR}`);
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const complement = readJson(COMPLEMENT_API_PATH);
  const complementIndex = buildComplementIndex(complement.paths || {});

  const files = fs
    .readdirSync(VIEWS_DIR)
    .filter((name) => name.toLowerCase().endsWith('.md'))
    .sort((a, b) => a.localeCompare(b));

  let created = 0;
  let updated = 0;
  let unchanged = 0;

  files.forEach((fileName) => {
    const filePath = path.join(VIEWS_DIR, fileName);
    const view = parseViewFile(filePath);
    const outputPath = path.join(OUTPUT_DIR, `${view.id}.md`);
    let previousContent = null;
    let previousTimestamp = null;
    if (fs.existsSync(outputPath)) {
      previousContent = fs.readFileSync(outputPath, 'utf8');
      const timestampMatch = previousContent.match(
        /_Tâche générée automatiquement le ([^ ]+) à partir de `tasks\/vues\//,
      );
      if (timestampMatch) {
        previousTimestamp = timestampMatch[1];
      }
    }
    enrichProvidersWithMatches(view.providers, complementIndex);
    const content = renderViewTask(view, previousTimestamp);
    if (previousContent && previousContent === content) {
      unchanged += 1;
      return;
    }
    if (previousContent) {
      updated += 1;
    } else {
      created += 1;
    }
    fs.writeFileSync(outputPath, content, 'utf8');
  });

  console.log(
    `Fragments traités: ${files.length} — Nouveaux fichiers: ${created} — Mis à jour: ${updated} — Inchangés: ${unchanged}`,
  );
}

main();
