function resizePresentation(img, scale) {
  const proportionOfImg = img.width / img.height
  const imgWidth = window.innerWidth * scale
  const widthAndHeight = {
    width: imgWidth,
    height: imgWidth / proportionOfImg
  }
  return widthAndHeight
}

export default resizePresentation
