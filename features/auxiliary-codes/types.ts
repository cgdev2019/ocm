export type AuxiliaryAccountDto = {
  customerAccountCode?: string | null;
  auxiliaryAccountCode?: string | null;
  auxiliaryAccountLabel?: string | null;
};

export type AuxiliaryAccountDetail = {
  customerAccountCode: string;
  auxiliaryAccountCode?: string;
  auxiliaryAccountLabel?: string;
};
