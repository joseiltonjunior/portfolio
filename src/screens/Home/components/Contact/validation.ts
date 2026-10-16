import * as yup from 'yup'

export interface ContactFields {
  name: string
  email: string
  message: string
}

export interface ContactValidationMessages {
  required: string
  nameMax: string
  emailInvalid: string
  emailMax: string
  messageMin: string
  messageMax: string
}

export const contactLimits = {
  nameMax: 80,
  emailMax: 254,
  messageMin: 10,
  messageMax: 2000,
} as const

export function createContactSchema(messages: ContactValidationMessages) {
  return yup.object({
    name: yup
      .string()
      .trim()
      .required(messages.required)
      .max(contactLimits.nameMax, messages.nameMax),
    email: yup
      .string()
      .trim()
      .lowercase()
      .required(messages.required)
      .email(messages.emailInvalid)
      .max(contactLimits.emailMax, messages.emailMax),
    message: yup
      .string()
      .trim()
      .required(messages.required)
      .min(contactLimits.messageMin, messages.messageMin)
      .max(contactLimits.messageMax, messages.messageMax),
  })
}
