import { BaseApiResponse } from '@/domain/api/BaseApiResponse';
import { ListApiResponse } from '@/domain/api/ListResponse';
import { PersonalInfo } from '@/domain/models/personalInfo';
import { apiBFF } from '@/infra/http/apiBFF';
import { FindAllQueryParams } from './PersonalInfo.types';

export async function findAll(
  params: FindAllQueryParams,
): Promise<ListApiResponse<PersonalInfo>> {
  const resp = await apiBFF.get<BaseApiResponse<ListApiResponse<PersonalInfo>>>(
    '/v1/personalInfos',
    {
      params: params,
    },
  );
  const { data } = resp;
  return data?.data;
}
