/** @jsx jsx */
import {jsx} from '@emotion/core'
import {InputStyle} from './Input'
import EssentialFieldWrappers from './EssentialFieldWrappers'
import {getBasicFieldProps} from '../../utils/helpers'

const TextInputStyle = InputStyle.withComponent('textarea')

function TextInput({validate, ...restProps}) {
  const {name, label, ...restUnModifiedProps} = getBasicFieldProps(restProps)
  return (
    <EssentialFieldWrappers name={name} validate={validate} label={label}>
      {({field}) => <TextInputStyle {...field} {...restUnModifiedProps} />}
    </EssentialFieldWrappers>
  )
}

export default TextInput
