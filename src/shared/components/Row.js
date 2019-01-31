import styled from '@emotion/styled'

const Row = styled.div(
  {
    width: '100%',
    display: 'grid',
  },
  ({columnNumber = 1, gap = 12}) => ({
    gridTemplateColumns: `repeat(${columnNumber}, 1fr)`,
    gridGap: gap,
  }),
)

export default Row
