export class ApiTimeoutError extends Error {
  constructor(message = 'API request timed out') {
    super(message);
    this.name = 'ApiTimeoutError';
  }
}
