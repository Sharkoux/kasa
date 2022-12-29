import styled from 'styled-components'
import arrow from '../asset/arrow.png'
import React, { useState } from 'react'

const DivCollapse = styled.div`
    margin-bottom: 50px;
    width: 100%;
`

const BtnCollapse = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 0;
    background: #ff6060;
    color: white;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px;
`
const DivTxt = styled.div`
    background-color: #f6f6f6;
    height: 100%;
    padding: 30px;
`

const TxtCollapse = styled.p`
    margin: 0;
    color: #ff6060;
    @media only screen and (max-width: 425px) {
        font-size: 14px;
    }
`
const ArrowCollapse = styled.img`
    ${(props) => props.open && `transform: rotate(180deg)`}
`

function Collapse({ titre, texte }) {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <DivCollapse>
            <BtnCollapse onClick={toggle}>
                {titre}
                <ArrowCollapse src={arrow} open={open}></ArrowCollapse>
            </BtnCollapse>
            {open && (
                <DivTxt>
                    <TxtCollapse>{texte}</TxtCollapse>
                </DivTxt>
            )}
        </DivCollapse>
    )
}

export default Collapse
