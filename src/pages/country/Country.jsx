import { GoBack } from "../../components/country/_GoBack"
import { CountryData } from "../../components/country/_CountryData"
import { GetCountry } from "../../services/getCountry"

export default function Country({ match }) {
  const countryName = match.params.id
  const { isLoading, data, isError } = GetCountry(countryName)

  if (isLoading) {
    return <h1>loading...</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <div className="py-10 px-7">
      <GoBack />
      <CountryData country={data[0]} />
    </div>
  )
}