import React from "react"

import HeaderStyle from "../../sharedStyles/HeaderStyle"
import changeLinkSpace from "../Helpers/changeLinkSpace"

const ModelHeader = ({ brand, modelData, brandCountry }) => {
  const countryFlagLink = `../assets/flags/${changeLinkSpace(
    brandCountry,
    "-"
  )}.svg`
  if (modelData && modelData.name) {
    const numberOfChar = modelData.name.length + brand.length
    const { innerWidth } = window
    return (
      <HeaderStyle className='model-header-wrapper'>
        <span className='first-letter first-model-letter'>
          {brand.charAt(0)}
        </span>
        <h2
          style={
            numberOfChar > 12 && innerWidth <= 600 ? { fontSize: "2rem" } : null
          }
          className='model-header'>
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
