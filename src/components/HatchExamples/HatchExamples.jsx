import React from "react"
import { Link } from "react-router-dom"
import history from "../../history"

import HatchExamplesStyle from "./HatchExamplesStyle"

const HatchExamples = (props) => {
  // function handleClick(e) {
  //   const hatchBrand = e.target.textContent
  //   async function redirectToPage() {
  //     await props.setBrand(hatchBrand)
  //     history.push({ search: hatchBrand, pathname: "/brand" })
  //   }
  //   redirectToPage()
  // }
  return (
    <HatchExamplesStyle>
      {/* <div>
        <button onClick={handleClick}>Audi</button>
      </div> */}
    </HatchExamplesStyle>
  )
}

export default HatchExamples
