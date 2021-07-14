import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setFilterAction } from '../../reducers/filterReducer'

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
      <div>
        <input
          placeholder='Item a buscar...'
          type='text'
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Search
