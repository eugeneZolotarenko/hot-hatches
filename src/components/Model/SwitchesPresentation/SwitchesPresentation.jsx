import React from "react"
import SwitchesPresentationStyle from "./SwitchesPresentationStyle"

const SwitchesPresentation = (props) => {
  function switchesToFalse() {
    props.setView360Switch(false)
    props.setGallerySwitch(false)
    props.setInteriorSwitch(false)
  }
  function setView360Active() {
    switchesToFalse()
    props.setView360Switch(true)
  }
  function setGalleryActive() {
    switchesToFalse()
    props.setGallerySwitch(true)
  }
  function setInteriorActive() {
    switchesToFalse()
    props.setInteriorSwitch(true)
  }
  if (
    props.modelData &&
    props.modelData.qImages &&
    props.modelData.qImages[0] > 0
  ) {
    return (
      <SwitchesPresentationStyle>
        <button
          onClick={setView360Active}
          className={props.view360Switch ? "switch active" : "switch"}>
          Overview
        </button>
        <button
          onClick={setGalleryActive}
          className={
            props.gallerySwitch || props.view360Switch === undefined
              ? "switch active"
              : "switch"
          }>
          Gallery
        </button>
        <button
          onClick={setInteriorActive}
          className={props.interiorSwitch ? "switch active" : "switch"}>
          Interior
        </button>
      </SwitchesPresentationStyle>
    )
  } else if (
    props.modelData &&
    props.modelData.qImages &&
    props.modelData.qImages[0] === 0
  ) {
    return (
      <SwitchesPresentationStyle>
        <button
          onClick={setGalleryActive}
          className={
            props.gallerySwitch || props.view360Switch === undefined
              ? "switch active"
              : "switch"
          }>
          Gallery
        </button>
        <button
          onClick={setInteriorActive}
          className={props.interiorSwitch ? "switch active" : "switch"}>
          Interior
        </button>
      </SwitchesPresentationStyle>
    )
  } else {
    return <p>Loading</p>
  }
}
export default SwitchesPresentation
