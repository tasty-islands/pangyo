import { Restaurant } from '@/types/restaurant'
import { onMount, atom, task } from 'nanostores'
import { createApolloClient } from '@/graphql/apollo'
import { GET_RESTAURANT } from '@/graphql/queries'

export const isLoading = atom(false)
export const error = atom()
export const restaurants = atom<Restaurant[]>([])
export const searchKeyword = atom('')

onMount(restaurants, () => {
  task(async () => {
    isLoading.set(true)
    try {
      const client = createApolloClient()
      const { data } = await client.query({
        query: GET_RESTAURANT,
      })
      restaurants.set(data.restaurant)
    } catch (e) {
      error.set(e.message)
      console.error(e)
    } finally {
      isLoading.set(false)
    }
  })

  return () => {}
})
