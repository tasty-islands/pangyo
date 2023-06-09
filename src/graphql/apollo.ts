import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'

const { PUBLIC_TASTYAPI, PUBLIC_TOKEN } = import.meta.env

export function createApolloClient() {
  const link = new HttpLink({
    uri: PUBLIC_TASTYAPI,
    headers: {
      Authorization: `Bearer ${PUBLIC_TOKEN}`,
    },
  })
  const cache = new InMemoryCache()
  const client = new ApolloClient({
    link,
    cache,
  })
  return client
}
