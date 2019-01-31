import React from 'react'
import {FastField} from 'formik'
import StarString from './StarString'
import ErrorHint from './ErrorHint'

function EssentialFieldWrappers({
  name,
  validate = () => Promise.resolve(false),
  label,
  children,
}) {
  return (
    <FastField name={name} validate={validate}>
      {({field, form}) => {
        const isError = form.touched[name] && form.errors[name]
        return (
          <label htmlFor={name}>
            {label && <StarString>{label}</StarString>}
            {children({field: {...field, error: isError, id: name}, form})}
            <ErrorHint name={name} />
          </label>
        )
      }}
    </FastField>
  )
}

export default EssentialFieldWrappers
