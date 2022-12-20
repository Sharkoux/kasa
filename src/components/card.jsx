import styled from 'styled-components'

const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
`

function Card({ name }) {
    return (
        <StyleCard>
            <img src="" />
            <p>{name}</p>
        </StyleCard>
    )
}

export default Card
