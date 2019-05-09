// @flow

type FieldConfig = {
  require?: boolean,
  email?: boolean,
  equalOther?: string,
  length?: { min?: number, max?: number }
}

export type ValidateConfig = {
  [field: string]: FieldConfig
}

const validate = (object: any, config: ValidateConfig) => {
  if (object == null) return null

  const errors = {}

  const fields = Object.keys(config)
  const configsForFields: FieldConfig[] = Object.values(config)

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]
    const configForField = configsForFields[i]
    const fieldValue = object[field]

    if (configForField.require && (fieldValue == null || fieldValue.trim().length === 0)) {
      errors[field] = 'require'

      continue
    }

    if (
      configForField.email
      && fieldValue != null
      && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        fieldValue
      )
    ) {
      errors[field] = 'email'

      continue
    }

    if (configForField.equalOther != null && object[configForField.equalOther] !== fieldValue) {
      errors[field] = 'equalOther'

      continue
    }

    if (configForField.length != null && fieldValue != null && typeof fieldValue === 'string') {
      if (configForField.length.min != null && configForField.length.min > fieldValue.length) {
        errors[field] = 'length'

        continue
      }

      if (configForField.length.max != null && configForField.length.max < fieldValue.length) {
        errors[field] = 'length'

        continue
      }
    }
  }

  return errors
}

export default validate
