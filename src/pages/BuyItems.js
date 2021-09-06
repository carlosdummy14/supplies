import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import ListItemsToBuy from '../components/ListItemsToBuy'
import Button from '../components/Button'
import FormBuy from '../components/FormBuy/FormBuy'
import { updateStock } from '../reducers/itemsReducer'
import { emptyBuy } from '../reducers/buyReducer'

const BuyItems = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { items, buy } = useSelector(({ items, buy }) => ({
    items: items.map((item) => item.name),
    buy
  }))
  const [isConfirm, setIsConfirm] = useState(false)

  const handleConfirm = () => {
    dispatch(updateStock(buy, 'buy'))
    dispatch(emptyBuy())
    history.push('/')
  }

  return (
    <>
      <h1 className='app-titles'>Buy Items</h1>
      {
        !isConfirm
          ? <FormBuy buy={buy} items={items} setIsConfirm={setIsConfirm} />
          : (
            <>
            <div className='Shopping-buttons'>
              <Button handleClick={handleConfirm} style='button-small' text='Confirm'/>
              <Button handleClick={() => setIsConfirm(false)}style='button-small' text='Cancel' />
            </div>
            </>
            )
      }
      <ListItemsToBuy isConfirm={isConfirm} items={buy} />
    </>
  )
}

export default BuyItems
