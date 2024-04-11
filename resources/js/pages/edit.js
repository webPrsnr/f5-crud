import { getConfigureRules, getSerializedData } from '../utils/validation'

$(() => {
  $.ajax({
    method: 'GET',
    url: `${import.meta.env.VITE_API_URL}/${config.id}`,
  }).done((msg) => {
    insertDefaultValues(msg)
  })
})

$(() => {
  $('#todos').validate({
    ...getConfigureRules(),
    submitHandler(form) {
      const formData = $(form).serializeArray()
      const data = getSerializedData(formData)
      $.ajax({
        method: 'PUT',
        url: `${import.meta.env.VITE_API_URL}/${config.id}/edit`,
        data,
        success() {
          window.location = config.api.list
        },
      })
    },
  })
})

$('#editDelete').on('click', () => {
  $.ajax({
    method: 'DELETE',
    url: `${import.meta.env.VITE_API_URL}/${config.id}`,
    success() {
      window.location = config.api.list
    },
  })
})

function insertDefaultValues(msg) {
  const { message, description } = msg
  $('#message').val(message)
  $('#description').val(description)
}
