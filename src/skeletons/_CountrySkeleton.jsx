import { useContext } from "react";
import { LinkBtn } from "../components/country/_LinkBtn";
import { ThemeContext } from "../contexts/ThemeContext";
import styled, { keyframes } from 'styled-components'

export function CountrySkeleton() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className="py-10 px-7 md:py-14 md:px-12 lg:p-20">
      <LinkBtn link="/">
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
        </LinkBtn>
      <div className="mt-16">
        <Flag className="h-64 bg-skeleton-transparentLight dark:bg-skeleton-transparentDark rounded-md mb-11 mx-auto" />
        <Retangle className="mb-4 w-60 h-8 bg-skeleton-transparentLight dark:bg-skeleton-transparentDark rounded-sm" />
        <Retangle className="mb-4 w-40 h-8 bg-skeleton-transparentLight dark:bg-skeleton-transparentDark rounded-sm" />
        <Retangle className="mb-4 w-48 h-8 bg-skeleton-transparentLight dark:bg-skeleton-transparentDark rounded-sm" />
        <Retangle className="mb-4 w-44 h-8 bg-skeleton-transparentLight dark:bg-skeleton-transparentDark rounded-sm" />
        <Retangle className="mb-4 w-36 h-8 bg-skeleton-transparentLight dark:bg-skeleton-transparentDark rounded-sm" />
      </div>
    </div>
  )
}

const Loading = keyframes`
  from { opacity: 0.2 }

  to { opacity: 0.8 }
`

const Flag = styled.div`
  animation: ${Loading} 1.5s infinite;
`

const Retangle = styled.div`
  animation: ${Loading} 1.5s infinite;
`