import logo from '../asset/LOGOfooter.png'
import styled from 'styled-components'

const FooterStyle = styled.footer`
    background-color: black;
    color: white;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center
`
/* Footer component */
function Footer() {
    return (
        <FooterStyle>
            <img src={logo} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterStyle>
    )
}

export default Footer
