import React, { useState, useEffect } from "react"

// import { Link } from "react-router-dom"

import PresentationStyle from "./PresentationStyle"
import Viewer from "../../Helpers/Viewer"

const Presentation = (props) => {
  let arrImg = []

  // useEffect(() => {
  //   // if (window.location.pathname.includes("model")) {
  //   window.onpopstate = (e) => {
  //     props.setModelData({})
  //   }
  //   // }
  // }, [])

  if (props.modelData && props.modelData.img360) {
    // props.setModelData({})
    console.log(props.modelData.img360)
    const modelForUrl = props.modelData.name.split(/[ ,]+/).join("%20")
    const imgPath = `${window.location.origin}/assets/${props.brand}/${modelForUrl}/360`
    for (let i = 1; i <= props.modelData.img360; i++) {
      arrImg.push(`${imgPath}/${i}.jpg`)
    }
    return (
      <PresentationStyle>
        <Viewer images={arrImg} />
      </PresentationStyle>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default Presentation
