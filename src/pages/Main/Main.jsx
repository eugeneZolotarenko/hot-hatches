import React from "react"

import MainHeader from "../../components/Main/MainHeader"
import HatchExamples from "../../components/Main/HatchExamples"
import BrandsBlock from "../../components/Main/BrandsBlock"

import MainStyle from "./MainStyle"

const Main = (props) => {
  return (
    <MainStyle>
      <MainHeader />
      <HatchExamples
        setBrand={props.setBrand}
        setModel={props.setModel}
        setModelID={props.setModelID}
        model={props.model}
        brand={props.brand}
      />
      <BrandsBlock
        setBrand={props.setBrand}
        brand={props.brand}
        setBrandCountry={props.setBrandCountry}
      />
    </MainStyle>
  )
}

export default Main
