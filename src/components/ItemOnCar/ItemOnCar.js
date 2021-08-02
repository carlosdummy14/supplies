import React from 'react'

import './ItemOnCar.css'
import Button from '../Button'

const ItemOnCar = ({ item, incDec, handleDeleteItem, handleIncDec, isConfirm }) => {
  const { item: { img, name, description, stock }, qty } = item

  return (
    <div className='ItemOnCar'>
      <img alt={name} src={img} />

      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className='quantity-container'>
        {isConfirm ? null : <Button handleClick={() => handleIncDec(item.item, incDec.DECREMENT)} text='-' />}
        <span className='quantity'>{qty}</span>
        {isConfirm ? null : <Button handleClick={() => handleIncDec(item.item, incDec.INCREMENT)} text='+' />}
      </div>
      {isConfirm ? null : <Button handleClick={() => handleDeleteItem(item.item)} text='X' />}
      {isConfirm && (qty > stock) ? <span style={{ color: 'red' }}>Not enough stock for this item</span> : null}
    </div>
  )
}

export default ItemOnCar
