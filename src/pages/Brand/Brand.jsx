import React from "react"

import BrandHeader from "../../components/Brand/BrandHeader"
import HatchCard from "../../components/Brand/HatchCard"

import BrandStyle from "./BrandStyle"

const Brand = (props) => {
  if (props.brand === "") {
    const brand = window.location.search.substring(1)
    props.setBrand(brand)
  }

  return (
    <BrandStyle>
      <BrandHeader brand={props.brand} />
      <HatchCard
        brandData={props.brandData}
        setBrand={props.setBrand}
        setModel={props.setModel}
        brand={props.brand}
        model={props.model}
      />
    </BrandStyle>
  )
}

export default Brand
