import { gql } from '@apollo/client/core'

export const GET_REPORT = gql`
  query GetReport($id: Int) {
    report(where: { restaurant_id: { _eq: $id } }) {
      comment
      type
      user
      created_at
      id
      restaurant_id
    }
  }
`

export const GET_RESTAURANT = gql`
  query GetRestaurant {
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
