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

  function handleClick(e) {
    const hatchBrand = e.target.dataset.brand
    props.setBrand(hatchBrand)
  }

  return (
    <HatchExamplesStyle>
      <div className='examples-table'>
        {RandomizeIt(examples).map(({ brand, model, country }, i) => {
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
                  changeLinkSpace(model, "~"),
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
