import React from 'react'
import '../assets/styles/recommandList.css'

export default function RecommandList({ title, restaurantList }) {
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
