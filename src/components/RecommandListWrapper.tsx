/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react'
import { EachRecommand } from './eachRecommand'
import RecommandList from './RecommandList'

const RecommandListWrapper = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [listFromGeo, setListFromGeo] = useState([])
  const [randomList, setRandomList] = useState([])
  const endPoint = 'https://tasty.hasura.app/v1/graphql'

  useEffect(() => {
    customElements.define('each-recommand', EachRecommand)
    getGraphqlData()
  }, [])

  const getGraphqlData = async () => {
    const res = await fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: '',
      },
      body: JSON.stringify({ query }),
    })
    const data = await res.json()

    setRestaurantList(data.data.restaurant)
  }

  const getListFromGeo = () => {}
  const getListRandom = () => {}

  return (
    <div className="total-recommand-wrapper">
      <RecommandList
        title="내 주변 식당 추천"
        restaurantList={restaurantList}
      />
      <RecommandList
        title="오늘의 식당 랜덤 추천"
        restaurantList={restaurantList}
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
