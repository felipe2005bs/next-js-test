export interface ListResponse<T> {
  records: Array<T>;
  page?: number | null;
  pageSize?: number | null;
  totalRecords?: number | null;
  totalPages?: number | null;
}
