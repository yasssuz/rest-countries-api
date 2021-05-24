import { GetCountry } from "../../services/getCountry"
import { GoBack } from "../../components/country/_GoBack"

export default function CountryData({ match }) {
  const countryName = match.params.id
  const { isLoading, data, isError } = GetCountry(countryName)

  if (isLoading) {
    return <h1>loading...</h1>
  }

  console.log(data)

  return (
    <div className="py-10 px-7">
      <GoBack />
    </div>
  )
}