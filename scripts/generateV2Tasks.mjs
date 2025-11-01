import fs from 'fs';
import path from 'path';

const OPENAPI_PATH = path.resolve('tasks/openceapi.json');
const TASKS_DIR = path.resolve('tasks/v2');

const HTTP_METHODS = ['get', 'put', 'post', 'delete', 'patch', 'options', 'head', 'trace'];
const METHOD_ORDER = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD', 'TRACE'];

function loadOpenApi(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

const openapi = loadOpenApi(OPENAPI_PATH);

const tagMeta = new Map();
(openapi.tags || []).forEach((tag) => {
  if (!tag || !tag.name) return;
  tagMeta.set(tag.name, {
    description: tag.description || '',
    externalDocs: tag.externalDocs || null,
  });
});

function resolveRef(ref) {
  if (!ref || typeof ref !== 'string' || !ref.startsWith('#/')) {
    return null;
  }
  const parts = ref.substring(2).split('/');
  let current = openapi;
  for (const part of parts) {
    if (current && Object.prototype.hasOwnProperty.call(current, part)) {
      current = current[part];
    } else {
      return null;
    }
  }
  return current;
}

function refName(ref) {
  if (!ref) return null;
  const segments = ref.split('/');
  return segments[segments.length - 1];
}

function normalizeParameters(pathParameters = [], operationParameters = []) {
  const combined = [...pathParameters, ...operationParameters];
  const result = [];
  const seen = new Set();
  for (const param of combined) {
    let resolved = param;
    if (param && param.$ref) {
      resolved = resolveRef(param.$ref);
    }
    if (!resolved) continue;
    const key = `${resolved.name}|${resolved.in}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(resolved);
  }
  return result;
}

function collectSchemaRefsFromSchema(schema, refs, visited = new Set()) {
  if (!schema || typeof schema !== 'object') {
    return;
  }
  if (schema.$ref) {
    const name = refName(schema.$ref);
    if (name) {
      refs.add(name);
      if (!visited.has(name)) {
        visited.add(name);
        const resolved = resolveRef(schema.$ref);
        if (resolved) {
          collectSchemaRefsFromSchema(resolved, refs, visited);
        }
      }
    }
    return;
  }
  if (schema.allOf) schema.allOf.forEach((s) => collectSchemaRefsFromSchema(s, refs, visited));
  if (schema.oneOf) schema.oneOf.forEach((s) => collectSchemaRefsFromSchema(s, refs, visited));
  if (schema.anyOf) schema.anyOf.forEach((s) => collectSchemaRefsFromSchema(s, refs, visited));
  if (schema.items) collectSchemaRefsFromSchema(schema.items, refs, visited);
  if (schema.not) collectSchemaRefsFromSchema(schema.not, refs, visited);
  if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
    collectSchemaRefsFromSchema(schema.additionalProperties, refs, visited);
  }
  if (schema.properties) {
    Object.values(schema.properties).forEach((propSchema) => {
      collectSchemaRefsFromSchema(propSchema, refs, visited);
    });
  }
}

function collectSchemaRefsFromContent(content, refs) {
  if (!content) return;
  Object.values(content).forEach((mediaType) => {
    if (mediaType && mediaType.schema) {
      collectSchemaRefsFromSchema(mediaType.schema, refs);
    }
  });
}

function resolveRequestBodyContent(requestBody) {
  if (!requestBody) return null;
  if (requestBody.$ref) {
    const resolved = resolveRef(requestBody.$ref);
    if (!resolved) return null;
    return resolved.content || null;
  }
  return requestBody.content || null;
}

function collectSchemaRefsFromOperationResponse(response, refs) {
  if (response.content) {
    collectSchemaRefsFromContent(response.content, refs);
  }
  if (response.headers) {
    Object.values(response.headers).forEach((header) => {
      let resolved = header;
      if (header && header.$ref) {
        resolved = resolveRef(header.$ref);
      }
      if (resolved && resolved.schema) {
        collectSchemaRefsFromSchema(resolved.schema, refs);
      }
    });
  }
}

function collectSchemaRefsFromOperation(operation, refs) {
  const requestBodyContent = resolveRequestBodyContent(operation.requestBody);
  if (requestBodyContent) {
    collectSchemaRefsFromContent(requestBodyContent, refs);
  }
  if (operation.responses) {
    Object.values(operation.responses).forEach((response) => {
      if (!response) return;
      if (response.$ref) {
        const resolved = resolveRef(response.$ref);
        if (resolved) {
          collectSchemaRefsFromOperationResponse(resolved, refs);
        }
      } else {
        collectSchemaRefsFromOperationResponse(response, refs);
      }
    });
  }
  if (operation.parameters) {
    operation.parameters.forEach((param) => {
      let resolved = param;
      if (param && param.$ref) {
        resolved = resolveRef(param.$ref);
      }
      if (resolved && resolved.schema) {
        collectSchemaRefsFromSchema(resolved.schema, refs);
      }
    });
  }
}

function describeSchemaType(schema) {
  if (!schema) return 'inconnu';
  if (schema.$ref) {
    return refName(schema.$ref) || 'référence';
  }
  if (schema.type === 'array') {
    return `Array<${describeSchemaType(schema.items)}>`;
  }
  if (schema.type) {
    if (schema.format) {
      return `${schema.type} (${schema.format})`;
    }
    return schema.type;
  }
  if (schema.allOf) {
    return `allOf(${schema.allOf.map((s) => describeSchemaType(s)).join(', ')})`;
  }
  if (schema.oneOf) {
    return `oneOf(${schema.oneOf.map((s) => describeSchemaType(s)).join(', ')})`;
  }
  if (schema.anyOf) {
    return `anyOf(${schema.anyOf.map((s) => describeSchemaType(s)).join(', ')})`;
  }
  if (schema.enum) {
    return `enum(${schema.enum.join(', ')})`;
  }
  if (schema.properties) {
    return 'object';
  }
  return 'type non spécifié';
}

function formatEnum(schema) {
  if (!schema || !schema.enum) return null;
  return schema.enum.join(', ');
}

function formatConstraints(schema) {
  if (!schema || typeof schema !== 'object') return '';
  const constraints = [];
  if (schema.minimum !== undefined) constraints.push(`min: ${schema.minimum}`);
  if (schema.maximum !== undefined) constraints.push(`max: ${schema.maximum}`);
  if (schema.minLength !== undefined) constraints.push(`longueur min: ${schema.minLength}`);
  if (schema.maxLength !== undefined) constraints.push(`longueur max: ${schema.maxLength}`);
  if (schema.pattern) constraints.push(`pattern: ${schema.pattern}`);
  if (schema.minItems !== undefined) constraints.push(`min items: ${schema.minItems}`);
  if (schema.maxItems !== undefined) constraints.push(`max items: ${schema.maxItems}`);
  if (schema.default !== undefined) constraints.push(`défaut: ${JSON.stringify(schema.default)}`);
  return constraints.join(' · ');
}

function summarizeParameter(param) {
  const parts = [];
  const location = param.in ? param.in.toUpperCase() : 'INCONNU';
  const required = param.required ? 'obligatoire' : 'optionnel';
  parts.push(`- \`${param.name}\` (${location}, ${required}) — ${describeSchemaType(param.schema || param)}${param.description ? ` : ${param.description}` : ''}`);
  if (param.schema) {
    const enumValues = formatEnum(param.schema);
    const constraints = formatConstraints(param.schema);
    if (enumValues) {
      parts.push(`  - Valeurs autorisées: ${enumValues}`);
    }
    if (constraints) {
      parts.push(`  - Contraintes: ${constraints}`);
    }
  }
  return parts.join('\n');
}

const schemaCache = new Map();

function summarizeSchema(name) {
  if (schemaCache.has(name)) {
    return schemaCache.get(name);
  }
  const schema = openapi.components?.schemas?.[name] || null;
  if (!schema) {
    const fallback = `### ${name}\nDéfinition introuvable dans le document OpenAPI.`;
    schemaCache.set(name, fallback);
    return fallback;
  }
  const lines = [];
  lines.push(`### ${name}`);
  if (schema.title) {
    lines.push(`Titre: ${schema.title}`);
  }
  if (schema.description) {
    lines.push(schema.description.trim());
  }
  const typeLabel = describeSchemaType(schema);
  if (typeLabel) {
    lines.push(`Type: ${typeLabel}`);
  }
  if (schema.required && schema.required.length) {
    lines.push(`Champs obligatoires: ${schema.required.join(', ')}`);
  }
  const constraints = formatConstraints(schema);
  if (constraints) {
    lines.push(`Contraintes: ${constraints}`);
  }
  if (schema.enum) {
    lines.push(`Valeurs autorisées: ${schema.enum.join(', ')}`);
  }
  if (schema.properties) {
    lines.push('Propriétés:');
    const entries = Object.entries(schema.properties);
    entries.forEach(([propName, propSchema]) => {
      const propType = describeSchemaType(propSchema);
      const chunks = [`- **${propName}**: ${propType}`];
      if (propSchema.description) {
        chunks.push(` — ${propSchema.description.replace(/\s+/g, ' ').trim()}`);
      }
      const enumValues = formatEnum(propSchema);
      const propConstraints = formatConstraints(propSchema);
      if (enumValues) {
        chunks.push(` (Valeurs: ${enumValues})`);
      }
      if (propConstraints) {
        chunks.push(` (Contraintes: ${propConstraints})`);
      }
      lines.push(chunks.join(''));
    });
  }
  if (schema.allOf) {
    lines.push('Composition allOf:');
    schema.allOf.forEach((subSchema) => {
      lines.push(`- ${describeSchemaType(subSchema)}`);
    });
  }
  if (schema.oneOf) {
    lines.push('Variantes oneOf:');
    schema.oneOf.forEach((subSchema) => {
      lines.push(`- ${describeSchemaType(subSchema)}`);
    });
  }
  if (schema.anyOf) {
    lines.push('Variantes anyOf:');
    schema.anyOf.forEach((subSchema) => {
      lines.push(`- ${describeSchemaType(subSchema)}`);
    });
  }
  if (schema.items && !schema.properties) {
    lines.push(`Items: ${describeSchemaType(schema.items)}`);
  }
  if (schema.additionalProperties) {
    if (schema.additionalProperties === true) {
      lines.push('Propriétés additionnelles: autorisées (type libre).');
    } else if (typeof schema.additionalProperties === 'object') {
      lines.push(`Propriétés additionnelles: ${describeSchemaType(schema.additionalProperties)}`);
    }
  }
  schemaCache.set(name, lines.join('\n'));
  return schemaCache.get(name);
}

function expandSchemaDependencies(initialRefs) {
  const expanded = new Set();
  const queue = [...initialRefs];
  while (queue.length) {
    const current = queue.shift();
    if (!current || expanded.has(current)) continue;
    expanded.add(current);
    const schema = openapi.components?.schemas?.[current];
    if (!schema) continue;
    const innerRefs = new Set();
    collectSchemaRefsFromSchema(schema, innerRefs);
    innerRefs.forEach((refName) => {
      if (!expanded.has(refName)) {
        queue.push(refName);
      }
    });
  }
  return expanded;
}

function summarizeSecurity(requirement) {
  const entries = Object.entries(requirement);
  if (!entries.length) return 'Aucun scope requis';
  return entries
    .map(([name, scopes]) => {
      if (!scopes || !scopes.length) {
        return `${name} (sans scope)`;
      }
      return `${name} (scopes: ${scopes.join(', ')})`;
    })
    .join(', ');
}

function formatExampleBlock(label, value, indent = '    ') {
  const lines = [];
  const prefix = `${indent}- ${label}:`;
  lines.push(prefix);
  const blockIndent = `${indent}  `;
  const normalizedValue = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  lines.push(`${blockIndent}\`\`\`json`);
  normalizedValue.split('\n').forEach((line) => {
    lines.push(`${blockIndent}${line}`);
  });
  lines.push(`${blockIndent}\`\`\``);
  return lines;
}

function formatOperation(operationWrapper) {
  const { method, path: pathUrl, operation, pathParameters } = operationWrapper;
  const lines = [];
  const summary = operation.summary || operation.operationId || `${method} ${pathUrl}`;
  lines.push(`#### ${method} ${pathUrl}`);
  lines.push('');
  lines.push(`- Résumé: ${summary}`);
  lines.push(`- OperationId: ${operation.operationId || 'non renseigné'}`);
  if (operation.description) {
    lines.push(`- Description: ${operation.description.replace(/\s+/g, ' ').trim()}`);
  }
  const security = operation.security || openapi.security || [];
  if (security.length) {
    lines.push(`- Sécurité: ${security.map(summarizeSecurity).join(' | ')}`);
  } else {
    lines.push('- Sécurité: Aucune exigence déclarée');
  }

  const parameters = normalizeParameters(pathParameters, operation.parameters || []);
  if (parameters.length) {
    lines.push('- Paramètres:');
    parameters.forEach((param) => {
      lines.push(summarizeParameter(param));
    });
  }

  if (operation.requestBody) {
    lines.push('- Corps de requête:');
    const requestBody = operation.requestBody.$ref ? resolveRef(operation.requestBody.$ref) : operation.requestBody;
    const required = requestBody && requestBody.required ? 'obligatoire' : 'optionnel';
    lines.push(`  - ${required}`);
    const content = requestBody ? requestBody.content : null;
    if (content) {
      Object.entries(content).forEach(([contentType, mediaType]) => {
        if (!mediaType) return;
        const schema = mediaType.schema || null;
        const typeLabel = describeSchemaType(schema);
        const schemaRef = schema && schema.$ref ? refName(schema.$ref) : null;
        lines.push(`  - ${contentType}: ${typeLabel}${schemaRef ? ` (${schemaRef})` : ''}`);
        if (mediaType.examples) {
          Object.entries(mediaType.examples).forEach(([exampleName, exampleValue]) => {
            if (exampleValue && typeof exampleValue === 'object' && exampleValue.value !== undefined) {
              lines.push(...formatExampleBlock(`Exemple ${exampleName}`, exampleValue.value, '    '));
            }
          });
        }
        if (mediaType.example !== undefined) {
          lines.push(...formatExampleBlock('Exemple', mediaType.example, '    '));
        }
      });
    }
  }

  if (operation.responses) {
    lines.push('- Réponses:');
    Object.entries(operation.responses).forEach(([statusCode, response]) => {
      let resolved = response;
      if (response && response.$ref) {
        resolved = resolveRef(response.$ref);
      }
      if (!resolved) return;
      const description = resolved.description ? resolved.description.replace(/\s+/g, ' ').trim() : '—';
      lines.push(`  - ${statusCode}: ${description}`);
      if (resolved.content) {
        Object.entries(resolved.content).forEach(([contentType, mediaType]) => {
          if (!mediaType) return;
          const schema = mediaType.schema || null;
          const typeLabel = describeSchemaType(schema);
          const schemaRef = schema && schema.$ref ? refName(schema.$ref) : null;
          lines.push(`    - ${contentType}: ${typeLabel}${schemaRef ? ` (${schemaRef})` : ''}`);
          if (mediaType.examples) {
            Object.entries(mediaType.examples).forEach(([exampleName, exampleValue]) => {
              if (exampleValue && typeof exampleValue === 'object' && exampleValue.value !== undefined) {
                lines.push(...formatExampleBlock(`Exemple ${exampleName}`, exampleValue.value, '      '));
              }
            });
          }
          if (mediaType.example !== undefined) {
            lines.push(...formatExampleBlock('Exemple', mediaType.example, '      '));
          }
        });
      }
    });
  }

  return lines.join('\n');
}

const operationsByTag = new Map();

Object.entries(openapi.paths || {}).forEach(([pathUrl, pathItem]) => {
  const pathParameters = Array.isArray(pathItem.parameters) ? pathItem.parameters : [];
  Object.entries(pathItem).forEach(([method, operation]) => {
    if (!HTTP_METHODS.includes(method)) return;
    if (!operation || typeof operation !== 'object') return;
    const tags = operation.tags && operation.tags.length ? operation.tags : ['_untagged'];
    tags.forEach((tag) => {
      if (!operationsByTag.has(tag)) {
        operationsByTag.set(tag, []);
      }
      operationsByTag.get(tag).push({
        method: method.toUpperCase(),
        path: pathUrl,
        operation,
        pathParameters,
      });
    });
  });
});

function sortOperations(operations) {
  return operations.sort((a, b) => {
    if (a.path === b.path) {
      return METHOD_ORDER.indexOf(a.method) - METHOD_ORDER.indexOf(b.method);
    }
    return a.path.localeCompare(b.path);
  });
}

const tagEntries = [];

(openapi.tags || []).forEach((tag) => {
  if (!tag || !tag.name) return;
  if (operationsByTag.has(tag.name)) {
    tagEntries.push({
      key: tag.name,
      displayName: tag.name,
      description: tag.description || '',
      externalDocs: tag.externalDocs || null,
    });
  }
});

const missingTags = [];
operationsByTag.forEach((_, tagName) => {
  if (tagEntries.some((entry) => entry.key === tagName)) {
    return;
  }
  const displayName = tagName === '_untagged' ? 'Sans tag' : tagName;
  const meta = tagMeta.get(tagName) || {};
  missingTags.push({
    key: tagName,
    displayName,
    description: meta.description || '',
    externalDocs: meta.externalDocs || null,
  });
});

missingTags.sort((a, b) => a.displayName.localeCompare(b.displayName));
tagEntries.push(...missingTags);

function buildTaskContent(tag, index) {
  const taskId = `TASK${String(index + 1).padStart(3, '0')}`;
  const operations = sortOperations(operationsByTag.get(tag.key) || []);
  const schemaRefs = new Set();

  operations.forEach(({ operation }) => {
    collectSchemaRefsFromOperation(operation, schemaRefs);
  });

  const expandedSchemaRefs = expandSchemaDependencies(schemaRefs);

  const lines = [];
  lines.push(`# ${taskId} — API V2 ${tag.displayName}`);
  lines.push('');
  lines.push('## Contexte');
  lines.push(`Le domaine « ${tag.displayName} » (tag OpenAPI \`${tag.key}\`) est défini dans \`tasks/openceapi.json\` (API V2). Cette fiche remplace la spécification V1 correspondante.`);
  lines.push('');
  lines.push('## Objectifs');
  lines.push('- Connecter toutes les opérations listées via le client généré et les hooks TanStack Query (API V2).');
  lines.push('- Mettre à jour les écrans existants (liste, détail, formulaires) pour refléter la structure V2.');
  lines.push('- Garantir une pagination homogène avec la vue Clients actuelle pour toutes les listes.');
  lines.push('- Couvrir les cas critiques par des tests unitaires (Jest/RTL) et end-to-end (Playwright).');
  lines.push('');
  lines.push('## Notes');
  const meta = tagMeta.get(tag.key) || tag;
  if (meta && meta.description) {
    lines.push(`- Description OpenAPI : ${meta.description}`);
  }
  lines.push('- Se référer à `AGENTS.md` et consigner toute hypothèse complémentaire dans le README.');
  lines.push('- Chaque schéma référencé doit disposer d’un typage TypeScript, de mappings et des formulaires adaptés.');
  if (meta && meta.externalDocs && meta.externalDocs.url) {
    lines.push(`- Documentation externe : ${meta.externalDocs.url}`);
  }
  lines.push('');
  lines.push('## Détails OpenAPI');
  lines.push('');
  if (!operations.length) {
    lines.push('_Aucune opération n’est associée à ce tag dans le document OpenAPI._');
  } else {
    lines.push('### Aperçu des opérations');
    lines.push('');
    lines.push('| Méthode | Chemin | Résumé | OperationId |');
    lines.push('| --- | --- | --- | --- |');
    operations.forEach(({ method, path: pathUrl, operation }) => {
      const summary = operation.summary ? operation.summary.replace(/\|/g, '\\\|') : '—';
      const opId = operation.operationId ? operation.operationId.replace(/\|/g, '\\\|') : '—';
      lines.push(`| ${method} | \`${pathUrl}\` | ${summary} | ${opId} |`);
    });
    lines.push('');
    operations.forEach((operationWrapper) => {
      lines.push(formatOperation(operationWrapper));
      lines.push('');
    });
  }

  if (expandedSchemaRefs.size) {
    lines.push('## Schémas principaux');
    lines.push('');
    expandedSchemaRefs.forEach((schemaName) => {
      lines.push(summarizeSchema(schemaName));
      lines.push('');
    });
  }

  lines.push('---');
  lines.push('');
  lines.push('_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._');

  return lines.join('\n');
}

fs.mkdirSync(TASKS_DIR, { recursive: true });

tagEntries.forEach((tag, index) => {
  const fileName = `TASK${String(index + 1).padStart(3, '0')}.md`;
  const filePath = path.join(TASKS_DIR, fileName);
  const content = buildTaskContent(tag, index);
  const normalizedContent = content.endsWith('\n') ? content : `${content}\n`;
  fs.writeFileSync(filePath, normalizedContent, 'utf8');
  console.log(`Généré ${path.relative(process.cwd(), filePath)}`);
});
