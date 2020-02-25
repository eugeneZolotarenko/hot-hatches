import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import firestore from "./firebase/firebase.utils"

import Main from "./pages/Main"
import Brand from "./pages/Brand"

const Router = () => {
  const [data, setData] = useState([])
  const [modelData, setModelData] = useState()

  const [model, setModel] = useState("")
  const [brand, setBrand] = useState("")

  useEffect(() => {
    if (brand !== "") {
      async function listModels(brand) {
        const snapshot = await firestore.collection(brand).get()
        const dataArr = []
        snapshot.docs.forEach((doc) => {
          const data = doc.data()
          dataArr.push(data)
        })
        setData(dataArr)
      }
      listModels(brand)
    }
  }, [brand])

  function hasValue(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key] === value
  }

  useEffect(() => {
    if (data.length > 0 && model !== "") {
      function getHatchData(value, key = "name") {
        data.filter((obj) => {
          if (hasValue(obj, key, value)) {
            setModelData(obj)
          } else {
            return null
          }
        })
      }
      getHatchData(model)
    }
  }, [data, model])

  useEffect(() => {
    if (brand !== "" && data.length !== 0) {
      console.log(data)
    }
  }, [data, brand])

  useEffect(() => {
    if (modelData !== undefined) {
      console.log(modelData)
    }
  }, [modelData])

  // if (data.length > 0) {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={(props) => (
          <Main
            {...props}
            setBrand={setBrand}
            setModel={setModel}
            model={model}
          />
        )}
      />
      <Route exact path='/brand' component={Brand} />
    </Switch>
  )
}
//   else {
//    return (
//       <p>Loading...</p>
//    )
//   }
// }

export default Router
