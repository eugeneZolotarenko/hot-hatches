import React, { useState, useEffect } from "react"
import { Switch, Router, Route } from "react-router-dom"
import history from "./history"
import NProgress from "nprogress"
import GetFireBaseData from "./components/Helpers/GetFireBaseData"

import "nprogress/nprogress.css"

import Main from "./pages/Main"
import Brand from "./pages/Brand"
import Model from "./pages/Model"

const IndexRouter = () => {
  const [currentPath, setCurrentPath] = useState(history.location.pathname)
  const [data, setData] = useState([])
  const [modelData, setModelData] = useState({})

  const [modelID, setModelID] = useState("")
  const [model, setModel] = useState("")
  const [brand, setBrand] = useState("")
  const [brandCountry, setBrandCountry] = useState("")

  useEffect(() => {
    if (brand !== "") {
      GetFireBaseData(brand, setData)
    }
  }, [brand])

  function hasValue(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key] === value
  }

  useEffect(() => {
    if (data.length > 0 && modelID !== "") {
      function getHatchData(value, key = "id") {
        setModelData({})
        data.filter((obj) => {
          if (hasValue(obj, key, value)) {
            setModelData(obj)
          } else {
            return null
          }
        })
      }
      getHatchData(modelID)
    }
  }, [data, modelID])

  // Loading Bar & handling browser arrow
  useEffect(() => {
    const { pathname } = history.location
    function pushLoadingBar(speed) {
      NProgress.set(0.4)
      setTimeout(() => {
        NProgress.done()
      }, speed)
    }
    window.onpopstate = (e) => {
      setCurrentPath(window.location.pathname)
      pushLoadingBar(100)
    }
    setCurrentPath(pathname)
    pushLoadingBar(150)
  }, [history.location.pathname])
  // Loading Bar & handling browser arrow

  useEffect(() => {
    if (brand !== "" && data.length !== 0) {
      console.log(data)
    }
  }, [data, brand, modelID])

  useEffect(() => {
    if (modelData !== undefined) {
      console.log(modelData)
    }
  }, [modelData])

  // if (data.length > 0) {
  return (
    <Switch>
      <Router history={history}>
        <Route
          exact
          path='/'
          render={(props) => (
            <Main
              {...props}
              setData={setData}
              setBrand={setBrand}
              setModel={setModel}
              setModelID={setModelID}
              setBrandCountry={setBrandCountry}
              model={model}
              brand={brand}
              brandCountry={brandCountry}
            />
          )}
        />
        <Route
          exact
          path='/brand'
          render={(props) => (
            <Brand
              {...props}
              setBrand={setBrand}
              setModel={setModel}
              model={model}
              setModelID={setModelID}
              brand={brand}
              brandData={data}
              brandCountry={brandCountry}
              setBrandCountry={setBrandCountry}
            />
          )}
        />
        <Route
          exact
          path='/brand/model'
          render={(props) => (
            <Model
              {...props}
              setBrand={setBrand}
              setModel={setModel}
              model={model}
              modelData={modelData}
              setModelData={setModelData}
              setModelID={setModelID}
              modelID={modelID}
              brand={brand}
              brandData={data}
              brandCountry={brandCountry}
              setBrandCountry={setBrandCountry}
            />
          )}
        />
      </Router>
    </Switch>
  )
}
//   else {
//    return (
//       <p>Loading...</p>
//    )
//   }
// }

export default IndexRouter
