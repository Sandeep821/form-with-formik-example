import {useState, useEffect} from 'react'
import {getAddress} from '../../utils/geocoder'

function useGeolocation() {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [address, setAddress] = useState('')
  const [completed, setCompleted] = useState(false)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({coords: {latitude: lat, longitude: lng}}) => {
          setLat(lat)
          setLng(lng)
          getAddress({lat, lng}).then(address => {
            setAddress(address)
            setCompleted(true)
          })
        },
        () => setCompleted(true),
      )
    } else {
      setCompleted(true)
    }
  }, [])
  return {
    lat,
    lng,
    address,
    completed,
  }
}

export default useGeolocation
