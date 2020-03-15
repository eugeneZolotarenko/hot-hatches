import React, { useState } from "react"

import SearchBarStyle from "./SearchBarStyle"

const SearchBar = (props) => {
  const [value, setValue] = useState('')

  function filterData(e) {
    e.preventDefault()
    let newArr = []
    props.brandData.map(obj => {
      if (hasValue(obj, "name", value)) {
        newArr.push(obj)
        // console.log(obj)
      }
     })
     console.log(newArr)
     props.setFilteredData(newArr)
  }

  function hasValue(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key].toLowerCase().includes(value)
  }
  return (
    <SearchBarStyle>
      <form onSubmit={ filterData }>
        <input className='form-text' type='text' value={ value }  onChange={ (e) => { setValue(e.target.value) } }/>
        <input className='form-submit' type='submit' value='Search' />
      </form>
    </SearchBarStyle>
  )
}

export default SearchBar
