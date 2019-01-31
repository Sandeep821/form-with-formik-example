/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from '@emotion/core'
import {last, lastIndex} from '../../utils/helpers'

function StarString({children}) {
  return last(children) === '*' ? (
    <>
      {children.slice(0, lastIndex(children))}
      <span css={{color: 'red'}}>*</span>
    </>
  ) : (
    children
  )
}

export default StarString
