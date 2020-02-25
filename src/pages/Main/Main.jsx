import React from "react"

import MainHeader from "../../components/MainHeader"
import HatchExamples from "../../components/HatchExamples"

import MainStyle from "./MainStyle"

const Main = (props) => {
  return (
    <MainStyle>
      <MainHeader />
      <HatchExamples setBrand={props.setBrand} />
    </MainStyle>
  )
}

export default Main
