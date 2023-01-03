import styled from 'styled-components'
import React, { useState } from 'react'

const CtnTag = styled.div`
    display: flex;
    .tag {
        font-size: 14px;
        padding-left: 40px;
        padding-right: 40px;
        background-color: #ff6060;
        color: white;
        min-height: 25px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        text-align: center;
        @media only screen and (max-width: 768px) {
            padding-left: 30px;
            padding-right: 30px;
        }
        @media only screen and (max-width: 425px) {
            font-size: 12px;
            padding-left: 20px;
            padding-right: 20px;
        }
    }
`
/* Generate simple tag component*/
function Tag({ tag }) {
    return (
        <CtnTag>
            {tag?.map((item, index) => (
                <p className="tag" key={index}>
                    {item}
                </p>
            ))}
        </CtnTag>
    )
}

export default Tag
