import React from "react"

import BrandHeaderStyle from "./BrandHeaderStyle"
import changeLinkSpace from "../../Helpers/changeLinkSpace"

const BrandHeader = ({ brand, brandCountry }) => {
  const countryFlagLink = `assets/flags/${changeLinkSpace(
    brandCountry,
    "-"
  )}.svg`
  return (
    <BrandHeaderStyle>
      <span className='first-letter'>{brand.charAt(0)}</span>
      <h2>{brand}</h2>
      <img
        className='brand-country'
        src={countryFlagLink}
        alt={brandCountry}></img>
    </BrandHeaderStyle>
  )
}

export default BrandHeader
