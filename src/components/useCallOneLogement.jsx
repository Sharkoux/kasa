import React from 'react'
import { useEffect, useState } from 'react'


 function useCallOne(id) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
         setLoading(true);
         fetch('/logements.json')
            .then((response) => response.json())
            .then((actualData) => {
                const data = actualData.find((item) => item.id === id)
                setData(data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    
}, [])
    return { data, loading, error}
}

export default useCallOne
