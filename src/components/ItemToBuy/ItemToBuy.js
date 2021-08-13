import React from 'react'

import './ItemToBuy.css'
import Button from '../Button'

const ItemToBuy = ({ item, incDec, handleDeleteItem, handleIncDec, isConfirm }) => {
  const { img, name, description, stock, qty = 0 } = item

  return (
    <div className='ItemToBuy'>
      <img alt={name} src={img} />

      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className='quantity-container'>
        {isConfirm ? null : <Button handleClick={() => handleIncDec(item, incDec.DECREMENT)} text='-' />}
        <span className='quantity'>{qty}</span>
        {isConfirm ? null : <Button handleClick={() => handleIncDec(item, incDec.INCREMENT)} text='+' />}
      </div>
      {isConfirm ? null : <Button handleClick={() => handleDeleteItem(item)} text='X' />}
      {isConfirm && (qty > stock) ? <span style={{ color: 'red' }}>Not enough stock for this item</span> : null}
    </div>
  )
}

export default ItemToBuy
