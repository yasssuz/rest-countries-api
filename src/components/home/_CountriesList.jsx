import { useQuery } from 'react-query'
import styled from 'styled-components'
import { CountriesEskeleton } from './_CountriesEskeleton'

export function CountriesList() {
  const { isLoading, isError, data } = getCountries()

  if (isLoading) {
    return <CountriesEskeleton />
  }

  if (isError) {
    return <span>Error</span>
  }

  console.log(data)

  return (
    <section>
      <ul className="grid gap-y-10 mt-8">
        {data.map(country => (
          <Item key={country.name} className="rounded-md w-full overflow-hidden bg-white dark:bg-gray-light mx-auto">
            <img src={country.flag} alt={country.name} />
            <div className="p-6 dark:text-white text-darkest">
              <h2 className="dark:text-white text-lg font-extrabold mb-2">{country.name}</h2>
              <span className="block mb-1 text-base">
                <strong className="font-semibold">Population: </strong>
                {country.population}
              </span>
              <span className="block mb-1 text-base">
                <strong className="font-semibold">Region: </strong>
                {country.region}
              </span>
              <span className="block mb-1 text-base">
                <strong className="font-semibold">Capital: </strong>
                {country.capital}
              </span>
            </div>
          </Item>
        ))}
      </ul>
    </section>
  )
}

const Item = styled.li`
  max-width: 290px;
`

function getCountries() {
  return useQuery('countries', async () => {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const data = await res.json()
    const countries = data.slice(0, 8)

    return countries
  })
}