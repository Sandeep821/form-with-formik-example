import Color from 'color'

const darken = (color, r = 0.1) =>
  Color(color)
    .darken(r)
    .toString()

const lighten = (color, r = 0.1) =>
  Color(color)
    .lighten(r)
    .toString()

export const gray = '#C1D9CD'
export const dark = '#2E4347'
export const primary = '#536C8D'
export const darkPrimary = darken(primary)
export const lightPrimary = lighten(primary, 0.2)
