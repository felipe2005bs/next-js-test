type PersonalInfoBiometry = {
  processId?: string | null;
  score?: number | null;
  status?: number | null;
  modifiedDate?: string | null;
  provider?: number | null;
};

type PersonalInfoDocument = {
  type?: number | null;
  number?: string | null;
};

export type PersonalInfo = {
  id?: string | null;
  biometry?: PersonalInfoBiometry | null;
  document?: PersonalInfoDocument | null;
};


export type GetAllPersonalInfoQueryParams = {
  page: number;
  pagesize: number;
};
