import { useQuery } from 'react-query'

export function getCountries() {
  return useQuery('countries', async () => {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const data = await res.json()
    const countries = data.slice(0, 8)

    return countries
  })
}