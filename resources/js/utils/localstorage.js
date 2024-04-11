const api = {
  name: 'toast',
  setToastInfo(config) {
    window.localStorage.setItem(this.name, JSON.stringify(config))
  },
  getToastInfo() {
    const config = JSON.parse(window.localStorage.getItem(this.name))
    return config
  },
  removeToastInfo() {
    window.localStorage.removeItem(this.name)
  },
}

export default api
