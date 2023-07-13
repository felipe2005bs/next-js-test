export interface BaseApiResponse<T> {
  data: T;
  notifications: { [key: string]: string };
}
