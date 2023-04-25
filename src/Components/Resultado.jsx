import styled from "@emotion/styled"

const Parrafo = styled.p`
    
`

const Resultado = ({resultado}) => {

    const {
        PRICE, 
        HIGHDAY, 
        LOWDAY, 
        CHANGEPCTDAY, 
        IMAGEURL, 
        LASTUPDATE
    } = resultado

    return (
        <div>
            <p>El precio es de: <span>{PRICE}</span></p>
            <p>Precio más alto del día: <span>{HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span>{CHANGEPCTDAY}</span></p>
            <p>Ultima Actualización: <span>{LASTUPDATE}</span></p>

        </div>
    )
}

export default Resultado