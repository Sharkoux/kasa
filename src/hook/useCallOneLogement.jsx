import { useEffect, useState } from 'react'

/* hook for fetch data from json */

function useCallOne(id) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchdata() {
            await fetch('/logements.json')
                .then((response) => response.json())
                .then((actualData) => {
                    /* Use find for call data with good id */
                    const data = actualData.find((item) => item.id === id)
                    if (data === undefined) {
                        throw new Response('Not Found', { status: 404 })
                    }
                    setData(data)
                })
                .catch((err) => {
                    setError(err)
                })
        }
        fetchdata()
    }, [id])

    return { data, error }
}

export default useCallOne
