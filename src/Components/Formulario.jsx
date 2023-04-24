import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../Hooks/useSelectMonedas'


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = () => {

    // Dentro de los corchetes va el nombre del componente a utilizar
    const [SelectMonedas] = useSelectMonedas("Elige tu moneda")
    const [SelectCriptomonedas] = useSelectMonedas("Elige tu Criptomoneda")

    return (
        <form>

            {/* Aca llamo al hook que cree anteriormente */}
            <SelectMonedas/>
            <SelectCriptomonedas/>

            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Formulario