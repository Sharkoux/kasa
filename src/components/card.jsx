import { Link } from 'react-router-dom'

/* Card component */

function Card({ name, image, id }) {
    return (
        <Link className="StyleCard" to={`/logement/${id}`}>
            <img alt="ImageAppartement" className="StyleImg" src={image} />
            <p className="Styletxt">{name}</p>{' '}
        </Link>
    )
}

export default Card
