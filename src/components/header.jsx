import { NavLink } from 'react-router-dom'
import React from 'react'

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
    margin-bottom: 80px;
`

const DivStyled = styled.div`
    width: 310px;
    display: flex;
    justify-content: space-between;
`

function Header() {
    const navLinkStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
            color: 'red',
        }
    }

    return (
        <HeaderStyle>
            <img src={logo} alt="logo" />
            <DivStyled>
                <NavLink to="/" style={navLinkStyle}>
                    <p>Accueil</p>
                </NavLink>
                <NavLink to="/Apropos" style={navLinkStyle}>
                    <p>A propos</p>
                </NavLink>
            </DivStyled>
        </HeaderStyle>
    )
}

export default Header
