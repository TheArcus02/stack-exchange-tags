import axios, { AxiosError } from 'axios'

export const fetchTags = async (
  page = 1,
  pageSize = 10,
  sortOrder = 'desc',
  sortLabel = 'popular',
  filter = '',
) => {
  sortLabel = sortLabel === 'count' ? 'popular' : sortLabel

  try {
    const { data } = await axios.get<StackExchangeResponse>(
      `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${sortOrder}&sort=${sortLabel}&inname=${filter}&site=stackoverflow&filter=!nNPvSNVZBz`,
    )
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data)
      throw new Error(
        `[TAGS_ERROR]: ${error.response?.data.error_name} - ${error.response?.data.error_message}`,
      )
    } else if (error instanceof Error) {
      console.log(error.message)
      throw new Error(`[TAGS_ERROR]: ${error.message}`)
    } else if (typeof error === 'string') {
      console.log(error)
      throw new Error(`[TAGS_ERROR]: ${error}`)
    } else {
      console.log(error)
      throw new Error(`[TAGS_ERROR]: ${JSON.stringify(error)}`)
    }
  }
}
