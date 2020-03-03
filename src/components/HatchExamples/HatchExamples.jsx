import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import HatchExamplesStyle from "./HatchExamplesStyle"

import GetFireBaseData from "../Helpers/GetFireBaseData"
import RandomizeIt from "../Helpers/RandomizeIt"

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
      <div>
        {RandomizeIt(examples).map(({ brand, model }, i) => {
          return (
            <Link
              onClick={handleClick}
              to={{
                search: brand + "/" + model,
                pathname: "/brand"
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
