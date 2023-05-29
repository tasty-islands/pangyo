export interface Coord {
  latitude: number
  longitude: number
  fallback: boolean
}

export const NK: Coord = {
  latitude: 37.4020016,
  longitude: 127.1035125,
  fallback: true,
}

export function watchLocation(whenUpdated: (coord: Coord) => void) {
  const lastPosition: Coord = NK

  const successCallbackFn: PositionCallback = ({
    coords: { latitude, longitude },
  }) => {
    lastPosition.latitude = latitude
    lastPosition.longitude = longitude
    whenUpdated({ ...lastPosition, fallback: false })
  }

  const failCallbackFn: PositionErrorCallback = geolocationPositionError => {
    console.warn(geolocationPositionError)
    whenUpdated({ ...lastPosition, fallback: true })
  }

  if (!('geolocation' in navigator)) {
    console.warn('navigator.geolocation을 지원하지 않음.')
    whenUpdated({ ...lastPosition, fallback: true })
  }

  // 최초 수신 (대략적)
  navigator.geolocation.watchPosition(successCallbackFn, failCallbackFn, {
    enableHighAccuracy: false,
    maximumAge: 3 * 1000,
  })

  // gps 수신호 update
  navigator.geolocation.watchPosition(successCallbackFn, failCallbackFn, {
    enableHighAccuracy: true,
    maximumAge: 10 * 1000,
  })
}
