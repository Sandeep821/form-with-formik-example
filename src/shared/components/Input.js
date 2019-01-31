/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'
import {gray, dark} from '../styles/variables'
import {fullWidth} from '../styles/helpers'
import EssentialFieldWrappers from './EssentialFieldWrappers'
import {getBasicFieldProps} from '../../utils/helpers'

const InputStyle = styled.input(
  fullWidth,
  {
    outline: 'none',
    border: `1px solid ${gray}`,
    background: 'white',
    color: dark,
    padding: 12,
    borderRadius: 4,
    '::placeholder': {
      color: '#ccc',
    },
  },
  ({error}) => (error ? {borderColor: 'red'} : {':focus': {borderColor: dark}}),
)

function Input({validate, onChange = () => {}, ...restProps}) {
  const {name, label, ...restUnModifiedProps} = getBasicFieldProps(restProps)
  return (
    <EssentialFieldWrappers name={name} label={label} validate={validate}>
      {({field, form: {setFieldValue}}) => (
        <InputStyle
          {...field}
          onChange={e => {
            setFieldValue(field.name, e.target.value)
            onChange(e.target.value)
          }}
          {...restUnModifiedProps}
        />
      )}
    </EssentialFieldWrappers>
  )
}

export {InputStyle}
export default Input
