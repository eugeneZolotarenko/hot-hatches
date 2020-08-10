import React from "react"
import { css } from "@emotion/core"
import BounceLoader from "react-spinners/BounceLoader"

import Viewer360 from "./Blocks/Viewer360"
import SliderGallery from "./Blocks/SliderGallery"
import SliderInterior from "./Blocks/SliderInterior"

import PresentationStyle from "./PresentationStyle"

const override = css`
  display: block;
  margin: 20vh auto;
  border-color: red;
`

function Presentation({
  modelData,
  brand,
  view360Switch,
  gallerySwitch,
  interiorSwitch,
}) {
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
    if (qImages[0] > 0 && view360Switch) {
      return (
        <PresentationStyle>
          <Viewer360 view360Switch={view360Switch} images={imagesToArray(0)} />
        </PresentationStyle>
      )
    } else if (
      qImages[1] > 0 &&
      (gallerySwitch || view360Switch === undefined)
    ) {
      return (
        <PresentationStyle>
          <SliderGallery images={imagesToArray(1)} />
        </PresentationStyle>
      )
    } else if (qImages[2] > 0 && interiorSwitch) {
      return (
        <PresentationStyle>
          <SliderInterior images={imagesToArray(2)} />
        </PresentationStyle>
      )
    } else {
      return null
    }
  } else {
    return (
      <div className='sweet-loading'>
        <BounceLoader
          css={override}
          size={150}
          color={"#F3B81D"}
          loading={true}
        />
      </div>
    )
  }
}

export default Presentation
