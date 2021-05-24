import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GetCountries } from '../../services/getCountries'

import { CountriesEskeleton } from './_CountriesEskeleton'

export function CountriesList() {
  const { isLoading, isError, data } = GetCountries()

  if (isLoading) {
    return <CountriesEskeleton />
  }

  if (isError) {
    return <span>Error</span>
  }

  return (
    <section>
      <ul className="grid gap-y-10 mt-8">
        {data.map(country => (
          <Item
            key={country.name}
            className="rounded-md w-full overflow-hidden bg-white dark:bg-gray-light mx-auto"
          >
            <Link to={`/country/${country.name}`}>
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
            </Link>
          </Item>
        ))}
      </ul>
    </section>
  )
}

const Item = styled.li`
  max-width: 300px;
  transition: transform 0.2s ease, border 0.2s ease;

  &:hover {
    transform: scale(1.05);
    border: #ffce00 1px dashed;
  }
`