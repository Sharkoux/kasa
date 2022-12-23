import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CallFetch from './useCallFetch'
import banner from '../asset/banner.png'
import apropos from '../asset/Apropos.png'

const DivCarrousel = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 400px;
`

const Arrow = styled.button`
    position: absolute;
    background-color: red;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
`

function Carrousel() {
    const data = ['1', '2', '3']
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {})

    return (
        <DivCarrousel>
            {data.map((item, index) => {
                return (
                    <div
                        style={{
                            transform: `translate(-${currentIndex * 100}%)`,
                        }}
                        key={index}
                    >
                        {item}
                    </div>
                )
            })}
            <Arrow onClick={() => setCurrentIndex(currentIndex + 1)}></Arrow>
        </DivCarrousel>
    )
}

export default Carrousel
