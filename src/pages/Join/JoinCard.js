/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'

import {fullWidth, alignCenter} from '../../shared/styles/helpers'
import JoinForm from './JoinForm'
import useGeolocation from '../../shared/hooks/useGeolocation'

const Card = styled.div(fullWidth, {
  padding: 24,
  background: 'white',
  borderRadius: 4,
})

function JoinCard() {
  const {lat, lng, address, completed} = useGeolocation()
  return (
    <Card>
      <h3 css={[alignCenter, {marginBottom: 8}]}>Join us</h3>
      {completed ? (
        <JoinForm lat={lat} lng={lng} address={address} />
      ) : (
        'loading...'
      )}
    </Card>
  )
}

export default JoinCard
