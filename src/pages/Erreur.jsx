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
    margin-top: 120px;
    margin-bottom: 20px;
    @media only screen and (max-width: 768px) {
       font-size: 200px;
     }
     @media only screen and (max-width: 425px) {
        font-size: 100px;
      }
`
const TxtError = styled.p`
    font-size: 36px;
    margin-bottom: 170px;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 24px;
      }
      @media only screen and (max-width: 425px) {
        font-size: 18px;
      }
`

const ErrorLink = styled(Link)`
    font-size: 18px;
    color: rgba(255, 96, 96, 1);
    text-decoration: underline;
    @media only screen and (max-width: 425px) {
        font-size: 14px;
      }
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
