import { Info } from "./_Info"

export function CountryData(props) {
  const { country } = props
  let currencies = []

  country.currencies.map(currency => {
    currencies.push(currency.code.padEnd(5, ' '))
  })

  console.log(country)

  return (
    <div className="mt-16">
      <img src={country.flag} alt={country.name} className="rounded-md mb-11" />
      <h1 className="mb-4 dark:text-white text-darkest font-extrabold text-2xl">{country.name}</h1>

      <Info info={'Native Name'} infoRes={country.nativeName} />
      <Info info={'Population'} infoRes={country.population} />
      <Info info={'Region'} infoRes={country.region} />
      <Info info={'Sub Region'} infoRes={country.subregion} />
      <Info info={'Capital'} infoRes={country.capital} />

      <div className="mt-8">
        <Info info={'Top Level Domain'} infoRes={country.topLevelDomain} />
        <Info info={'Currencies'} infoRes={currencies} />
        <Info info={'Languages'} infoRes={country.capital} />
      </div>
    </div>
  )
}