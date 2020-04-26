import React from "react"

function View360({ images }) {
  let firstPosition
  let currentImage = 1
  const lengthOfMoving = window.innerWidth * (images.length * 0.00032)

  console.log(lengthOfMoving)
  function reverseCheckLength() {
    if (currentImage <= 1) {
      currentImage = images.length + 1
    }
  }

  function checkLength() {
    if (currentImage >= images.length) {
      currentImage = 0
    }
  }

  function getFirstPosition(event) {
    firstPosition = event.pageX
  }

  function getFirstPositionMobile(event) {
    firstPosition = event.touches[0].clientX
  }

  function classManipulator(allImages) {
    if (allImages) {
      allImages.forEach((image) => {
        if (image.dataset.i == currentImage) {
          image.classList.add("active")
        } else {
          image.classList.remove("active")
        }
      })
    } else {
      console.error("Images are not exist")
    }
  }

  function rotateObject(currentPisition, allImages) {
    if (currentPisition <= firstPosition - lengthOfMoving) {
      checkLength()
      currentImage += 1
      firstPosition = currentPisition
      classManipulator(allImages)
    } else if (currentPisition >= firstPosition + lengthOfMoving) {
      reverseCheckLength()
      currentImage -= 1
      firstPosition = currentPisition
      classManipulator(allImages)
    }
  }

  const activateViewer = (event) => {
    const allImages = document.querySelectorAll(`.image360`)
    if (event.buttons === 1) {
      rotateObject(event.pageX, allImages)
    }
  }

  const activateViewerMobile = (event) => {
    const allImages = document.querySelectorAll(`.image360`)
    rotateObject(event.touches[0].clientX, allImages)
  }

  if (images) {
    return (
      <div className='image360-container'>
        {images.map((image, i) => {
          return (
            <img
              className={`image360 ${i === 1 ? "active" : ""}`}
              data-i={i + 1}
              draggable='false'
              key={i}
              onMouseDown={getFirstPosition}
              onTouchStart={getFirstPositionMobile}
              onMouseMove={activateViewer}
              onTouchMove={activateViewerMobile}
              src={images[i]}
            />
          )
        })}
      </div>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default View360
