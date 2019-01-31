/** @jsx jsx */
import {jsx} from '@emotion/core'
import {ErrorMessage} from 'formik'

function ErrorHint(props) {
  return (
    <ErrorMessage {...props}>
      {msg => <span css={{color: 'red'}}>{msg}</span>}
    </ErrorMessage>
  )
}

export default ErrorHint
