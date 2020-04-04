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
  return (
    <SwitchesPresentationStyle>
      <button onClick={setView360Active} className='switch'>
        360
      </button>
      <button onClick={setGalleryActive} className='switch'>
        Gallery
      </button>
      <button onClick={setInteriorActive} className='switch'>
        Interior
      </button>
    </SwitchesPresentationStyle>
  )
}
export default SwitchesPresentation
