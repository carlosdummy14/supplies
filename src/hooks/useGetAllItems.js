import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getAllItems } from '../reducers/itemsReducer'
import { getAll } from '../services/items'

const useGetAllItems = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAll().then((items) => {
      dispatch(getAllItems(items))
    })
  }, [dispatch])
}

export default useGetAllItems
