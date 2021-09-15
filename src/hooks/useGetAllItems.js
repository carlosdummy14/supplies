import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getAllItems } from '../reducers/itemsReducer'
import { getAll } from '../services/items-json'

const useGetAllItems = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState('init')

  useEffect(() => {
    getAll().then((items) => {
      dispatch(getAllItems(items))
      setState('resolved')
    })
  }, [dispatch])

  return state
}

export default useGetAllItems
