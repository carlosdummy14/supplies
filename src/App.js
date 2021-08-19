import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import ListOfItems from './components/ListOfItems'
import Navbar from './components/Navbar'
import ShoppingCart from './components/ShoppingCart'
import AddItem from './pages/AddItem'
import useGetAllItems from './hooks/useGetAllItems'
import BuyItems from './pages/BuyItems'

const App = () => {
  useGetAllItems()

  return (
    <BrowserRouter>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route exact component={ListOfItems} path='/' />
          <Route component={ShoppingCart} path='/shoppingcar' />
          <Route component={AddItem} path='/add-item' />
          <Route component={BuyItems} path='/buy-items' />
          <Route path='/:id'>
            <div>This is a details of product</div>
          </Route>
          <Route>
            <div>Not Found</div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
