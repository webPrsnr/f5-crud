import { getConfigureRules, getSerializedData } from '../utils/validation'
import toastStorage from '../utils/localstorage'
import loader from '../utils/loader'
import route from '../utils/route'

$(() => {
  $.ajax({
    method: 'GET',
    url: `${import.meta.env.VITE_API_URL}/${config.id}`,
    beforeSend: () => {
      loader.startLoader()
    },
  }).done((msg) => {
    insertDefaultValues(msg)
    loader.stopLoader()
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
          route.to(config.api.list)
          toastStorage.setToastInfo({
            title: 'Заметка успешно изменена',
            status: 'success',
          })
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
      route.to(config.api.list)
      toastStorage.setToastInfo({
        title: 'Заметка успешно удалена',
        status: 'success',
      })
    },
  })
})

function insertDefaultValues(msg) {
  const { message, description } = msg
  $('#message').val(message)
  $('#description').val(description)
}
