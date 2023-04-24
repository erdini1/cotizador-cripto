import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #fff;
  display: block; //Para que no esten pegados, uno arriba y otro abajo
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  /* text-align: center; */
  /* margin-bottom: 20px; */
`


//Estos Hooks personalizados nos permiten reutilizarlos
const useSelectMonedas = (label, opciones) => {

  // tiene un nombre generico porque la idea es reutilizarlo
  const [state, setState] = useState("")

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>

        {opciones.map(opcion => (
          <option
            key={opcion.id}
            value={opcion.id}
          >{opcion.nombre}</option>
        ))}

      </Select>
    </>
  )

  return [state, SelectMonedas]

}

export default useSelectMonedas 