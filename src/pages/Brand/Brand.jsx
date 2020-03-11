import React from "react"

import BrandHeader from "../../components/Brand/BrandHeader"
import HatchCard from "../../components/Brand/HatchCard"

import cutURL from "../../components/Helpers/cutURL"

import BrandStyle from "./BrandStyle"

const Brand = (props) => {
  if (props.brand === "") {
    const [country, brand] = cutURL()
    props.setBrand(brand)
    props.setBrandCountry(country)
  }

  return (
    <BrandStyle>
      <BrandHeader brand={props.brand} brandCountry={props.brandCountry} />
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
