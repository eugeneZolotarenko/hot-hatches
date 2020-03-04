import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import BrandsBlockStyle from "./BrandsBlockStyle"

import GetFireBaseData from "../Helpers/GetFireBaseData"

const BrandsBlock = (props) => {
  const [allBrands, setAllBrands] = useState([])

  useEffect(() => {
    const collection = "Brands"
    GetFireBaseData(collection, setAllBrands)
  }, [])

  const sortedBrands = allBrands.map((item) => item.name).sort()

  function handleClick(e) {
    const hatchBrand = e.target.dataset.brand
    props.setBrand(hatchBrand)
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
                search: name,
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
