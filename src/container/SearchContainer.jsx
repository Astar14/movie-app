import React, { useState, useEffect } from 'react'
import MovieCard from '../component/MovieCard'
import { apiKey } from '../config'
import { useLocation } from 'react-router-dom'

const SearchContainer = () => {
    const [movieData, setMovieData] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const searchParam = location.search.slice(1)

    const fetchData = async (searchParam) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchParam}&page=1`)
        const data = await response.json()
        setMovieData(data.results)
        setLoading(false)
    }

    useEffect(() => {
        fetchData(searchParam)
    }, [searchParam])

    if (loading) return <div className='loader'> </div>
    return (
        <div className='bg-gray-800'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-10 pb-10 pt-10'>
                {
                    movieData.length > 0 &&
                    movieData.map((movie, index) => (
                        <MovieCard movie={movie} key={`movie-${index}`} />
                    ))
                }
            </div>
        </div>
    )
}

export default SearchContainer