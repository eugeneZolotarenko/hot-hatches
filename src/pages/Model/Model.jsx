import React from "react"

import ModelStyle from "./ModelStyle"

import ModelHeader from "../../components/Model/ModelHeader"

const Model = (props) => {
  return (
    <ModelStyle>
      <ModelHeader
        brand={props.brand}
        model={props.model}
        brandCountry={props.brandCountry}
        modelData={props.modelData}
      />
    </ModelStyle>
  )
}

export default Model
