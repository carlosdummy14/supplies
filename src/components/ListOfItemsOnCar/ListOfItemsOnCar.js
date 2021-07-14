import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItemCarAction } from '../../reducers/carReducer'
import ItemOnCar from '../ItemOnCar'
import './ListOfItemsOnCar.css'

const ListOfItemsOnCar = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ car }) => {
    return car
  })

  const handleClick = (item) => {
    dispatch(addItemCarAction(item))
  }

  return (
    <div className='ListOfItemsOnCar'>
      {!items
        ? (
          <div>Nothing to show...</div>
          )
        : (
            items.map((item) => (
              <ItemOnCar key={item.item.id} handleClick={handleClick} item={item} />
            ))
          )}
    </div>
  )
}

export default ListOfItemsOnCar
