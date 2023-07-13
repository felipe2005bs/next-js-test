import { ListResponse } from '../api/ListResponse';
import {
  Account,
  CreateAccountPayload,
  CreateAccountResponse,
  GetAllAccountsQueryParams,
  UpdateAccountPayload,
} from '../models/account';

export interface IAccountRepository {
  createAccount: (
    account: CreateAccountPayload,
  ) => Promise<CreateAccountResponse>;
  updateAccount: (
    accountId: string,
    account: UpdateAccountPayload,
  ) => Promise<void>;
  getAllAccounts: (
    params: GetAllAccountsQueryParams,
  ) => Promise<ListResponse<Account>>;
  getActions: (password: string, passwordConfirmation: string) => Promise<void>;
}
