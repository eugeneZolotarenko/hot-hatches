import React from "react"

import BrandHeader from "../../components/Brand/BrandHeader"

import BrandStyle from "./BrandStyle"

const Brand = (props) => {
  if (props.brand === "") {
    const brand = window.location.search.substring(1)
    props.setBrand(brand)
  }

  return (
    <BrandStyle>
      <BrandHeader
        setBrand={props.setBrand}
        setModel={props.setModel}
        model={props.model}
        brand={props.brand}
      />
    </BrandStyle>
  )
}

export default Brand
