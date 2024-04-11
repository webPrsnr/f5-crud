import { getConfigureRules, getSerializedData } from '../utils/validation'

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
          window.location = config.api.list
        },
      })
    },
  })
})
