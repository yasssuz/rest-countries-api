import { useQuery } from 'react-query'

export function GetCountry(countryName) {
  return useQuery('country', async () => {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
    const data = await res.json()

    return data
  })
}