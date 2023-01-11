import { useEffect, useState } from 'react'

/* hook for fetch data from json */

function useCallOne(id) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/logements.json')
            .then((response) => response.json())
            .then((actualData) => {
                /* Use find for call data with good id */
                const data = actualData.find((item) => item.id === id)

                setData(data)
            })
            .catch((err) => {
                setError(err)
            })
    })
    return { data, error }
}

export default useCallOne
