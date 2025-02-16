import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, apiUrl } from '../config'
import Cast from '../component/Cast'

const MovieDetails = () => {

    const [getMovieData, setMovieData] = useState({})
    const [castData, setCastData] = useState([])
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


    const fetchData = async (movieId) => {
        const response = await fetch(`${apiUrl}/${movieId}/credits?api_key=${apiKey}&language=en-US`)
        const data = await response.json()
        console.log(data)
        setCastData(data.cast)
        setLoading(false)
    }



    useEffect(() => {
        getSingleMovieData(movieId)
        fetchData(movieId)
    }, [movieId])

    if (loading) return <div className="loader"></div>;

    return (
        <>
            <div className='bg-gray-800 w-full min-h-screen'>
                <div className='w-[1200px] pt-6 mx-auto bg-gray-800 text-white flex justify-between items-center'>
                    <div>
                        <h1 className='text-6xl'>{getMovieData.title}</h1>

                    </div>
                    <div>
                        <h2 className='text-3xl'>IMDB RATING</h2>
                        <p className='text-[18px] text-gray-200'>⭐ Rating: {getMovieData.vote_average}</p>
                    </div>
                </div>
                <div className='w-[1200px] mx-auto pt-3 flex gap-3'>
                    <img src={`https://image.tmdb.org/t/p/w500/${getMovieData.poster_path}`} alt="" className='rounded-2xl w-[400px] h-[400px] object-cover' />
                    <div>
                        <p className='text-gray-300 text-2xl mb-1 mt-2'>{getMovieData.overview}</p>
                        <p className='text-2xl text-gray-300 mb-1 '>Runtime:- {getMovieData.runtime}</p>
                        <h3 className='text-2xl text-gray-300 mb-1'>Release date:- {getMovieData.release_date}</h3>
                        <h2 className='text-gray-300 text-2xl mb-1'>Status:- {getMovieData.status}</h2>
                        <h2 className='text-gray-300 text-2xl'>Genres:- {getMovieData.genres?.[0]?.name}</h2>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-5xl px-6'>Cast</h1>
                <div className='flex w-full gap-8 overflow-scroll scrollbar-hide p-4'>
                    {
                        castData.map((cast, index) => (
                            <Cast cast={cast} key={`cast-${index}`} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default MovieDetails