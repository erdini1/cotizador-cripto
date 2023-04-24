import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './Components/Formulario'
import ImagenCripto from "./img/imagen-criptos.png"

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr); /*Creamos dos columnas con 1 fraccion*/
    column-gap: 2rem,;
  }
`

//Creando el primer Styled Component
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})

  useEffect(() => {
    if(Object.keys(monedas).length > 0) { //Pongo una condicion para ver si hay algo en el array de monedas, si no tiene los dos select no deberia ejecutarse

      const cotizarCripto = async () => {
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        //El siguiente es un metodo para acceder a un json de manera dinamica
        setResultado(resultado.DISPLAY[criptomoneda][moneda])
        // console.log(`Precio de ${criptomoneda} en ${moneda}: ${precio}`)


      }



      cotizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='Imagenes Criptomonedas'
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
      </div>
    </Contenedor>
  )
}

export default App
