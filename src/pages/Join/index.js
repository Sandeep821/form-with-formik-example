/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'

import {alignCenter} from '../../shared/styles/helpers'
import JoinCard from './JoinCard'
import Link from '../../shared/components/Link'

const Container = styled.div({
  maxWidth: 600,
  margin: '0 auto',
  padding: '24px 12px',
})

function Join() {
  return (
    <Container>
      <p css={[alignCenter, {marginBottom: 8}]}>
        <Link to="/">go back to home</Link>
      </p>
      <JoinCard />
    </Container>
  )
}

export default Join
