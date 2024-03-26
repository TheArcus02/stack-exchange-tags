import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetTags = () => {
  return useQuery<StackExchangeResponse>({
    queryKey: ['tags'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow',
      )

      return data
    },
  })
}
