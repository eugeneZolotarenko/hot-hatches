import React from "react"

import HeaderStyle from "../../sharedStyles/HeaderStyle"
import changeLinkSpace from "../Helpers/changeLinkSpace"

const ModelHeader = ({ brand, modelData, brandCountry }) => {
  const countryFlagLink = `../assets/flags/${changeLinkSpace(
    brandCountry,
    "-"
  )}.svg`
  if (modelData) {
    return (
      <HeaderStyle>
        <span className='first-letter first-model-letter'>
          {brand.charAt(0)}
        </span>
        <h2 className='model-header'>
          {brand} {modelData.name}
        </h2>
        <img
          className='brand-country'
          src={countryFlagLink}
          alt={brandCountry}></img>
      </HeaderStyle>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default ModelHeader
