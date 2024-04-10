import './bootstrap'

import jQuery from 'jquery'

window.$ = jQuery

$(document).on('click', 'button', function () {
  const url = this.dataset.route
  if (url)
    window.location = url
})
