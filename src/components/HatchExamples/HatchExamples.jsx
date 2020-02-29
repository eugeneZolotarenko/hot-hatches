import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import history from "../../history"

import firestore from "../../firebase/firebase.utils"

import HatchExamplesStyle from "./HatchExamplesStyle"

const HatchExamples = (props) => {
  const [examples, setExamples] = useState([])
  // function handleClick(e) {
  //   const hatchBrand = e.target.textContent
  //   async function redirectToPage() {
  //     await props.setBrand(hatchBrand)
  //     history.push({ search: hatchBrand, pathname: "/brand" })
  //   }
  //   redirectToPage()
  // }

  const collection = "Examples"

  useEffect(() => {
    async function getExamples(collection) {
      const snapshot = await firestore.collection(collection).get()
      const dataArr = []
      snapshot.docs.forEach((doc) => {
        const data = doc.data()
        dataArr.push(data)
      })
      setExamples(dataArr)
    }
    getExamples(collection)
  }, [])

  console.log(examples)

  return (
    <HatchExamplesStyle>
      <div>
        {examples.map((hatch, i) => {
          return (
            <button
              key={i}
              data-brand={hatch.brand}
              data-model={hatch.model}
              style={{
                backgroundImage: `url('assets/${hatch.brand}/${hatch.model}.jpg')`
              }}>
              <span>
                {hatch.brand} {hatch.model}
              </span>
            </button>
          )
        })}
      </div>
    </HatchExamplesStyle>
  )
}

export default HatchExamples
