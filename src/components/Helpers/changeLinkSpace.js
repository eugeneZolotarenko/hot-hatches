function changeLinkSpace(str, chr) {
  return str.split(/[ ,]+/).join(chr)
}

export default changeLinkSpace
