import React from "react"
import { Link } from "react-router-dom"

import HatchCardStyle from "./HatchCardStyle"
import changeLinkSpace from "../../Helpers/changeLinkSpace"

const HatchCard = (props) => {
  return (
    <HatchCardStyle>
      {props.brandData.map((hatch) => {
        return (
          <Link
            key={hatch.name}
            className='card-wrapper'
            to={{
              search:
                changeLinkSpace(props.brand) +
                "/" +
                changeLinkSpace(hatch.name),
              pathname: "/brand/model"
            }}>
            <div className='tech-part'>
              <ul className='tech-info'>
                <li>Max. Speed: 240 km/h</li>
                <li>0-100 km/h: 5.5 s</li>
                <li>0-160 km/h: 12.5 s</li>
                <li>100-0 km/h: 8.5 s</li>
                <li>Nurburgring: 7:47.19 m</li>
              </ul>
              <h3>{hatch.name}</h3>
            </div>
            <div
              className='img-part'
              style={{
                backgroundImage: `url('assets/${props.brand}/${hatch.name}.jpg')`
              }}></div>
          </Link>
        )
      })}
    </HatchCardStyle>
  )
}

export default HatchCard
