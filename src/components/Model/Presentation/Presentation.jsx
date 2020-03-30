import React, { useState, useEffect } from "react"

import Viewer360 from "../Viewer360"
import Gallery from "../Gallery"

// import { Link } from "react-router-dom"

import PresentationStyle from "./PresentationStyle"

const Presentation = (props) => {
  function imagesToArray(numberInArr, folderOfImages) {
    let arrImg = []
    const modelForUrl = props.modelData.name.split(/[ ,]+/).join("%20")
    const imgPath = `${window.location.origin}/assets/${props.brand}/${modelForUrl}/${folderOfImages}`
    // qImages - Quantity of images, it is array, which looks like [360 images, gallery, interior]
    for (let i = 1; i <= props.modelData.qImages[numberInArr]; i++) {
      arrImg.push(`${imgPath}/${i}.jpg`)
    }
    return arrImg
  }

  if (props.modelData.qImages && props.modelData.qImages[0] > 0) {
    const images360 = imagesToArray(0, "360")
    return (
      <PresentationStyle>
        <Viewer360 images={images360} />
      </PresentationStyle>
    )
  } else if (props.modelData.qImages && props.modelData.qImages[1] > 0) {
    const imagesGallery = imagesToArray(1, "Gallery")
    return (
      <PresentationStyle>
        <Gallery images={imagesGallery} />
      </PresentationStyle>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default Presentation
