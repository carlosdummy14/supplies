import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { INC_DEC } from '../../utils/constant'
import { deleteItemCarAction, incrementItem, decrementItem } from '../../reducers/cartReducer'
import ItemOnCart from '../ItemOnCart'
import './ListOfItemsOnCart.css'

const ListOfItemsOnCart = ({ isConfirm }) => {
  const dispatch = useDispatch()
  const items = useSelector(({ cart }) => cart)

  const handleDeleteItem = (item) => {
    dispatch(deleteItemCarAction(item))
  }

  const handleIncDec = (item, incDec) => {
    incDec === INC_DEC.INCREMENT && dispatch(incrementItem(item))
    incDec === INC_DEC.DECREMENT && dispatch(decrementItem(item))
  }

  return (
    <div className='ListOfItemsOnCart'>
      {items.length === 0
        ? (
          <div>Empty cart!!</div>
          )
        : (
            items.map((item) => (
              <ItemOnCart key={item.item.id} handleDeleteItem={handleDeleteItem} handleIncDec={handleIncDec} incDec={INC_DEC} isConfirm={isConfirm} item={item} />
            ))
          )}
    </div>
  )
}

export default ListOfItemsOnCart
