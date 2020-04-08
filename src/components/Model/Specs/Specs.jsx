import React from "react"

import SpecsStyle from "./SpecsStyle"

const Specs = ({ modelData }) => {
  return (
    <SpecsStyle>
      <div className='header-container'>
        <h3>
          <span className='first-letter model-first-letter'>S</span>Specs
        </h3>
      </div>
      <div className='specs-container dark-container'>
        <ul className='specs-wrapper'>
          <li className='spec'>Engine: {modelData.engine}</li>
          <li className='spec'>Power: {modelData.power}</li>
          <li className='spec'>Torque: {modelData.torque}</li>
        </ul>
      </div>
      <div className='specs-container'>
        <ul className='specs-wrapper'>
          <li className='spec'>{modelData.wheelDrive}</li>
          <li className='spec'>Gearbox: {modelData.gearbox}</li>
          <li className='spec'>Weight: {modelData.weight}</li>
        </ul>
      </div>
      <div className='specs-container yellow-container'>
        <ul className='specs-wrapper'>
          <li className='spec'>Max. Speed: {modelData.maxSpeed}</li>
          <li className='spec'>0-100 km/h: {modelData.zero100}</li>
          <li className='spec'>1/4 mile: {modelData.quarterMile}</li>
          <li className='spec'>
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
