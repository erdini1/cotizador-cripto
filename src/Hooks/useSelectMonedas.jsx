import styled from '@emotion/styled'
import React from 'react'

const Label = styled.label`
  color: #fff
`
//Estos Hooks personalizados nos permiten reutilizarlos
const useSelectMonedas = (label) => {

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
    </> 
  )

  return [SelectMonedas]

}

export default useSelectMonedas 