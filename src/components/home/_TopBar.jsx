import styled from 'styled-components'

export function TopBar() {
  return (
    <div className="md:flex md:justify-between">
      <InputBlock className="w-full h-12 mb-14">
        <input
          type="text"
          placeholder="Search for a country..."
          className="dark:bg-gray-light h-full md:w-96 w-full pl-20 rounded-md text-base text-darkest dark:text-white"
        />
      </InputBlock>
      <Select
        defaultValue="Filter by Region"
        className="h-12 md:w-72 w-52 cursor-pointer text-darkest dark:text-white dark:bg-gray-light rounded-md text-base px-6"
      >
        <option className="text-sm" value="africa">Africa</option>
        <option className="text-sm" value="america">America</option>
        <option className="text-sm" value="asia">Asia</option>
        <option className="text-sm" value="europe">Europe</option>
        <option className="text-sm" value="oceania">Oceania</option>
      </Select>
    </div>
  )
}

const InputBlock = styled.div`
  position: relative;

  &::before {
    content: url('/assets/explore.svg');
    position: absolute;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 32px;
  }
`

const Select = styled.select`
  position: relative;
`