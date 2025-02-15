import React, { useEffect, useState } from 'react'
import MovieCard from '../component/MovieCard'
import { apiKey, apiUrl } from '../config'

const HomeContainer = () => {

    const [movieData, setMovieData] = useState([])

    const fetchData = async () => {
        const response = await fetch(`${apiUrl}/popular?api_key=${apiKey}&language=en-US&page=1`)
        const data = await response.json()
        console.log(data.results)
        setMovieData(data.results)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    movieData.length > 0 &&
                    movieData.map((movie, index) => (
                        <MovieCard movie={movie} key={`movie-${index}`} />
                    ))
                }

            </div>
            <div className="flex justify-between items-center w-full px-8">
                <button>Prev</button>
                <button>Next</button>
            </div>
        </>


    )
}

export default HomeContainer;