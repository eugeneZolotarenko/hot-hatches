import React, { useState } from "react"

// import { Link } from "react-router-dom"

import PresentationStyle from "./PresentationStyle"
import Viewer from "../../Helpers/Viewer"

const Presentation = (props) => {
  let arrImg = []
  // const [images360, setImages360] = useState([])
  if (props.modelData && props.modelData.img360) {
    console.log(props.modelData.img360)
    const modelForUrl = props.modelData.name.split(/[ ,]+/).join("%20")
    const imgPath = `${window.location.origin}/assets/${props.brand}/${modelForUrl}/360`
    for (let i = 1; i <= props.modelData.img360; i++) {
      arrImg.push(`${imgPath}/${i}.jpg`)
    }
    if (arrImg.length === props.modelData.img360) {
      // setImages360(arrImg)
    }
    // setImages360(arrImg)
    // if (arrImg.length === props.modelData.img360) {
    return (
      <PresentationStyle>
        <Viewer images={arrImg} />
      </PresentationStyle>
    )
    // }
  } else {
    return <p>Loading...</p>
  }
}

export default Presentation
