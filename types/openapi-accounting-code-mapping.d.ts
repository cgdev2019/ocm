import type { components } from '@/lib/api/generated/schema';

declare module '@/lib/api/generated/schema' {
  interface paths {
    '/v2/articles/accountingCodeMapping': {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      get?: never;
      put?: never;
      post: operations['createAccountingCodeMapping'];
      delete?: never;
      options?: never;
      head?: never;
      patch?: never;
      trace?: never;
    };
    '/v2/articles/{accountingArticleCode}/accountingCodeMapping': {
      parameters: {
        query?: never;
        header?: never;
        path: {
          accountingArticleCode: string;
        };
        cookie?: never;
      };
      get?: never;
      put: operations['updateAccountingCodeMapping'];
      post?: never;
      delete?: never;
      options?: never;
      head?: never;
      patch?: never;
      trace?: never;
    };
  }

  interface operations {
    createAccountingCodeMapping: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['AccountingCodeMappingInput'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content?: {
            'application/json'?:
              | components['schemas']['AccountingCodeMappingInput']
              | components['schemas']['AccountingCodeMapping']
              | {
                  id?: number;
                  code?: string;
                };
          };
        };
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: {
            'application/json'?: unknown;
          };
        };
        default?: {
          headers: {
            [name: string]: unknown;
          };
          content?: {
            'application/json'?: unknown;
          };
        };
      };
    };
    updateAccountingCodeMapping: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          accountingArticleCode: string;
        };
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['AccountingCodeMappingInput'];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content?: {
            'application/json'?:
              | components['schemas']['AccountingCodeMappingInput']
              | components['schemas']['AccountingCodeMapping']
              | {
                  id?: number;
                  code?: string;
                };
          };
        };
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: {
            'application/json'?: unknown;
          };
        };
        default?: {
          headers: {
            [name: string]: unknown;
          };
          content?: {
            'application/json'?: unknown;
          };
        };
      };
    };
  }
}
