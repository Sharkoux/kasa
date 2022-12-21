import React from 'react'
import { useEffect, useState } from 'react'
import Banner from '../components/banner'
import Card from '../components/card'
import Layout from '../components/layout'
import styled from 'styled-components'
import CallFetch from '../components/callFetch'
import image from '../asset/banner.png'

const texte = "Chez vous, partout et ailleurs"


const DivHome = styled.div`
    margin-left: 100px;
    margin-right: 100px;
`

const DivCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #f6f6f6;
    border-radius: 25px;
    padding: 50px;
    margin-bottom: 30px;
`

function Home() {
    const { data } = CallFetch()

    return (
        <DivHome>
            <Banner image={image} texte={texte} />
            <DivCard>
                {data.map((item) => (
                    <Card key={item.id} name={item.title} image={item.cover} />
                ))}
            </DivCard>
        </DivHome>
    )
}

export default Home
