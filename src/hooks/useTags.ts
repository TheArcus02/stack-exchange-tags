import { fetchTags } from '@/lib/api/tags'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export const useGetTags = (page?: number, perPage?: number) => {
  return useQuery<StackExchangeResponse>({
    queryKey: ['tags', page, perPage],
    queryFn: () => fetchTags(page, perPage),
    placeholderData: keepPreviousData,
  })
}
