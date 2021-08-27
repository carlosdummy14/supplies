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
      <Link className='Navbar-logo link' to='/'>
        Supplies
      </Link>
      <Link className='link' to='/add-item'>
        Add New Item
      </Link>
      <Link className='link' to='/buy-items'>
        Buy Items
      </Link>
      <Link className='ShoppingCart link' to='/shoppingcar'>
        <div className='ShoppingCart-text'> {totalItems()}</div>
        <div className='ShoppingCart-icon' />
      </Link>
    </div>
  )
}

export default Navbar
