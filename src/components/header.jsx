import { Link } from 'react-router-dom'
import logo from '../asset/LOGO.png'
import styled from 'styled-components'

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 80px
`

const StyledLink = styled(Link)`
    color: #ff6060;
    font-size: 24px;
`

const DivStyled = styled.div`
    width: 310px;
    display: flex;
    justify-content: space-between;
`

function Header() {
    return (
        <HeaderStyle>
            <img src={logo} alt="logo" />
            <DivStyled>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/Apropos">A propos</StyledLink>
            </DivStyled>
        </HeaderStyle>
    )
}

export default Header
