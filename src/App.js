import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import ListOfItems from './components/ListOfItems'
import Navbar from './components/Navbar'
import ShoppingCar from './components/ShoppingCar'
import AddItem from './pages/AddItem'
import { getAllItems } from './reducers/itemsReducer'
import { getAll } from './services/items'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAll().then((items) => {
      dispatch(getAllItems(items))
    })
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route exact component={ListOfItems} path='/' />
          <Route component={ShoppingCar} path='/shoppingcar' />
          <Route component={AddItem} path='/add-item' />
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
