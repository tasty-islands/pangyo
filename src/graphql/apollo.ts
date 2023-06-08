import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'

const { PUBLIC_TASTYAPI } = import.meta.env

export function createApolloClient(authToken) {
  const link = new HttpLink({
    uri: PUBLIC_TASTYAPI,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
  const cache = new InMemoryCache()
  const client = new ApolloClient({
    link,
    cache,
  })
  return client
}
