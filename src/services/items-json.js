import jsonData from './db.json'

export const getAll = async () => {
  const items = await jsonData.items

  return items
}
