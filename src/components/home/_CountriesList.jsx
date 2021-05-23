// import { useEffect } from "react"
import { useQuery } from 'react-query'

export function CountriesList() {
  const { isLoading, isError, data, isFetching } = getCountries()

  if (isLoading) {
    return <span>IS LOADING...</span>
  }

  if (isError) {
    return <span>Error</span>
  }

  console.log(data)

  return (
    <section>
      <ul></ul>
    </section>
  )
}

function getCountries() {
  return useQuery('countries', async () => {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const data = await res.json()
    const countries = data.slice(0, 8)

    return countries
  })
}