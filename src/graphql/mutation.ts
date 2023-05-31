import { gql } from '@apollo/client/core'

export const INSERT_REPORT = gql`
  mutation InsertReport(
    $restaurant_id: Int
    $comment: String
    $type: String
    $user: String
  ) {
    insert_report(
      objects: {
        restaurant_id: $restaurant_id
        comment: $comment
        type: $type
        user: $user
      }
    ) {
      affected_rows
      returning {
        id
        restaurant_id
        comment
        type
        user
        created_at
      }
    }
  }
`
