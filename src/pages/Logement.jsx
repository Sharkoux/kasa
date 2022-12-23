import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Carrousel from '../components/carrousel'
import useCallOne from '../components/useCallOneLogement'

const CtnCarrousel = styled.div`

`

function Logement() {
    const {id} = useParams()
    const {data, fetchData} = useCallOne()
    
  
    useEffect(() => {
        fetchData(id)
    }, [])

    return (
        <div>
            <CtnCarrousel>
            <Carrousel />
            </CtnCarrousel>
        </div>
    )
}

export default Logement
