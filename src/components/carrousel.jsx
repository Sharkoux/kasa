import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import arrow from '../asset/arrowCaroussel.png'

const DivCarrousel = styled.div`
    display: flex;
    .slideContainer {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        position: relative;
        overflow: hidden;
    }
    .slideImage {
        height: 410px;
        width: 1703px;
        object-fit: cover;
        border-radius: 25px;
    }
    .imgCount {
        position: absolute;
        top: 55%;
        left: 50%;
        color: white;
    }
`

const Arrow = styled.button`
    position: absolute;
    background: transparent;
    border: transparent;
    cursor: pointer;
    top: 40%;
    right: 100px;
`
const ArrowTwo = styled(Arrow)`
    left: 100px;
    transform: rotate(180deg);
    right: auto;
`

function Carrousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = slides?.length

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }

    const previousSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <DivCarrousel>
            <Arrow onClick={nextSlide}>
                <img src={arrow}></img>
            </Arrow>
            <ArrowTwo onClick={previousSlide}>
                <img src={arrow}></img>
            </ArrowTwo>
            {slides.map((item, index) => {
                return (
                    <div key={index}>
                        {index === currentIndex && (
                            <img
                                className="slideImage"
                                src={item}
                                index={index}
                            ></img>
                        )}
                    </div>
                )
            })}
            <p className="imgCount">
                {currentIndex + 1}/{length}
            </p>
        </DivCarrousel>
    )
}

export default Carrousel
