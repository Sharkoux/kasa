import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../asset/LOGO.png'

/* Header component */
function Header() {
    const navLinkStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
            color: 'rgba(255, 96, 96, 1)',
        }
    }

    return (
        <header className="HeaderStyle">
            <img className="HeaderImg" src={logo} alt="logo" />
            <div className="DivStyled">
                <NavLink to="/" style={navLinkStyle}>
                    <p>Accueil</p>
                </NavLink>
                <NavLink to="/Apropos" style={navLinkStyle}>
                    <p>A propos</p>
                </NavLink>
            </div>
        </header>
    )
}

export default Header
