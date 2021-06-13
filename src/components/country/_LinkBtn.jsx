import { Link } from "react-router-dom"

export function LinkBtn(props) {
  const { link, children } = props

  return (
    <Link
      to={link}
      style={{ boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.293139)' }}
      className="w-32 text-sm dark:text-white text-darkest flex items-center justify-center dark:bg-gray-light h-8 rounded-sm"
    >
      {children}
    </Link >
  )
}