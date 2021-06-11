import styled, { keyframes } from 'styled-components'

export function CountriesSkeleton() {
  function loopCountries() {
    const items = []

    for (let i = 0; i < 50; i++) {
      items.push(<Item key={Math.random()}
        className="rounded-md w-full overflow-hidden bg-skeleton-transparentLight 
          dark:bg-skeleton-transparentDark mx-auto h-96"
      >
        <div className="h-44 dark:bg-gray-light" />
        <div className="w-48 h-7 ml-6 mt-10 rounded-md dark:bg-gray-light lg:mt-5" />
        <div className="w-40 h-5 ml-6 mt-5 rounded-md dark:bg-gray-light lg:mt-4" />
        <div className="w-44 h-5 ml-6 mt-3 rounded-md dark:bg-gray-light" />
        <div className="w-32 h-5 ml-6 mt-3 rounded-md dark:bg-gray-light" />
      </Item>
      )
    }

    return items
  }

  return (
    <List className="grid gap-y-10 md:gap-x-10 mt-8 lg:flex lg:justify-center lg:align-center lg:flex-wrap lg:gap-x-0">
      {loopCountries()}
    </List>
  )
}

const Loading = keyframes`
  from { opacity: 0.4 }

  to { opacity: 0.8 }
`

const Item = styled.li`
  max-width: 400px;
  transition: transform 0.2s ease, border 0.2s ease;
  animation: ${Loading} 1.5s infinite;

  &:hover {
    transform: scale(1.05);
    border: #ffce00 1px dashed;
  }

  @media screen and (min-width: 768px) {
    max-width: none;
  }

  @media screen and (min-width: 1024px) {
    width: 260px;
    height: 340px;
  }
`

const List = styled.ul`
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`