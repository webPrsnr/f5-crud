import toastStorage from '../utils/localstorage'
import { getConfigureRules, getSerializedData } from '../utils/validation'
import route from '../utils/route'

$(() => {
  $('#todos').validate({
    ...getConfigureRules(),
    submitHandler(form) {
      const formData = $(form).serializeArray()
      const data = getSerializedData(formData)
      $.ajax({
        method: 'POST',
        url: `${import.meta.env.VITE_API_URL}/create`,
        data,
        success() {
          route.to(config.api.list)
          toastStorage.setToastInfo({
            title: 'Заметка успешно создана',
            status: 'success',
          })
        },
      })
    },
  })
})
