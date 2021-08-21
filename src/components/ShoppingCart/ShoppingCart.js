import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { emptyCart } from '../../reducers/cartReducer'
import { updateStock } from '../../reducers/itemsReducer'
import Button from '../Button'
import ListOfItemsOnCart from '../ListOfItemsOnCart'
import './ShoppingCart.css'

const ShoppingCart = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { items, cart } = useSelector(({ items, cart }) => ({ items, cart }))
  const [isConfirm, setIsConfirm] = useState(false)

  const handleConfirm = () => {
    dispatch(updateStock(cart, 'sell'))
    dispatch(emptyCart())
    history.push('/')
  }

  const haveItemsOutOfStock = () => {
    return (
      cart.find((cartItem) => {
        const {
          item: { id: cartItemId },
          qty: cartItemQty
        } = cartItem

        return items.find(
          (item) => item.id === cartItemId && cartItemQty > item.stock
        )
      }) || false
    )
  }

  return (
    <>
      <h1>Supplies to take</h1>
      <ListOfItemsOnCart haveItemsOutOfStock={haveItemsOutOfStock} isConfirm={isConfirm} />
      <div className='Shopping-buttons'>
        {cart.length > 0
          ? (
              !isConfirm
                ? <Button handleClick={() => setIsConfirm(true)} style='button-small ' text='Take items' />
                : (
                  <>
                    {!haveItemsOutOfStock() && (
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
