import React from 'react'
import ReactSelect from 'react-select'
import * as R from 'ramda'
import EssentialFieldWrappers from './EssentialFieldWrappers'
import styled from '@emotion/styled'
import {gray} from '../styles/variables'
import {getBasicFieldProps} from '../../utils/helpers'

export const ReactSelectStyles = styled(ReactSelect)(
  {
    '& .select__control': {border: `1px solid ${gray}`},
    '& .select__placeholder': {color: '#ccc'},
  },
  ({error}) => error && {'& .select__control': {borderColor: 'red'}},
)

function Select({validate, options, ...restProps}) {
  const {name, label, ...restUnModifiedProps} = getBasicFieldProps(restProps)
  return (
    <EssentialFieldWrappers name={name} validate={validate} label={label}>
      {({field, form: {setFieldValue, setFieldTouched}}) => (
        <ReactSelectStyles
          {...field}
          onChange={({value}) => setFieldValue(field.name, value)}
          onBlur={() => setFieldTouched(field.name, true)}
          value={
            options.find(({value}) => R.equals(value, field.value)) || null
          }
          options={options}
          classNamePrefix="select"
          {...restUnModifiedProps}
        />
      )}
    </EssentialFieldWrappers>
  )
}

export default Select
