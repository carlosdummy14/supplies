import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { emptyCart, setOutOfStock } from '../../reducers/cartReducer'
import { updateStock } from '../../reducers/itemsReducer'
import checkItemsOutOfStock from '../../utils/checkItemsOutOfStock'
import Button from '../Button'
import ListOfItemsOnCart from '../ListOfItemsOnCart'
import './ShoppingCart.css'

const ShoppingCart = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { items, cart } = useSelector(({ items, cart }) => ({ items, cart }))
  const [isConfirm, setIsConfirm] = useState(false)
  const [haveItemsOutOfStock, setHaveItemsOutOfStock] = useState(false)

  const handleConfirm = () => {
    dispatch(updateStock(cart, 'sell'))
    dispatch(emptyCart())
    history.push('/')
  }

  const handleTakeItems = () => {
    const itemsOutOfStock = checkItemsOutOfStock(items, cart)

    dispatch(setOutOfStock(itemsOutOfStock))

    setHaveItemsOutOfStock(itemsOutOfStock.length > 0)
    setIsConfirm(true)
  }

  return (
    <>
      <h1 className='app-titles'>Supplies to take</h1>
      <ListOfItemsOnCart isConfirm={isConfirm} />
      <div className='Shopping-buttons'>
        {cart.length > 0
          ? (
              !isConfirm
                ? <Button handleClick={handleTakeItems} style='button-small ' text='Take items' />
                : (
                  <>
                    {!haveItemsOutOfStock && (
                      <Button handleClick={handleConfirm} style='button-small ' text='Confirm' />
                    )}
                    <Button handleClick={() => setIsConfirm(false)} style='button-small ' text='Cancel' />
                  </>
                  )
            )
          : null}
      </div>
    </>
  )
}

export default ShoppingCart
