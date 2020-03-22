import React from "react"

import HeaderStyle from "../../sharedStyles/HeaderStyle"
import changeLinkSpace from "../Helpers/changeLinkSpace"

const BrandHeader = ({ brand, brandCountry }) => {
  const countryFlagLink = `assets/flags/${changeLinkSpace(
    brandCountry,
    "-"
  )}.svg`
  return (
    <HeaderStyle>
      <span className='first-letter'>{brand.charAt(0)}</span>
      <h2>{brand}</h2>
      <img
        className='brand-country'
        src={countryFlagLink}
        alt={brandCountry}></img>
    </HeaderStyle>
  )
}

export default BrandHeader
