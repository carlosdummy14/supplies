import React from 'react'

import './ItemOnCar.css'
import Button from '../Button'

const ItemOnCar = ({ item, incDec, handleDeleteItem, handleIncDec }) => {
  const { item: { img, name, description, stock }, qty } = item

  return (
    <div className='ItemOnCar'>
      <img alt={name} src={img} />

      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className='quantity-container'>
        <button onClick={() => handleIncDec(item.item, incDec.DECREMENT)}>-</button>
        <span className='quantity'>{qty}</span>
        <button onClick={() => handleIncDec(item.item, incDec.INCREMENT)}>+</button>
      </div>
      <Button handleClick={() => handleDeleteItem(item.item)} text='X' />
    </div>
  )
}

export default ItemOnCar
