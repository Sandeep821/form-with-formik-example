import styled from '@emotion/styled'
import {primary, darkPrimary, lightPrimary} from '../styles/variables'

export const Button = styled.button(
  {
    cursor: 'pointer',
    color: 'white',
    border: `1px solid ${primary}`,
    padding: 12,
    borderRadius: 4,
    background: primary,
    ':hover': {
      background: darkPrimary,
      borderColor: darkPrimary,
    },
    ':disabled': {
      backgroundColor: lightPrimary,
      borderColor: lightPrimary,
    },
  },
  ({outline}) =>
    outline && {
      background: 'white',
      color: primary,
      ':hover': {background: 'white'},
    },
)
