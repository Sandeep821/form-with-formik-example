import {css} from '@emotion/core'

export const fullWidth = css({width: '100%'})
export const fullHeight = css({height: '100%'})
export const fullSize = css([fullWidth, fullHeight])

export const fullWidthViewPort = css({width: '100vw'})
export const fullHeightViewPort = css({height: '100vh'})
export const fillViewPort = css([fullWidthViewPort, fullHeightViewPort])

export const alignCenter = css({textAlign: 'center'})

export const centerContent = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
