import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Search from '../Search/Search'
import './Navbar.css'

const Navbar = () => {
  const car = useSelector((state) => state.car)
  const totalItems = () => {
    let total = 0

    car.forEach((item) => (total += item.qty))

    return total < 100 ? total : '99+'
  }

  return (
    <div className='Navbar'>
      <Link to='/'>
        <h2>Suministros</h2>
      </Link>
      <Search />
      <Link to='/add-item'>
        Add New Item
      </Link>
      <div className='ShoppingCar'>
        <Link to='/shoppingcar'>
          <div>Carrito</div>
        </Link>
        <div> {totalItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
