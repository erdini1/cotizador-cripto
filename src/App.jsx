import { useState } from 'react'
import styled from '@emotion/styled'

//Creo el primer Styled Component
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading>Desde App</Heading>
    </>
  )
}

export default App
