import React, { useState, useEffect } from "react"
import AwesomeSlider from "react-awesome-slider"
import AwesomeSliderStyles from "react-awesome-slider/src/styles"

import GalleryStyle from "./GalleryStyle"

const Gallery = ({ images }) => {
  if (images) {
    return (
      <GalleryStyle>
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
          {images.map((image, i) => {
            return <div key={i} data-src={image} />
          })}
        </AwesomeSlider>
      </GalleryStyle>
    )
  } else {
    return <p>Somethins wrong happened</p>
  }
}
export default Gallery
