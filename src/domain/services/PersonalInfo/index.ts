import { IPersonalInfoRepository } from '@/domain/repositories/PersonalInfoRepository';

export const PersonalInfoService = (
  repository: IPersonalInfoRepository,
): IPersonalInfoRepository => ({
  getAllPersonalInfo: params => {
    return repository.getAllPersonalInfo(params);
  },
  getPersonalInfoById: personalInfoId => {
    return repository.getPersonalInfoById(personalInfoId);
  },
});

// export async function findAll(
//   params: FindAllQueryParams,
// ): Promise<ListApiResponse<PersonalInfo>> {
//   const resp = await apiBFF.get<BaseApiResponse<ListApiResponse<PersonalInfo>>>(
//     '/v1/personalInfos',
//     {
//       params: params,
//     },
//   );
//   const { data } = resp;
//   return data?.data;
// }
