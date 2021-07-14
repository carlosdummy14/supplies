import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItemCarAction } from '../../reducers/carReducer'
import Item from '../Item'
import './ListOfItems.css'

const ListOfItems = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ items, filter }) => {
    if (filter.text === '') {
      return items
    } else {
      return items.filter((item) =>
        item.name.toLowerCase().includes(filter.text.toLowerCase())
      )
    }
  })

  const handleClick = (item) => {
    dispatch(addItemCarAction(item))
  }

  return (
    <div className='ListOfItems'>
      {!items
        ? (
          <div>Nothing to show...</div>
          )
        : (
            items.map((item) => (
              <Item key={item.id} handleClick={handleClick} item={item} />
            ))
          )}
    </div>
  )
}

export default ListOfItems
