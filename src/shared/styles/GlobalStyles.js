import React from 'react'
import {Global, css} from '@emotion/core'
import {dark, gray} from './variables'

const ralewayFont = css`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');
`

const fontFamily = "'Raleway', sans-serif"

function GlobalStyles() {
  return (
    <Global
      styles={[
        ralewayFont,
        {
          '*': {
            fontFamily,
            color: dark,
            boxSizing: 'border-box',
          },
          body: {
            background: gray,
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
