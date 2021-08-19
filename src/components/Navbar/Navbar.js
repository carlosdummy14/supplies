import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  const totalItems = () => {
    let total = 0

    cart.forEach((item) => (total += item.qty))

    return total < 100 ? total : '99+'
  }

  return (
    <div className='Navbar'>
      <Link to='/'>
        <h2>Supplies</h2>
      </Link>
      <Link to='/add-item'>
        Add New Item
      </Link>
      <Link to='/buy-items'>
        Buy Items
      </Link>
      <div className='ShoppingCart'>
        <Link to='/shoppingcar'>
          <div>Cart</div>
        </Link>
        <div> {totalItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
