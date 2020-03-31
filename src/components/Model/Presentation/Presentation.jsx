import React from "react"

import Viewer360 from "./Blocks/Viewer360"
import Slider from "./Blocks/Slider"

import PresentationStyle from "./PresentationStyle"

const Presentation = ({ modelData, brand }) => {
  // qImages - Quantity of images, it is array, which looks like [360 images, gallery, interior]
  const { qImages, name } = modelData

  function imagesToArray(numberInArr) {
    let arrImg = []
    const folders = ["360", "Gallery", "Interior"]
    const modelForUrl = name.split(/[ ,]+/).join("%20")
    const imgPath = `${window.location.origin}/assets/${brand}/${modelForUrl}/${folders[numberInArr]}`
    for (let i = 1; i <= qImages[numberInArr]; i++) {
      arrImg.push(`${imgPath}/${i}.jpg`)
    }
    return arrImg
  }

  if (qImages) {
    if (qImages[0] > 0) {
      return (
        <PresentationStyle>
          <Viewer360 images={imagesToArray(0)} />
        </PresentationStyle>
      )
    } else if (qImages[1] > 0) {
      return (
        <PresentationStyle>
          <Slider images={imagesToArray(1)} />
        </PresentationStyle>
      )
    } else if (qImages[2] > 0) {
      return (
        <PresentationStyle>
          <Slider images={imagesToArray(2)} />
        </PresentationStyle>
      )
    } else {
      return <p>Loading...</p>
    }
  } else {
    return <p>Loading...</p>
  }
}

export default Presentation
