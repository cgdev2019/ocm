export type AllowedParentReference = {
  id?: number | string | null;
  code?: string | null;
  description?: string | null;
};

export type AllowedParentDto = {
  parentId?: number | string | null;
  parentCode?: string | null;
  parentDescription?: string | null;
  id?: number | string | null;
  code?: string | null;
  description?: string | null;
  userAccountCode?: string | null;
  userAccountDescription?: string | null;
  customerAccountCode?: string | null;
  customerAccountDescription?: string | null;
  userAccount?: AllowedParentReference | null;
  customerAccount?: AllowedParentReference | null;
  [key: string]: unknown;
};

export type AllowedParentListItem = {
  id: string;
  code: string;
  description?: string;
  parentId?: number;
  customerAccountCode?: string;
  customerAccountDescription?: string;
};
