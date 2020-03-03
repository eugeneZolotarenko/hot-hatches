import React from "react"

import MainHeader from "../../components/MainHeader"
import HatchExamples from "../../components/HatchExamples"
import BrandsBlock from "../../components/BrandsBlock"

import MainStyle from "./MainStyle"

const Main = (props) => {
  return (
    <MainStyle>
      <MainHeader />
      <HatchExamples
        setBrand={props.setBrand}
        setModel={props.setModel}
        model={props.model}
        brand={props.brand}
      />
      <BrandsBlock setBrand={props.setBrand} brand={props.brand} />
    </MainStyle>
  )
}

export default Main
