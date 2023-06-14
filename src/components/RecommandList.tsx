/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react'
import { EachRecommand } from './eachRecommand'
import '../assets/styles/recommandList.css'

export default function RecommandList({ title }) {
  const [restaurantList, setRestaurantList] = useState([])
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
        Authorization: ''
      },
      body: JSON.stringify({ query }),
    })
    const data = await res.json()

    setRestaurantList(data.data.restaurant)
  }

  return (
    <div>
      <div>{title}</div>
      <div className="recommand-list-wrapper">
        {restaurantList.map(
          ({ discount, payco, id, address, category, location, name, url }) => {
            return (
              <each-recommand
                image-url="https://github.com/tasty-islands/pangyo/assets/67806982/fe94c433-6e89-4c80-827a-1bb387652ef3"
                title={name}
                category-name={category}
                key={id}
              ></each-recommand>
            )
          },
        )}
      </div>
    </div>
  )
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'each-recommand': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}
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
