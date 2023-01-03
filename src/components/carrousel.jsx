import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import arrow from '../asset/arrowCaroussel.png'

const DivCarrousel = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: -50px;
    justify-content: space-between;
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
        top: 560px;
        left: 50%;
        color: white;
        @media only screen and (max-width: 768px) {
            top: 55%;
        }
        @media only screen and (max-width: 425px) {
            top: 40%;
            left: 47%;
            font-size: 20px;
        }
    }
    .containerImage {
        width: 100%;
    }
`

const Arrow = styled.button`
    position: relative;
    background: transparent;
    border: transparent;
    cursor: pointer;
    top: 250px;
    right: 60px;
    @media only screen and (max-width: 768px) {
        top: 235px;
    }
    @media only screen and (max-width: 425px) {
        top: 200px;
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
    transform: rotate(180deg);
    left: 60px;
    @media only screen and (max-width: 425px) {
        left: 30px;
    }
`
/* Carrousel component */
function Carrousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)
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
   
    /* return Slider with button + and -, and counter*/
     return (
        <DivCarrousel>
            <ArrowTwo onClick={previousSlide}>
                <img className="arrowImg" src={arrow}></img>
            </ArrowTwo>
            <Arrow onClick={nextSlide}>
                <img className="arrowImg" src={arrow}></img>
            </Arrow>
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
