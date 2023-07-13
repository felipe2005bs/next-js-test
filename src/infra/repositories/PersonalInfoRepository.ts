import { BaseApiResponse } from '@/domain/api/BaseApiResponse';
import { ListResponse } from '@/domain/api/ListResponse';
import {
  GetAllPersonalInfoQueryParams,
  PersonalInfo,
} from '@/domain/models/personalInfo';
import { Http } from '@/domain/repositories/Http';
import { IPersonalInfoRepository } from '@/domain/repositories/PersonalInfoRepository';

export const PersonalInfoRepository = (
  client: Http,
): IPersonalInfoRepository => ({
  getAllPersonalInfo: async (params: GetAllPersonalInfoQueryParams) => {
    try {
      const resp = await client.get<
        BaseApiResponse<ListResponse<PersonalInfo>>
      >('/v1/personalInfos', {
        params: params,
      });
      return resp?.data;
    } catch (error) {
      throw new Error('Erro ao listar as infos');
    }
  },
  getPersonalInfoById: async (personalInfoId: string) => {
    try {
      const resp = await client.get<
        BaseApiResponse<ListResponse<PersonalInfo>>
      >(`/v1/personalInfos/${personalInfoId}`);
      return resp?.data;
    } catch (error) {
      throw new Error('Erro ao listar as infos');
    }
  },
});
