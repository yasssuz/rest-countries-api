import { GoBack } from "../../components/country/_GoBack"
import { CountryData } from "../../components/country/_CountryData"
import { GetCountry } from "../../services/getCountry"
import { Borders } from "../../components/country/_Borders"

export default function Country({ match }) {
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
    <div className="py-10 px-7">
      <GoBack />
      <CountryData country={data[0]} />
      <Borders borders={data[0].borders} />
    </div>
  )
}