import React from "react"

import HatchCardStyle from "./HatchCardStyle"

const HatchCard = (props) => {
  return (
    <HatchCardStyle>
      {props.brandData.map((hatch) => {
        return <p key={hatch.id}>{hatch.id}</p>
      })}
    </HatchCardStyle>
  )
}

export default HatchCard
