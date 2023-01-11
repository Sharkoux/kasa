

/* Banner component */

function Banner({ image, texte }) {
    return (
        <div className='DivBanner' >
            <img className='ImgBanner' src={image} alt="logo" />
            <p className='TxtBanner'>{texte}</p>
        </div>
    )
}

export default Banner
