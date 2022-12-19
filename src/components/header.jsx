import { Link } from 'react-router-dom'
import logo from '../asset/LOGO.png'
//import '../styles/App.css'

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Accueil</Link>
            <Link to="/Apropos">A propos</Link>
        </header>
    )
}

export default Header
