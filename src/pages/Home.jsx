import React from 'react'
import { useEffect, useState } from 'react'
import Banner from '../components/banner'
import Card from '../components/card'
import Layout from '../components/layout'
import styled from 'styled-components'
import useCallFetch from '../components/useCallFetch'
import image from '../asset/banner.png'

const HomeContainer = styled.div`
    padding: 20px;
`

const HomeCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #f6f6f6;
    border-radius: 25px;
    padding: 50px;
    margin-bottom: 30px;
    gap: 5%;
    @media only screen and (max-width: 768px) {
        padding: 25px;
     }
     `

function Home() {
    /* Call data from Json */
    const { data } = useCallFetch()

    /* Return Home container with Banner and map data to card component */ 
    return (
        <HomeContainer>
            <Banner image={image} texte="Chez vous, partout et ailleurs" />
            <HomeCard>
                {data.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        image={item.cover}
                    />
                ))}
            </HomeCard>
        </HomeContainer>
    )
}

export default Home
