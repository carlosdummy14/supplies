import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { decrementItem, deleteItemToBuy, incrementItem } from '../../reducers/buyReducer'
import ItemToBuy from '../ItemToBuy'
import './ListItemsToBuy.css'

const INC_DEC = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

const ListItemsToBuy = ({ isConfirm = false }) => {
  const dispatch = useDispatch()
  const items = useSelector(({ buy }) => buy)

  const handleDeleteItem = (item) => {
    dispatch(deleteItemToBuy(item))
  }

  const handleIncDec = (item, incDec) => {
    incDec === INC_DEC.INCREMENT && dispatch(incrementItem(item))
    incDec === INC_DEC.DECREMENT && dispatch(decrementItem(item))
  }

  return (
    <div>
      {
        items.length === 0
          ? (
            <div>Empty !!</div>
            )
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
