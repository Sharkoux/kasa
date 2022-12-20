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
   
`




function Footer() {
    return (
        <FooterStyle >
            <img src={logo} alt="logo" />
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </FooterStyle>
    )
}

export default Footer
