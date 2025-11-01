export const parseAccumulatedValuesJson = (
  value: string | undefined,
): Record<string, number> | undefined => {
  if (!value) {
    return undefined;
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(value);
  } catch (error) {
    throw new Error('Invalid JSON for accumulated values');
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Invalid accumulated values payload');
  }

  const entries = Object.entries(parsed as Record<string, unknown>);
  if (entries.length === 0) {
    return undefined;
  }

  const result: Record<string, number> = {};
  for (const [key, raw] of entries) {
    const trimmedKey = key.trim();
    if (!trimmedKey) {
      continue;
    }

    const numericValue =
      typeof raw === 'number'
        ? raw
        : typeof raw === 'string' && raw.trim().length > 0
          ? Number(raw)
          : Number.NaN;

    if (!Number.isFinite(numericValue)) {
      throw new Error('Invalid accumulated values payload');
    }

    result[trimmedKey] = Number(numericValue);
  }

  if (Object.keys(result).length === 0) {
    return undefined;
  }

  return result;
};

export const isValidAccumulatedValuesJson = (value: string | undefined): boolean => {
  if (!value) {
    return true;
  }

  try {
    return parseAccumulatedValuesJson(value) !== undefined;
  } catch (error) {
    return false;
  }
};
