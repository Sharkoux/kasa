import React from 'react'
import { useEffect, useState } from 'react'
import Banner from '../components/banner'
import Card from '../components/card'
import Layout from '../components/layout'
import styled from 'styled-components'
import useCallFetch from '../components/useCallFetch'
import image from '../asset/banner.png'

const DivHome = styled.div`
    margin-left: 100px;
    margin-right: 100px;
`

const DivCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #f6f6f6;
    border-radius: 25px;
    padding: 50px;
    margin-bottom: 30px;
    gap: 5%;
`

function Home() {
    const { data } = useCallFetch()

    return (
        <DivHome>
            <Banner image={image} texte="Chez vous, partout et ailleurs" />
            <DivCard>
                {data.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        image={item.cover}
                    />
                ))}
            </DivCard>
        </DivHome>
    )
}

export default Home
