import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export function GoBack() {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <Link
      to="/"
      style={{ boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.293139)' }}
      className="text-sm dark:text-white text-darkest flex items-center justify-center w-28 dark:bg-gray-light h-8 rounded-sm"
    >
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
    </Link>
  )
}