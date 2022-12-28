import React from 'react'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Erreur from '../pages/Erreur'


 function useCallOne(id) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
         fetch('/logements.json')
            .then((response) => response.json())
            .then((actualData) => {
                const data = actualData.find((item) => item.id === id)
                
                setData(data)
            })
            .catch((err) => {
                setError(err)
                
            })
           
    
}, [])
    return { data, error}
}

export default useCallOne
