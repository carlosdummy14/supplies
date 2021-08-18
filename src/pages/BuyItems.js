import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import ListItemsToBuy from '../components/ListItemsToBuy'
import Button from '../components/Button'
import FormBuy from '../components/FormBuy/FormBuy'

const BuyItems = () => {
  const { items, buy } = useSelector(({ items, buy }) => ({
    items: items.map((item) => item.name),
    buy
  }))
  const [isConfirm, setIsConfirm] = useState(false)

  const handleConfirm = () => {
    console.log('confirm!!!!')
  }

  return (
    <>
      <h1>Buy Items</h1>
      {
        !isConfirm
          ? <FormBuy buy={buy} items={items} setIsConfirm={setIsConfirm} />
          : (
            <>
              <Button handleClick={handleConfirm} text='Confirm' />
              <Button handleClick={() => setIsConfirm(false)} text='Cancel' />
            </>
            )
      }
      <ListItemsToBuy isConfirm={isConfirm} items={buy} />
    </>
  )
}

export default BuyItems
