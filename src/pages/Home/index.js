/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'

import {
  centerContent,
  fillViewPort,
  alignCenter,
} from '../../shared/styles/helpers'
import Link from '../../shared/components/Link'

const HomeContainer = styled.div(centerContent, fillViewPort)

function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Home</h1>
        <p css={alignCenter}>
          <Link to="/join">join us</Link>
        </p>
      </div>
    </HomeContainer>
  )
}

export default Home
