import React from 'react'

import './ItemOnCart.css'
import Button from '../Button'

const ItemOnCart = ({ item, incDec, handleDeleteItem, handleIncDec, isConfirm }) => {
  const { item: { img, name, description }, qty, outOfStock } = item

  return (
    <div className='ItemOnCart'>
      <div className='ItemOnCart__container'>
        <img alt={name} className='ItemOnCart__image' src={img} />
      </div>

      <div className='ItemOnCart__text'>
        <h3 className='ItemOnCart__title'>{name}</h3>
        <p className='ItemOnCart__description'>{description}</p>
      </div>

      <div className='ItemOnCart__quantityContainer'>
        {isConfirm ? null : <Button handleClick={() => handleIncDec(item.item, incDec.DECREMENT)} style='button--dec ' text='' />}
        <span className='ItemOnCart__quantity'>{qty}</span>
        {isConfirm ? null : <Button handleClick={() => handleIncDec(item.item, incDec.INCREMENT)} style='button--inc ' text='' />}
      </div>
      {isConfirm ? null : <Button handleClick={() => handleDeleteItem(item.item)} style='button--delete ' text='' />}
      {isConfirm && outOfStock ? <span style={{ color: 'red' }}>Not enough stock for this item</span> : null}
    </div>
  )
}

export default ItemOnCart
