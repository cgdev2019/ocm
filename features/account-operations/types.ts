import type { ActionStatus } from '@/features/customers/types';

export type AccountOperation = {
  id: number;
  reference?: string | null;
  amount?: number | null;
  currency?: string | null;
  description?: string | null;
  assignedCustomerAccountCode?: string | null;
};

export type CustomerAccountRef = {
  code?: string | null;
  id?: number | null;
};

export type CustomerAccountInput = {
  customerAccount?: CustomerAccountRef | null;
};

export type AssignAccountOperationDto = CustomerAccountInput;

export type AssignAccountOperationFormValues = {
  accountOperationId: string;
  customerAccountCode: string;
  customerAccountId?: string | null;
};

export type AssignAccountOperationResponse = {
  actionStatus?: ActionStatus | null;
};
