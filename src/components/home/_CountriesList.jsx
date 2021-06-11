import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GetCountries } from '../../services/getCountries'
import { CountriesSkeleton } from '../skeletons/_CountriesSkeleton'

export function CountriesList() {
  const { isLoading, isError, data, isFetching } = GetCountries()

  if (isLoading) {
    return <CountriesSkeleton />
  }

  if (isFetching) {
    return <CountriesSkeleton />
  }

  if (isError) {
    return <CountriesSkeleton />
  }

  return (
    <section>
      <List className="grid gap-y-10 md:gap-x-10 mt-8 lg:flex lg:justify-center lg:align-center lg:flex-wrap lg:gap-x-4">
        {data.map(country => (
          <Item
            key={country.name}
            className="rounded-md w-full overflow-hidden bg-white dark:bg-gray-light mx-auto"
          >
            <Link to={`/country/${country.name}`}>
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-52 object-cover md:h-56 lg:h-44"
              />
              <div className="p-6 dark:text-white text-darkest flex flex-col justify-center">
                <h2 className="dark:text-white text-lg font-extrabold mb-2">{country.name}</h2>
                <span className="block mb-1 text-base">
                  <strong className="font-semibold">Population: </strong>
                  {country.population.toLocaleString('en')}
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
      </List>
    </section>
  )
}

const Item = styled.li`
  max-width: 400px;
  transition: transform 0.2s ease, border 0.2s ease;

  &:hover {
    transform: scale(1.05);
    border: #ffce00 1px dashed;
  }

  @media screen and (min-width: 768px) {
    max-width: none;
  }

  @media screen and (min-width: 1024px) {
    width: 260px;
    height: 340px;
  }
`

const List = styled.ul`
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`