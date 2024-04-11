export function getSerializedData(data) {
  return data.reduce(
    (result, current) => ({
      ...result,
      [current.name]: current.value,
    }),
    {},
  )
}

export function getConfigureRules() {
  return {
    rules: {
      message: {
        required: true,
        minlength: 5,
      },
      description: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      message: {
        required: 'Обязательное поле для заполнения',
        minlength: 'Поле должно содержать минимум 5 символов',
      },
      description: {
        required: 'Обязательное поле для заполнения',
        minlength: 'Поле должно содержать минимум 10 символов',
      },
    },
  }
}
