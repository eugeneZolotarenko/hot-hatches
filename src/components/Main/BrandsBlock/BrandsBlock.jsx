import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import BrandsBlockStyle from "./BrandsBlockStyle"

import GetFireBaseData from "../../Helpers/GetFireBaseData"
import changeLinkSpace from "../../Helpers/changeLinkSpace"

const BrandsBlock = (props) => {
  const [allBrands, setAllBrands] = useState([])

  useEffect(() => {
    const collection = "Brands"
    GetFireBaseData(collection, setAllBrands)
  }, [])

  const sortedBrands = allBrands.map((item) => item.name).sort()

  function handleClick(e) {
    if (e.target.dataset.brand !== props.brand) {
      props.setData([])
    }
    const hatchBrand = e.target.dataset.brand
    props.setBrand(hatchBrand)
    const country = getBrandCountry(hatchBrand)
    props.setBrandCountry(country)
    window.scrollTo(0, 0)
  }

  function getBrandCountry(hatchBrand) {
    let country
    allBrands.filter((obj) => {
      if (hasValue(obj, "name", hatchBrand)) {
        const hatchObj = hasValue(obj, "name", hatchBrand)
        country = hatchObj.country
      }
    })
    return country
  }

  function hasValue(obj, key, value) {
    if (obj.hasOwnProperty(key) && obj[key] === value) {
      return obj
    }
  }

  return (
    <BrandsBlockStyle>
      <div className='header-container'>
        <h3>
          <span className='first-letter'>B</span>Brands
        </h3>
      </div>
      <div className='brands-container'>
        {sortedBrands.map((name, i) => {
          return (
            <Link
              data-brand={name}
              onClick={handleClick}
              to={{
                search:
                  changeLinkSpace(getBrandCountry(name), "~") +
                  "/" +
                  changeLinkSpace(name, "~"),
                pathname: "/brand"
              }}
              key={i}>
              {name}
            </Link>
          )
        })}
      </div>
    </BrandsBlockStyle>
  )
}
export default BrandsBlock
