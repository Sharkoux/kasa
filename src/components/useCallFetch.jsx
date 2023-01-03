import React from 'react'
import { useEffect, useState } from 'react'
import Home from '../pages/Home'

/* hook for fetch data from json */

function useCallFetch() {
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
    return { data, error }
}

export default useCallFetch
