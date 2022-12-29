import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import arrow from '../asset/arrowCaroussel.png'

const DivCarrousel = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .slideContainer {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        position: relative;
        overflow: hidden;
    }
    .slideImage {
        height: 400px;
        object-fit: cover;
        border-radius: 25px;
        width: 100%;
        @media only screen and (max-width: 425px) {
            height: 350px;
        }
    }
    .imgCount {
        position: absolute;
        top: 65%;
        left: 50%;
        color: white;
        @media only screen and (max-width: 768px) {
            top: 55%;
        }
        @media only screen and (max-width: 425px) {
            top: 45%;
            left: 47%;
        }
    }
    .containerImage {
        width: 100%;
    }
`

const Arrow = styled.button`
    position: absolute;
    background: transparent;
    border: transparent;
    cursor: pointer;
    top: 45%;
    right: 130px;
    @media only screen and (max-width: 768px) {
        top: 35%;
        right: 50px;
    }
    @media only screen and (max-width: 425px) {
        top: 30%;
        right: 30px;
    }

    .arrowImg {
        @media only screen and (max-width: 768px) {
            height: 60px;
        }
        @media only screen and (max-width: 425px) {
            height: 30px;
        }
    }
`
const ArrowTwo = styled(Arrow)`
    left: 130px;
    transform: rotate(180deg);
    right: auto;
    @media only screen and (max-width: 768px) {
        left: 50px;
    }
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
                <img className="arrowImg" src={arrow}></img>
            </Arrow>
            <ArrowTwo onClick={previousSlide}>
                <img className="arrowImg" src={arrow}></img>
            </ArrowTwo>
            {slides.map((item, index) => {
                return (
                    <div className="containerImage" key={index}>
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
