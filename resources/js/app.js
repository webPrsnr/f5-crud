import './bootstrap'

import jQuery from 'jquery'
import validate from 'jquery-validation'
import showToast from './utils/toast'

window.$ = jQuery
$.validate = validate

$(document).on('click', 'button', function () {
  const url = this.dataset.route
  if (url)
    window.location = url
})

$(() => {
  showToast()
})
