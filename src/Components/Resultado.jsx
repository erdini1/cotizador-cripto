import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: black;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
    background-color: #f4f4f4;
    border-radius: 10px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`


const Resultado = ({ resultado }) => {

    const {
        PRICE,
        HIGHDAY,
        LOWDAY,
        CHANGEPCTDAY,
        IMAGEURL,
        LASTUPDATE
    } = resultado

    return (
        <Contenedor>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="imgen Cripto"
            />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCTDAY}%</span></Texto>
                <Texto>Ultima Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado