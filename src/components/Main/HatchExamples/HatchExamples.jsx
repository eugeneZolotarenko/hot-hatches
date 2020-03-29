import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import HatchExamplesStyle from "./HatchExamplesStyle"

import GetFireBaseData from "../../Helpers/GetFireBaseData"
import RandomizeIt from "../../Helpers/RandomizeIt"
import changeLinkSpace from "../../Helpers/changeLinkSpace"

const HatchExamples = (props) => {
  const [examples, setExamples] = useState([])

  useEffect(() => {
    const collection = "Examples"
    GetFireBaseData(collection, setExamples)
  }, [])

  return (
    <HatchExamplesStyle>
      <div className='examples-table'>
        {RandomizeIt(examples).map(({ brand, model, country, intID }, i) => {
          function handleClick() {
            // props.setModelID(intID)
            props.setBrand(brand)
          }
          return (
            <Link
              className='example'
              onClick={handleClick}
              to={{
                search:
                  changeLinkSpace(country, "~") +
                  "/" +
                  changeLinkSpace(brand, "~") +
                  "/" +
                  changeLinkSpace(model, "~") +
                  "/" +
                  changeLinkSpace(intID, ""),
                pathname: "/brand/model"
              }}
              key={i}
              style={{
                backgroundImage: `url('assets/${brand}/${model}.jpg')`
              }}>
              <span
                className='brand-model'
                data-brand={brand}
                data-model={model}>
                {brand} {model}
              </span>
            </Link>
          )
        })}
      </div>
    </HatchExamplesStyle>
  )
}

export default HatchExamples
