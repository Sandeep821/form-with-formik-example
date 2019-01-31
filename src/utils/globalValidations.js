import * as yup from 'yup'

export const password = yup
  .string()
  .min(8)
  .max(15)
  .required('Password is required')

export const confirmPassword = yup
  .string()
  .oneOf([yup.ref('password'), null], "Passwords don't match")
  .required('Password confirm is required')
