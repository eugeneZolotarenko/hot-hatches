import React from "react"
import { Link } from "react-router-dom"

import HatchCardStyle from "./HatchCardStyle"
import changeLinkSpace from "../../Helpers/changeLinkSpace"

const HatchCard = (props) => {
  // console.log(props.filteredData.length !== 0)
  // if (props.filteredData) {
  return (
    <HatchCardStyle>
      {(props.filteredData ? props.filteredData : props.brandData).map(
        (hatch) => {
          return (
            <Link
              key={hatch.id}
              className='card-wrapper'
              onClick={() => props.setModelID(hatch.id)}
              to={{
                search:
                  changeLinkSpace(props.brandCountry, "~") +
                  "/" +
                  changeLinkSpace(props.brand, "~") +
                  "/" +
                  changeLinkSpace(hatch.name, "~"),
                pathname: "/brand/model"
              }}>
              <div className='tech-part'>
                <ul className='tech-info'>
                  <li>
                    Power: <strong>{hatch.power}</strong>
                  </li>
                  <li>
                    Torque: <strong>{hatch.torque}</strong>
                  </li>
                  <li>
                    0-100 km/h: <strong>{hatch.zero100}</strong>
                  </li>
                  <li>
                    1/4 mile: <strong>{hatch.quarterMile}</strong>
                  </li>
                  <li>
                    Nurburgring: <strong>{hatch.nurburgring}</strong>
                  </li>
                </ul>
                <h3 className='hatch-name'>{hatch.name}</h3>
              </div>
              <figure
                className='img-part'
                style={{
                  backgroundImage: `url('assets/${props.brand}/${hatch.name}.jpg')`
                }}></figure>
            </Link>
          )
        }
      )}
    </HatchCardStyle>
  )
  // } else {
  //   return (
  //     <HatchCardStyle>
  //       <h3>Nothing was found 😓</h3>
  //     </HatchCardStyle>
  //   )
  // }
}

export default HatchCard
