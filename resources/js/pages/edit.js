$(() => {
  $.ajax({
    method: 'GET',
    url: `${import.meta.env.VITE_API_URL}/${config.id}`,
  }).done((msg) => {
    insertDefaultValues(msg)
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
