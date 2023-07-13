import { ListResponse } from '../api/ListResponse';
import {
  GetAllPersonalInfoQueryParams,
  PersonalInfo,
} from '../models/personalInfo';

export interface IPersonalInfoRepository {
  getPersonalInfoById(personalInfoId: string): Promise<PersonalInfo>;
  getAllPersonalInfo(
    params: GetAllPersonalInfoQueryParams,
  ): Promise<ListResponse<PersonalInfo>>;
}
