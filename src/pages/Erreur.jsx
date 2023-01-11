import { Link } from 'react-router-dom'

/* Page Error */
function Erreur() {
    return (
        <div className='Errordiv'>
            <h1 className='TitleError'>404</h1>
            <p className='TxtError'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='ErrorLink'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Erreur
