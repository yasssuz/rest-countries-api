export default function CountryData({ match }) {
  console.log(match)
  const country = match.params.id
  console.log(country)

  return (
    <h1>{country}</h1>
  )
}