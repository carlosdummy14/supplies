import axios from 'axios'

const baseUrl = 'http://localhost:3004/items'

export const getAll = async () => {
  const items = await axios.get(baseUrl)

  return items.data
}
