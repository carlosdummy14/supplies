import React from 'react'

import './ItemToBuy.css'
import Button from '../Button'

const ItemToBuy = ({ item, incDec, handleDeleteItem, handleIncDec, isConfirm }) => {
  const { img, name, description, qty = 0 } = item

  return (
    <div className='ItemToBuy'>
      <div className='ItemToBuy__container'>
        <img alt={name} className='ItemToBuy__image' src={img} />
      </div>

      <div className='ItemToBuy__text'>
        <h3 className='ItemToBuy__title'>{name}</h3>
        <p className='ItemToBuy__description'>{description}</p>
      </div>

      <div className='ItemToBuy__quantityContainer'>
        {isConfirm ? null : <Button handleClick={() => handleIncDec(item, incDec.DECREMENT)} style='button button--dec' text='' />}
        <span className='ItemToBuy__quantity'>{qty}</span>
        {isConfirm ? null : <Button handleClick={() => handleIncDec(item, incDec.INCREMENT)} style='button button--inc' text='' />}
      </div>
      {isConfirm ? null : <Button handleClick={() => handleDeleteItem(item)} style='button button--delete' text='' />}
    </div>
  )
}

export default ItemToBuy
