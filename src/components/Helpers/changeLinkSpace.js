function changeLinkSpace(str) {
  return str.split(/[ ,]+/).join("~")
}

export default changeLinkSpace
