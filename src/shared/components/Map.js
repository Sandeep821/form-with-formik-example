/** @jsx jsx */
import {jsx} from '@emotion/core'
import {GoogleMap, Marker, withGoogleMap} from 'react-google-maps'

const MyMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={8} {...props}>
    <Marker position={props.center} />
  </GoogleMap>
))

const Map = props => (
  <MyMap
    {...props}
    loadingElement={<div style={{height: `100%`}} />}
    containerElement={<div style={{height: `400px`}} />}
    mapElement={<div style={{height: `100%`}} />}
  />
)

export default Map
