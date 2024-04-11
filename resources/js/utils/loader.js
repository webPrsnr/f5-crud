const api = {
  elements: [$('#loaderBackground'), $('#loaderSpinner')],
  startLoader() {
    this.elements.forEach(element => element.show())
  },
  stopLoader() {
    this.elements.forEach(element => element.hide())
  },
}

export default api
