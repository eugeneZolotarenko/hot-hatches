import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import history from "../../history"

import firestore from "../../firebase/firebase.utils"

import HatchExamplesStyle from "./HatchExamplesStyle"

const HatchExamples = (props) => {
  const [examples, setExamples] = useState([])
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

  function handleClick(e) {
    const hatchBrand = e.target.dataset.brand
    console.log(hatchBrand)
    props.setBrand(hatchBrand)
    // history.push({ search: hatchBrand, pathname: "/brand" })
  }

  return (
    <HatchExamplesStyle>
      <div>
        {examples.map(({ brand, model }, i) => {
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
              <span data-brand={brand} data-model={model}>
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
