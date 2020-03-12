import React from "react"

import SearchBarStyle from "./SearchBarStyle"

const SearchBar = (props) => {
  return (
    <SearchBarStyle>
      <form>
        <input className='form-text' type='text' />
        <input className='form-submit' type='submit' value='Search' />
      </form>
    </SearchBarStyle>
  )
}

export default SearchBar
