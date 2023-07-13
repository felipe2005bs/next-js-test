import { IAccountRepository } from '@/domain/repositories/AccountRepository';

export const AccountService = (
  repository: IAccountRepository,
): IAccountRepository => ({
  createAccount: account => {
    return repository.createAccount(account);
  },
  getActions: (password, passwordConfirmation) => {
    return repository.getActions(password, passwordConfirmation);
  },
  getAllAccounts: params => {
    return repository.getAllAccounts(params);
  },
  updateAccount: (accountId, account) => {
    return repository.updateAccount(accountId, account);
  },
});

// export async function create(
//   request: CreateAccountPayload,
// ): Promise<CreateAccountResponse> {
//   const { data } = await apiBFF.post<
//     unknown,
//     AxiosResponse<BaseApiResponse<CreateAccountResponse>>,
//     CreateAccountPayload
//   >('/v1/accounts', request);

//   return data.data;
// }

// export async function findAll(
//   params: FindAllQueryParams,
// ): Promise<ListApiResponse<Account>> {
//   const resp = await apiBFF.get<BaseApiResponse<ListApiResponse<Account>>>(
//     '/v1/accounts',
//     {
//       params: params,
//     },
//   );
//   const { data } = resp;
//   return data?.data;
// }
