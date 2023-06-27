/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react'
import { EachRecommand } from './eachRecommand'
import RecommandList from './RecommandList'
import { NK, watchLocation } from '@/utils/geo'
import { useStore } from '@nanostores/react'
import { restaurants } from '@/stores/restaurantStore'

const RecommandListWrapper = () => {
  const restaurantList = useStore(restaurants)
  const [listFromGeo, setListFromGeo] = useState([])
  const [randomList, setRandomList] = useState([])
  const [currentLocation, setCurrentLocation] = useState([
    NK.latitude,
    NK.longitude,
  ])

  useEffect(() => {
    watchLocation(coord => {
      const latitude = coord.latitude
      const longitude = coord.longitude
      setCurrentLocation([latitude, longitude])
    })
  }, [])

  useEffect(() => {
    customElements.define('each-recommand', EachRecommand)
    // getGraphqlData()
  }, [])

  useEffect(() => {
    setListFromGeo(getListFromGeo(restaurantList, 5))
    setRandomList(getListRandom(restaurantList, 5))
  }, [restaurantList.length])

  const calculateDistance = (x1, y1, x2, y2) => {
    const distance = Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2)
    return distance
  }
  const getListFromGeo = (originList, pickCount) => {
    const distanceList = originList.map(val => {
      const [restaurantX, restaurantY] = val.location.split(',')
      return {
        ...val,
        distance: calculateDistance(
          restaurantX,
          restaurantY,
          currentLocation[0],
          currentLocation[1],
        ),
      }
    })
    distanceList.sort((a, b) => {
      return a.distance > b.distance ? 1 : -1
    })

    return distanceList.slice(0, pickCount)
  }
  const getListRandom = (originList, pickCount) => {
    const originLen = originList.length
    const randomList = []
    for (let i = 0; i < pickCount; i++) {
      randomList.push((Math.random() * originLen).toFixed(0))
    }
    const result = randomList.map(i => originList[i])
    return result[0] ? result : []
  }

  return (
    <div className="total-recommand-wrapper">
      <div>{`현재 위치: ${currentLocation[0]},${currentLocation[1]}`}</div>
      <RecommandList title="내 주변 식당 추천" restaurantList={listFromGeo} />
      <RecommandList
        title="오늘의 식당 랜덤 추천"
        restaurantList={randomList}
      />
    </div>
  )
}
export default RecommandListWrapper

const query = `
   {
    restaurant {
      discount
      payco
      id
      address
      category
      location
      name
      url
    }
  }
`
