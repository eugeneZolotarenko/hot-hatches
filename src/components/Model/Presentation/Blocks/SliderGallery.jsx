import React from "react"
import AwesomeSlider from "react-awesome-slider"
import AwesomeSliderStyles from "react-awesome-slider/src/styles"

const Slider = ({ images }) => {
  if (images) {
    return (
      <AwesomeSlider className='model-slider' cssModule={AwesomeSliderStyles}>
        {images.map((image, i) => {
          return <div key={i} data-src={image} />
        })}
      </AwesomeSlider>
    )
  } else {
    return <p>Somethins wrong happened</p>
  }
}
export default Slider
