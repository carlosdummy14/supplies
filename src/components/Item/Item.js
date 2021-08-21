import React from 'react'

import './Item.css'
import Button from '../Button'

const Item = ({ item, handleClick, canBuy }) => {
  const { img, name, description, stock } = item

  return (
    <div className='Item'>
      <div className='Item-image__container'>
        <img alt={name} className='Item-image__image' src={img} />
      </div>
      <h3 className='Item__name'>{name}</h3>
      <p className='Item__description'>{description}</p>
      <p className='Item__stock'>{stock}</p>
      {
        canBuy
          ? <Button className='Button' handleClick={() => handleClick(item)} text='Add to Cart' />
          : null
      }
    </div>
  )
}

export default Item
