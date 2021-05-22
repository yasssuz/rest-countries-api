import styled from 'styled-components'

export function Header() {
  function toggleMode() {
    document.querySelector('html').classList.toggle('dark')
  }

  return (
    <Container className="px-4 md:px-8 lg:px-20 w-full h-20 flex items-center justify-between bg-white dark:bg-gray-light lg:px">
      <h1 className="text-darkest dark:text-white text-base font-extrabold md:text-xl lg:text-2xl">Where in the world?</h1>
      <button
        className="text-darkest flex items-center dark:text-white"
        onClick={toggleMode}
      >
        <img src="/assets/moon.svg" alt="moon" className="mr-3" />
        Dark Mode
      </button>
    </Container>
  )
}

const Container = styled.header`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`