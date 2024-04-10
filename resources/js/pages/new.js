$('#newNote').on('click', () => {
  const message = $('#newTitle').val()
  const description = $('#newDescription').val()
  $.ajax({
    method: 'POST',
    url: `${import.meta.env.VITE_API_URL}/create`,
    data: { message, description },
    success() {
      window.location = config.api.list
    },
  })
})
