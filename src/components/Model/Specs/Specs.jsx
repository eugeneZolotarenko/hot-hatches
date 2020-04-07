import React from "react"

import SpecsStyle from "./SpecsStyle"

const Specs = ({ modelData }) => {
  return (
    <SpecsStyle>
      <div className='header-container'>
        <h3>
          <span className='first-letter'>S</span>Specs
        </h3>
      </div>
      <div className='specs-block'>
        <ul>
          <li>Engine: {modelData.engine}</li>
          <li>Power: {modelData.power}</li>
          <li>Torque: {modelData.torque}</li>
        </ul>
      </div>
      <div className='specs-block'>
        <ul>
          <li>{modelData.wheelDrive}</li>
          <li>Gearbox: {modelData.gearbox}</li>
          <li>Weight: {modelData.weight}</li>
        </ul>
      </div>
      <div className='specs-block'>
        <ul>
          <li>Max. Speed: {modelData.maxSpeed}</li>
          <li>0-100 km/h: {modelData.sero100}</li>
          <li>1/4 mile: {modelData.quarterMile}</li>
          <li>
            {modelData.nurburgring
              ? `Nurburgring lap time: ${modelData.quarterMile}`
              : null}
          </li>
        </ul>
      </div>
    </SpecsStyle>
  )
}
export default Specs
