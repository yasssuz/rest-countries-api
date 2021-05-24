import { GetCountry } from "../../services/getCountry"
import { GoBack } from "../../components/country/_GoBack"
import { CountryData } from "../../components/country/_CountryData"

export default function Country({ match }) {
  const countryName = match.params.id
  const { isLoading, data, isError } = GetCountry(countryName)

  if (isLoading) {
    return <h1>loading...</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  console.log(data)

  return (
    <div className="py-10 px-7">
      <GoBack />
      <CountryData />
    </div>
  )
}