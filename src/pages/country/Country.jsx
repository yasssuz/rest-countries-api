import { LinkBtn } from "../../components/country/_LinkBtn"
import { CountryData } from "../../components/country/_CountryData"
import { GetCountry } from "../../services/getCountry"
import { Borders } from "../../components/country/_Borders"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export default function Country({ match }) {
  const { darkTheme } = useContext(ThemeContext)
  const countryName = match.params.id
  const { isLoading, data, isError, isFetching } = GetCountry(countryName)

  if (isLoading) {
    return <h1>loading...</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  if (isFetching) {
    return <h1>Fetching</h1>
  }

  return (
    <div className="py-10 px-7 md:py-14 md:px-12 lg:p-20">
      <div className="w-28">
        <LinkBtn link="/">
          {darkTheme ? (
            <img
              src="/assets/white-arrow-left.svg"
              alt="go back"
              className="mr-2"
            />
          ) : (
            <img
              src="/assets/black-arrow-left.svg"
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