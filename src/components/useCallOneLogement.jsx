import React from 'react'
import { useEffect, useState } from 'react'


function useCallOne() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const fetchData = (id) => {
        fetch('/logements.json')
            .then((response) => response.json())
            .then((actualData) => {
                const data = actualData.find((item) => item.id === id)
                setData(data)
            })
            .catch((err) => {
                setError(err)
            })
    }

    console.log(data)
    return { data, error, fetchData}
}

export default useCallOne
