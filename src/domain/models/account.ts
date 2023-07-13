export type TotalRequestsLimits = {
  create?: number | null;
  enabled?: boolean | null;
};

export type TotalRequestsCount = {
  create?: number | null;
  compare?: number | null;
  match?: number | null;
};

export type Account = {
  id?: string | null;
  enabled?: boolean | null;
  credential?: {
    user?: string | null;
  };
  totalRequestsLimits?: TotalRequestsLimits | null;
  totalRequestsCount?: TotalRequestsCount | null;
};

export type CreateAccountPayload = {
  credential: {
    user: string;
    password: string;
  };
  totalRequestsLimits: TotalRequestsLimits;
};

export type CreateAccountResponse = {
  id?: string | null;
};

export type UpdateAccountPayload = CreateAccountPayload & {
  enabled?: boolean;
};

export type GetAllAccountsQueryParams = {
  Key: string;
  page: number;
  pagesize: number;
};
