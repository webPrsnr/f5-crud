import './bootstrap'

import jQuery from 'jquery'
import validate from 'jquery-validation'
import showToast from './utils/toast'

window.$ = jQuery
$.validate = validate

$(() => {
  showToast()
})
