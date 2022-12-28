import { NavLink } from 'react-router-dom'
import React from 'react'

import logo from '../asset/LOGO.png'
import styled from 'styled-components'

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
    @media only screen and (max-width: 768px) {
        margin: 20px;
        padding-bottom: 0px;
    }
    @media only screen and (max-width: 425px) {
        margin: 5px;
    }
    .HeaderImg {
        @media only screen and (max-width: 768px) {
            width: 145px;
        }
        @media only screen and (max-width: 425px) {
            width: 120px;
        }
    }
`

const DivStyled = styled.div`
    display: flex;
    gap: 25px;
    @media only screen and (max-width: 768px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 425px) {
        font-size: 12px;
        text-transform: uppercase;
    }
`

function Header() {
    const navLinkStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
            color: 'rgba(255, 96, 96, 1)',
        }
    }

    return (
        <HeaderStyle>
            <img className="HeaderImg" src={logo} alt="logo" />
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
