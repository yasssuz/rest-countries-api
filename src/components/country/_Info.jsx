export function Info(props) {
  const { info, infoRes } = props

  return (
    <span className="block text-darkest dark:text-white text-base mb-2.5">
      <strong className="font-semibold">{info}: </strong>
      {infoRes}
    </span>
  )
}