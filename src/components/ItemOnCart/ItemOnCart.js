import React from 'react'

import './ItemOnCart.css'
import Button from '../Button'

const ItemOnCart = ({ item, incDec, handleDeleteItem, handleIncDec, isConfirm, haveItemsOutOfStock }) => {
  const { item: { img, name, description, stock }, qty } = item

  return (
    <div className='ItemOnCart'>
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
      {isConfirm && haveItemsOutOfStock() ? <span style={{ color: 'red' }}>Not enough stock for this item</span> : null}
    </div>
  )
}

export default ItemOnCart
