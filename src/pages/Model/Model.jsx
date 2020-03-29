import React from "react"

import ModelStyle from "./ModelStyle"

import ModelHeader from "../../components/Model/ModelHeader"
import Presentation from "../../components/Model/Presentation"

import cutURL from "../../components/Helpers/cutURL"

const Model = (props) => {
  const searchPartURL = window.location.search
  // && props.brand === ""
  if (searchPartURL) {
    const [country, brand, model, id] = cutURL()
    props.setBrandCountry(country.split(/[~]+/).join(" "))
    props.setBrand(brand)
    props.setModel(model)
    props.setModelID(id)
  }

  return (
    <ModelStyle>
      <ModelHeader
        brand={props.brand}
        model={props.model}
        brandCountry={props.brandCountry}
        modelData={props.modelData}
      />
      <Presentation
        brand={props.brand}
        model={props.model}
        brandCountry={props.brandCountry}
        modelData={props.modelData}
        setModelData={props.setModelData}
      />
    </ModelStyle>
  )
}

export default Model
