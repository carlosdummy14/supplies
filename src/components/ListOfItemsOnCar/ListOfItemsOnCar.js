import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteItemCarAction, incrementItem, decrementItem } from '../../reducers/carReducer'
import ItemOnCar from '../ItemOnCar'
import './ListOfItemsOnCar.css'

const INC_DEC = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

const ListOfItemsOnCar = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ car }) => {
    return car
  })

  const handleDeleteItem = (item) => {
    dispatch(deleteItemCarAction(item))
  }

  const handleIncDec = (item, incDec) => {
    incDec === INC_DEC.INCREMENT && dispatch(incrementItem(item))
    incDec === INC_DEC.DECREMENT && dispatch(decrementItem(item))
  }

  return (
    <div className='ListOfItemsOnCar'>
      {items.length === 0
        ? (
          <div>Empty car!!</div>
          )
        : (
            items.map((item) => (
              <ItemOnCar key={item.item.id} handleDeleteItem={handleDeleteItem} handleIncDec={handleIncDec} incDec={INC_DEC} item={item} />
            ))
          )}
    </div>
  )
}

export default ListOfItemsOnCar
