import React from "react"
import { Link } from "react-router-dom"

import HatchCardStyle from "./HatchCardStyle"
import changeLinkSpace from "../../Helpers/changeLinkSpace"

const HatchCard = (props) => {
  // console.log(props.filteredData.length !== 0)
  // if (props.filteredData) {
    return (
      <HatchCardStyle>
        {(props.filteredData ? props.filteredData : props.brandData).map((hatch) => {
          return (
            <Link
              key={hatch.id}
              className='card-wrapper'
              onClick={ () => props.setModelID(hatch.id) }
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
                    Max. Speed: <strong>240</strong> km/h
                  </li>
                  <li>
                    0-100 km/h: <strong>5.5</strong> s
                  </li>
                  <li>
                    0-160 km/h: <strong>12.5</strong> s
                  </li>
                  <li>
                    100-0 km/h: <strong>8.5</strong> s
                  </li>
                  <li>
                    Nurburgring: <strong>7:47.19</strong> m
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
        })}
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
