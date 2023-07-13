import { BaseApiResponse } from '@/domain/api/BaseApiResponse';
import { ListResponse } from '@/domain/api/ListResponse';
import {
  Account,
  CreateAccountPayload,
  CreateAccountResponse,
  GetAllAccountsQueryParams,
  UpdateAccountPayload,
} from '@/domain/models/account';
import { IAccountRepository } from '@/domain/repositories/AccountRepository';
import { Http } from '@/domain/repositories/Http';
import { axiosHttpClient } from '../http/axiosHttpClient';

const AccountRepository = (client: Http): IAccountRepository => ({
  createAccount: async (account: CreateAccountPayload) => {
    try {
      const data = await client.post<BaseApiResponse<CreateAccountResponse>>(
        '/v1/accounts',
        account,
      );

      return data?.data;
    } catch (error) {
      throw new Error('Error while saving the account');
    }
  },
  updateAccount: async (
    accountId: string,
    account: UpdateAccountPayload,
  ): Promise<void> => {
    try {
      const ret = await client.put<BaseApiResponse<void>>(
        `/v1/accounts/${accountId}`,
        account,
      );
      return ret?.data;
    } catch (error) {
      throw new Error('Erro ao atualizar a conta');
    }
  },
  getAllAccounts: async (params: GetAllAccountsQueryParams) => {
    console.log('---- params:', params);
    try {
      const resp = await client.get<BaseApiResponse<ListResponse<Account>>>(
        '/v1/accounts',
        {
          params: params,
        },
      );
      return resp?.data;
    } catch (error) {
      throw new Error('Erro ao listar as contas');
    }
  },
  getActions: async (password: string, passwordConfirmation: string) => {
    const resp = await client.get<BaseApiResponse<void>>('/actions', {
      params: { password, passwordConfirmation },
    });
    return resp?.data;
  },
});

export const accountRepository = AccountRepository(axiosHttpClient);
