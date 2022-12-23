import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Routes, Route, useParams } from 'react-router-dom';


const StyleCard = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 30%;
    position: relative;
    margin-bottom: 50px;
    height: 360px;
    
   `

const StyleImg = styled.img`
    object-fit: cover;
    border-radius: 10px;
    height: 100%;
`
const Styletxt = styled.p`
    position: absolute;
    top: 80%;
    margin: 20px;
    color: white;
    font-size: 18px;
`

function Card({ name, image, id}) {
    
    
    return (
        <StyleCard to={`/logement/${id}`}>
            <StyleImg src={image} />
            <Styletxt>{name}</Styletxt>{" "}
        </StyleCard>
    )
}

export default Card
