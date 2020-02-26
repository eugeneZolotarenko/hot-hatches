import React from "react"
import { Link } from "react-router-dom"

import MainHeaderStyle from "./MainHeaderStyle"

const MainHeader = (props) => {
  return (
    <MainHeaderStyle>
      <Link to='/' className='logo'>
        Hot Hatches
      </Link>
      <h2>
        That’s small-little cars, which just give you a lot of fun in your daily
        routine
      </h2>
      <div className='little-hatch'></div>
    </MainHeaderStyle>
  )
}

export default MainHeader
