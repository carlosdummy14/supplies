import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { emptyCar } from '../../reducers/carReducer'
import { updateStock } from '../../reducers/itemsReducer'
import Button from '../Button'
import ListOfItemsOnCar from '../ListOfItemsOnCar'

const ShoppingCar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { items, car } = useSelector(({ items, car }) => ({ items, car }))
  const [isConfirm, setIsConfirm] = useState(false)

  const handleConfirm = () => {
    dispatch(updateStock(car))
    dispatch(emptyCar())
    history.push('/')
  }

  const notEnoughStock = () => {
    return (car.find(carItem => {
      const { item: { id: carItemId }, qty: carItemQty } = carItem

      return items.find(item => item.id === carItemId && carItemQty > item.stock)
    }) || false)
  }

  return (
    <>
      <h3>Supplies to take</h3>
      <ListOfItemsOnCar isConfirm={isConfirm} />
      {car.length > 0
        ? (
            !isConfirm
              ? <Button handleClick={() => setIsConfirm(true)} text='Take items' />
              : (
                <>
                  {!notEnoughStock() && <Button handleClick={handleConfirm} text='Confirm' />}
                  <Button handleClick={() => setIsConfirm(false)} text='Cancel' />
                </>
                )
          )
        : null}
    </>
  )
}

export default ShoppingCar
