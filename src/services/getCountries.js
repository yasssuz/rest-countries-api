import { useQuery } from 'react-query'

export function GetCountries() {
  return useQuery('countries', async () => {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const data = await res.json()

    return data
  })
}