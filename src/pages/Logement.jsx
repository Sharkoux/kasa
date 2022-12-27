import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Carrousel from '../components/carrousel'
import useCallOne from '../components/useCallOneLogement'

const CtnCarrousel = styled.div`
    margin-left: 100px;
    margin-right: 100px;
`

function Logement() {
    const { id } = useParams();
    const { data, loading, error } = useCallOne(id)

    console.log(data)

    return (
        <div>
            <CtnCarrousel>
                <Carrousel slides={data?.pictures} key={data?.id} />
            </CtnCarrousel>
            <div>
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
            </div>
        </div>
    )
}

export default Logement
