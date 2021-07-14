import React from 'react'
import { useSelector } from 'react-redux'

import ListOfItemsOnCar from '../ListOfItemsOnCar'

const ShoppingCar = () => {
  const itemsOnCar = useSelector(({ car }) => {
    console.log({ car })
    if (car.length > 0) {
      return car
    }

    return []
  })

  return (
    <>
      <div>This is a shopping car</div>
      <ListOfItemsOnCar />
      <div>{itemsOnCar.map((item) => item.item.name)}</div>
    </>
  )
}

export default ShoppingCar
