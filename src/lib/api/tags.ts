import axios from 'axios'

export const fetchTags = async (
  page = 1,
  pageSize = 10,
  sortOrder = 'desc',
  sortLabel = 'popular',
) => {
  sortLabel = sortLabel === 'count' ? 'popular' : sortLabel

  const { data } = await axios.get(
    `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${sortOrder}&sort=${sortLabel}&site=stackoverflow&filter=!nNPvSNVZBz`,
  )

  return data
}
