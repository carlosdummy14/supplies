import React from 'react'

import './Item.css'
import Button from '../Button'

const Item = ({ item, handleClick }) => {
  const { img, name, description, stock } = item

  return (
    <div className='Item'>
      <div className='container'>
        <img alt={name} src={img} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{stock}</p>
      <Button handleClick={() => handleClick(item)} text='Agregar' />
    </div>
  )
}

export default Item
