import React from 'react'
import { useDispatch } from 'react-redux'

import { INC_DEC } from '../../utils/constant'
import { decrementItem, deleteItemToBuy, incrementItem } from '../../reducers/buyReducer'
import ItemToBuy from '../ItemToBuy'
import './ListItemsToBuy.css'

const ListItemsToBuy = ({ isConfirm = false, items = [] }) => {
  const dispatch = useDispatch()

  const handleDeleteItem = (item) => {
    dispatch(deleteItemToBuy(item))
  }

  const handleIncDec = (item, incDec) => {
    incDec === INC_DEC.INCREMENT && dispatch(incrementItem(item))
    incDec === INC_DEC.DECREMENT && dispatch(decrementItem(item))
  }

  const haveItems = items.length > 0

  return (
    <div className='ListItemsToBuy'>
      {
        !haveItems
          ? <div>Empty !!</div>
          : (
              items.map((item) => {
                return (
                  <ItemToBuy key={item.name} handleDeleteItem={handleDeleteItem} handleIncDec={handleIncDec} incDec={INC_DEC} isConfirm={isConfirm} item={item} />
                )
              })
            )
      }
    </div>
  )
}

export default ListItemsToBuy
