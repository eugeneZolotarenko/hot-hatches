import React from "react"

import BrandHeaderStyle from "./BrandHeaderStyle"

const BrandHeader = ({ brand }) => {
  return (
    <BrandHeaderStyle>
      <span className='first-letter'>{brand.charAt(0)}</span>
      <h2>{brand}</h2>
    </BrandHeaderStyle>
  )
}

export default BrandHeader
