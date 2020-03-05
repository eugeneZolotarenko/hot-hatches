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
        model={props.model}
        brand={props.brand}
      />
      <BrandsBlock setBrand={props.setBrand} brand={props.brand} />
    </MainStyle>
  )
}

export default Main
