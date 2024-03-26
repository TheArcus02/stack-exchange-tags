import { fetchTags } from '@/lib/api/tags'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { ColumnSort } from '@tanstack/react-table'

export const useGetTags = (
  page?: number,
  perPage?: number,
  sort?: ColumnSort,
) => {
  return useQuery<StackExchangeResponse>({
    queryKey: ['tags', page, perPage, sort?.desc, sort?.id],
    queryFn: () =>
      fetchTags(page, perPage, sort?.desc ? 'desc' : 'asc', sort?.id),
    placeholderData: keepPreviousData,
  })
}
