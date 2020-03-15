import React, { useState } from "react"

import { Link } from "react-router-dom"

import BrandHeader from "../../components/Brand/BrandHeader"
import SearchBar from "../../components/Brand/SearchBar"
import HatchCard from "../../components/Brand/HatchCard"

import cutURL from "../../components/Helpers/cutURL"

import BrandStyle from "./BrandStyle"

const Brand = (props) => {
  const [filteredData, setFilteredData] = useState()

  const searchPartURL = window.location.search
  if (searchPartURL && props.brand === "") {
    const [country, brand] = cutURL()
    props.setBrand(brand)
    props.setBrandCountry(country.split(/[~]+/).join(" "))
  }

  if (searchPartURL) {
    return (
      <BrandStyle>
        <section className='header-search'>
          <BrandHeader brand={props.brand} brandCountry={props.brandCountry} />
          <SearchBar setFilteredData={setFilteredData} brandData={props.brandData} setModelId={props.setModelId} modelId={props.modelId} />
        </section>
        <HatchCard
          brandData={props.brandData}
          filteredData={filteredData}
          setBrand={props.setBrand}
          setModel={props.setModel}
          setModelID={props.setModelID}
          brand={props.brand}
          brandCountry={props.brandCountry}
          model={props.model}
        />
      </BrandStyle>
    )
  } else {
    return (
      <div>
        <h2>Sorry but url isn't correct</h2>
        <Link to='/'>Go to Home Page</Link>
      </div>
    )
  }
}

export default Brand
