import { useEffect, useState } from "react"
import { LinkBtn } from "./_LinkBtn"

export function Borders(props) {
  const { borders } = props
  const [haveBorders, setHaveBorders] = useState(false)

  useEffect(
    () => borders[0] !== undefined && setHaveBorders(true)
    , [borders]
  )

  return (
    <>
      {haveBorders && (
        <div className="mt-8">
          <h2 className="mb-4 text-darkest dark:text-white text-lg font-semibold">Border Countries:</h2>
          <ul className="grid grid-cols-3 gap-3">
            {borders.map(code => (
              <li key={code}>
                <LinkBtn link="/">
                  {code}
                </LinkBtn>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}