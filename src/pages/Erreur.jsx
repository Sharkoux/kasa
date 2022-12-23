import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Errordiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 96, 96, 1);
    padding-bottom: 150px
`
const TitleError = styled.h1`
    font-size: 280px;
    margin-top: 40px;
    margin-bottom: 20px
`
const TxtError = styled.p`
    font-size: 36px;
    margin-bottom: 170px
`

const ErrorLink = styled(Link)`
    font-size: 18px;
    color: rgba(255, 96, 96, 1);
    text-decoration: underline
`

function Erreur() {
    return (
        <Errordiv>
            <TitleError>404</TitleError>
            <TxtError>Oups! La page que vous demandez n'existe pas.</TxtError>
            <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
        </Errordiv>
    )
}

export default Erreur
