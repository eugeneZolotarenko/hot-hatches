function cutURL() {
  const searchPartUrl = window.location.search.substring(1)
  return searchPartUrl.split("/")
}

export default cutURL
