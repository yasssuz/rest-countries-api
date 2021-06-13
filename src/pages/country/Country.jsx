import { LinkBtn } from "../../components/country/_LinkBtn"
import { CountryData } from "../../components/country/_CountryData"
import { GetCountry } from "../../services/getCountry"
import { Borders } from "../../components/country/_Borders"
import { ThemeContext } from "../../contexts/ThemeContext"
import { CountrySkeleton } from "../../components/skeletons/_CountrySkeleton"
import { useContext } from 'react'

export default function Country({ match }) {
  const { lightTheme } = useContext(ThemeContext)
  const countryName = match.params.id
  const { isLoading, data, isError, isFetching } = GetCountry(countryName)

  if (isLoading) {
    return <CountrySkeleton />
  }

  if (isError) {
    return <CountrySkeleton />
  }

  if (isFetching) {
    return <CountrySkeleton />
  }

  return (
    <div className="py-10 px-7 md:py-14 md:px-12 lg:p-20">
      <div className="w-28">
        <LinkBtn link="/">
          {lightTheme ? (
            <img
              src="/assets/black-arrow-left.svg"
              alt="go back"
              className="mr-2"
            />
          ) : (
            <img
              src="/assets/white-arrow-left.svg"
              alt="go back"
              className="mr-2"
            />
          )}
          Back
        </LinkBtn>
      </div>
      <CountryData country={data[0]} />
      <Borders borders={data[0].borders} />
    </div>
  )
}