import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setFilterAction } from '../../reducers/filterReducer'
import './Search.css'

const Search = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event) => {
    const value = event.target.value

    dispatch(setFilterAction(value))
    setSearchValue(value)
  }

  return (
    <div className='Search'>
      <input
        className='Search__input'
        placeholder='Item to search...'
        type='text'
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search
