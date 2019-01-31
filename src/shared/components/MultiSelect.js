import React from 'react'
import * as R from 'ramda'
import EssentialFieldWrappers from './EssentialFieldWrappers'
import {ReactSelectStyles} from './Select'
import {getBasicFieldProps} from '../../utils/helpers'

function MultiSelect({validate, options, ...restProps}) {
  const {name, label, ...restUnModifiedProps} = getBasicFieldProps(restProps)
  return (
    <EssentialFieldWrappers name={name} validate={validate} label={label}>
      {({field, form: {setFieldValue, setFieldTouched}}) => (
        <ReactSelectStyles
          {...field}
          isMulti
          onChange={selected =>
            setFieldValue(field.name, selected.map(R.prop('value')))
          }
          onBlur={() => setFieldTouched(field.name, true)}
          value={options.filter(({value}) =>
            field.value.some(fieldValue => R.equals(value, fieldValue)),
          )}
          options={options}
          classNamePrefix="select"
          {...restUnModifiedProps}
        />
      )}
    </EssentialFieldWrappers>
  )
}

export default MultiSelect
