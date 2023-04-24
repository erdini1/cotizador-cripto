import styled from '@emotion/styled'
import React from 'react'

const Label = styled.label`
  color: #fff;
`
//Estos Hooks personalizados nos permiten reutilizarlos
const useSelectMonedas = (label, opciones) => {

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select name="" id="">
        <option value="">-- Seleccione --</option>

        {opciones.map(opcion => (
          <option
            key={opcion.id}
            value={opcion.id}
          >{opcion.nombre}</option>
        ))}

      </select>
    </>
  )

  return [SelectMonedas]

}

export default useSelectMonedas 