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
      <div></div>
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
    </BrandsBlockStyle>
  )
}
export default BrandsBlock
