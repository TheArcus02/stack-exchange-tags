import axios from 'axios'

export const fetchTags = async (page = 1, pageSize = 10) => {
  const { data } = await axios.get(
    `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=desc&sort=popular&site=stackoverflow&filter=!nNPvSNVZBz`,
  )

  return data
}
