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
    @media only screen and (max-width: 768px) {
        width: 47%
    }
    @media only screen and (max-width: 425px) {
        width: 100%

    }
   `

const StyleImg = styled.img`
    object-fit: cover;
    border-radius: 10px;
    height: 100%;
`
const Styletxt = styled.p`
    position: absolute;
    bottom: 0;
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
