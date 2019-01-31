import {callIfFunction} from './helpers'

const geocoder = new window.google.maps.Geocoder()

const locationCaller = ({lat, lng}) => ({
  lat: callIfFunction(lat),
  lng: callIfFunction(lng),
})

/**
 * get address using google geocoder api
 * https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse
 */
function getAddress(location) {
  return new Promise((resolve, reject) => {
    geocoder.geocode(
      {location: locationCaller(location)},
      (results, status) => {
        if (status === 'OK') {
          const address = results[0] && results[0].formatted_address
          resolve(address)
        } else {
          reject(status)
        }
      },
    )
  })
}

/**
 * get address from location using google geocoder api
 * https://developers.google.com/maps/documentation/javascript/geocoding
 */
function getLocation(address, defaultLatLng = {lat: 0, lng: 0}) {
  return new Promise((resolve, reject) => {
    geocoder.geocode({address}, (results, status) => {
      if (status === 'OK') {
        const {location} = (
          results[0] || {geometry: {location: defaultLatLng}}
        ).geometry
        resolve(locationCaller(location))
      } else {
        reject(status)
      }
    })
  })
}

export {getAddress, getLocation, locationCaller}
