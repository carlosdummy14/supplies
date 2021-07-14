import React from 'react'

import './ItemOnCar.css'
import Button from '../Button'

const ItemOnCar = ({ item, handleClick }) => {
  const { img, name, description, stock } = item.item

  return (
    <div className='ItemOnCar'>
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

export default ItemOnCar
