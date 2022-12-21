import React from 'react'
import { useEffect, useState } from 'react'

function CallFetch() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const fetchData = () => {
        fetch('logements.json')
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData)
            })
            .catch((err) => {
                setError(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return {data, error} 
}

export default CallFetch
