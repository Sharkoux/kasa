import React from 'react'
import { useEffect, useState } from 'react'
import Banner from '../components/banner'
import Card from '../components/card'

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
        <div>
            <Banner />
            {data.map((item) => (
                <Card key={item.id} name={item.title} />
            ))}
        </div>
    )
}

export default Home
