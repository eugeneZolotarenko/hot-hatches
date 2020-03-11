import React from "react"

import SearchBarStyle from "./SearchBarStyle"

const SearchBar = (props) => {
  return (
    <SearchBarStyle>
      <form>
        <input type='text' />
        <input type='submit' value='Search' />
      </form>
    </SearchBarStyle>
  )
}

export default SearchBar
