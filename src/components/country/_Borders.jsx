import { useEffect, useState } from "react"

export function Borders(props) {
  const { borders } = props
  const [haveBorders, setHaveBorders] = useState(false)
  let bordersArr = []

  borders.map(border => {
    bordersArr.push(border.padEnd(5, ' '))
    return
  })

  useEffect(
    () => bordersArr[0] !== undefined && setHaveBorders(true)
    , [bordersArr]
  )

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-darkest dark:text-white text-lg font-semibold">Border Countries:</h2>
      <div className="grid grid-cols-3 gap-3">
        {haveBorders ? (
          <>
            {bordersArr.map(country => (
              <span key={country}
                style={{ boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.293139)' }}
                className="text-sm dark:text-white text-darkest flex items-center justify-center w-full dark:bg-gray-light h-8 rounded-sm"
              >
                {country}
              </span>
            ))}
          </>
        ) : (
          'hello'
        )}
      </div>
    </div>
  )
}