import styled from 'styled-components'
import React, { useState } from 'react'
import StarON from '../asset/StarOn.png'
import StarOff from '../asset/star.png'

const ImgStar = styled.img`
    height: 36px;
    @media only screen and (max-width: 768px) {
        height: 30px
    }
    @media only screen and (max-width: 425px) {
        height: 20px
    }
`
const CtnStar = styled.div`
    margin-top: 20px;
`

function Star({ rating }) {
    const totalStar = 5
    const actStar = rating

    return (
        <CtnStar>
            {[...new Array(totalStar)].map((item, index) => {
                return index < actStar ? (
                    <ImgStar src={StarON} key={index}></ImgStar>
                ) : (
                    <ImgStar src={StarOff} key={index}></ImgStar>
                )
            })}
        </CtnStar>
    )
}

export default Star
