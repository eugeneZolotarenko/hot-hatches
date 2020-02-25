import React from "react"
import { Link } from "react-router-dom"

import HatchExamplesStyle from "./HatchExamplesStyle"

const HatchExamples = (props) => {
  function handleClick(e) {
    const hatchBrand = e.target.textContent
    async function redirectToPage() {
      await props.setBrand(hatchBrand)
      window.location.search = hatchBrand
    }
    redirectToPage()
  }
  return (
    <HatchExamplesStyle>
      <div>
        <Link to='/brand' onClick={handleClick}>
          Audi
        </Link>
      </div>
    </HatchExamplesStyle>
  )
}

export default HatchExamples
