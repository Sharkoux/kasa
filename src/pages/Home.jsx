import React from 'react'
import { useEffect, useState } from 'react'
import Banner from '../components/banner'
import Card from '../components/card'
import styled from 'styled-components'



const DivHome = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`

const DivCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
    
`




function Home() {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch('logements.json')
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <DivHome>
            <Banner />
            <DivCard>
            {data.map((item) => (
                <Card key={item.id} name={item.title} />
            ))}
            </DivCard>
        </DivHome>
    )
}

export default Home
