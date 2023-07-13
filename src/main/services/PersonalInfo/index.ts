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
