import React, { useState } from "react"

import ModelStyle from "./ModelStyle"

import ModelHeader from "../../components/Model/ModelHeader"
import Presentation from "../../components/Model/Presentation"
import SwitchesPresentation from "../../components/Model/SwitchesPresentation"

import cutURL from "../../components/Helpers/cutURL"

const Model = (props) => {
  const [view360Switch, setView360Switch] = useState(true)
  const [gallerySwitch, setGallerySwitch] = useState(false)
  const [interiorSwitch, setInteriorSwitch] = useState(false)

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
      <section className='full-presentation'>
        <SwitchesPresentation
          setView360Switch={setView360Switch}
          setGallerySwitch={setGallerySwitch}
          setInteriorSwitch={setInteriorSwitch}
        />
        <Presentation
          view360Switch={view360Switch}
          gallerySwitch={gallerySwitch}
          interiorSwitch={interiorSwitch}
          brand={props.brand}
          model={props.model}
          brandCountry={props.brandCountry}
          modelData={props.modelData}
          setModelData={props.setModelData}
        />
      </section>
    </ModelStyle>
  )
}

export default Model
