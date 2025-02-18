import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, apiUrl, imageBaseUrl } from '../config'
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

            <div className="bg-gray-800 w-full min-h-screen pb-10">
                <div className="max-w-[1200px] pt-6 mx-auto bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center px-4">
                    <div>
                        <h1 className="text-2xl md:text-6xl">{getMovieData.title}</h1>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <h2 className="text-xl md:text-3xl">IMDB RATING</h2>
                        <p className="text-[16px] md:text-[18px] text-gray-200">⭐ Rating: {getMovieData.vote_average?.toString().slice(0, 3)}</p>
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto pt-3 flex flex-col md:flex-row gap-3 mt-10 px-4">
                    <img
                        src={`${imageBaseUrl}/${getMovieData.poster_path}`}
                        alt=""
                        className="rounded-2xl w-full md:w-[400px] h-[400px] object-cover"
                    />
                    <div>
                        <p className="text-gray-300 text-lg md:text-2xl mb-1 mt-2">{getMovieData.overview}</p>
                        <p className="text-lg md:text-2xl text-gray-300 mb-1">Runtime: {getMovieData.runtime} Min</p>
                        <h3 className="text-lg md:text-2xl text-gray-300 mb-1">Release date: {getMovieData.release_date}</h3>
                        <h2 className="text-lg md:text-2xl text-gray-300 mb-1">Status: {getMovieData.status}</h2>
                        <div className="flex flex-wrap gap-2 mt-5">
                            {getMovieData.genres?.map((genre, index) => (
                                <div className="py-1 px-4 border border-white text-white rounded-lg text-sm md:text-base" key={index}>
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto mt-10 px-4">
                    <h1 className="text-3xl md:text-5xl text-white">Cast</h1>
                    <div className="flex gap-4 overflow-x-auto pl-4 mt-6 text-white whitespace-nowrap pb-4">
                        {castData.map((cast, index) => (
                            <Cast cast={cast} key={`cast-${index}`} />
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default MovieDetails