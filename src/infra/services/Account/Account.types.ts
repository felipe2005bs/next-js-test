export type FindAllQueryParams = {
  Key: string;
  page: number;
  pagesize: number;
};

export type CreateAccountPayload = {
  credential: {
    user: string;
    password: string;
  };
  totalRequestsLimits: {
    create: number;
    enabled: boolean;
  };
};

export type CreateAccountResponse = {
  id?: string | null;
};
