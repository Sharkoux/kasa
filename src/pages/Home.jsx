import React from 'react'
import Banner from '../components/banner'
import Card from '../components/card'
import useCallFetch from '../hook/useCallFetch'
import image from '../asset/banner.png'


function Home() {
    /* Call data from Json */
    const { data } = useCallFetch()

    /* Return Home container with Banner and map data to card component */
    return (
        <div className='Container'>
            <Banner image={image} texte="Chez vous, partout et ailleurs" />
            <div className='HomeCard'>
                {data.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        image={item.cover}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
