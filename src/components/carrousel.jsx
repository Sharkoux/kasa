import React, { useState } from 'react'
import arrow from '../asset/arrowCaroussel.png'

/* Carrousel component */
function Carrousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    const length = slides?.length

    /* function slide index+ */
    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }
    /*  function slide index- */
    const previousSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    const addArrow = () => {
        setVisible(length === 1 ? false : true)
    }

    /* return Slider with button + and -, and counter */
    return (
        <div className="DivCarrousel" onLoad={addArrow}>
            {visible ? (
                <div className="arrowContainer">
                    <button className="ArrowTwo Arrow" onClick={previousSlide}>
                        <img
                            className="arrowImg"
                            src={arrow}
                            alt="arrowRigth"
                        ></img>
                    </button>
                    <button className="Arrow" onClick={nextSlide}>
                        <img
                            className="arrowImg"
                            src={arrow}
                            alt="arrowLeft"
                        ></img>
                    </button>
                </div>
            ) : (
                <div />
            )}
            {slides.map((item, index) => {
                return (
                    <div className="containerImage" key={index}>
                        {index === currentIndex && (
                            <img
                                className="slideImage"
                                src={item}
                                index={index}
                                alt="imgCarrousel"
                            ></img>
                        )}
                    </div>
                )
            })}
            <p className="imgCount">
                {currentIndex + 1}/{length}
            </p>
        </div>
    )
}

export default Carrousel
