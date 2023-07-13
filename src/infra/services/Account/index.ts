import { apiBFF } from '@/infra/http/apiBFF';
import { AxiosResponse } from 'axios';
import {
  CreateAccountPayload,
  CreateAccountResponse,
  FindAllQueryParams,
} from './Account.types';
import { Account } from '@/domain/models/account';
import { BaseApiResponse } from '@/domain/api/BaseApiResponse';
import { ListApiResponse } from '@/domain/api/ListResponse';

export async function create(
  request: CreateAccountPayload,
): Promise<CreateAccountResponse> {
  const { data } = await apiBFF.post<
    unknown,
    AxiosResponse<BaseApiResponse<CreateAccountResponse>>,
    CreateAccountPayload
  >('/v1/accounts', request);

  return data.data;
}

export async function findAll(
  params: FindAllQueryParams,
): Promise<ListApiResponse<Account>> {
  const resp = await apiBFF.get<BaseApiResponse<ListApiResponse<Account>>>(
    '/v1/accounts',
    {
      params: params,
    },
  );
  const { data } = resp;
  return data?.data;
}
