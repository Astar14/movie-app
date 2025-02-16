import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, apiUrl } from '../config'

const MovieDetails = () => {

    const [getMovieData, setMovieData] = useState([])
    const [loading, setLoading] = useState(true)
    const { movieId } = useParams()
    console.log(movieId)

    const getSingleMovieData = async (movieId) => {
        const response = await fetch(`${apiUrl}/${movieId}?api_key=${apiKey}&language=en-US`)
        const data = await response.json()
        console.log(data)
        setMovieData(data)
        setLoading(false)
    }

    useEffect(() => {
        getSingleMovieData(movieId)
    },[movieId])

    if (loading) return <div className="loader"></div>;

    return (
        <>
          
        </>
    )
}

export default MovieDetails