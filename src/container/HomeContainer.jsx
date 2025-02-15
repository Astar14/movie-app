import React, { useEffect, useState } from 'react'
import MovieCard from '../component/MovieCard'
import { apiKey, apiUrl } from '../config'

const HomeContainer = () => {

    const [movieData, setMovieData] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [loading, setLoading] = useState(true)


    const fetchData = async (pageNo) => {
        const response = await fetch(`${apiUrl}/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`)
        const data = await response.json()
        console.log(data)
        console.log(data.results)
        setMovieData(data.results)
        setLoading(false)
    }

    const handlePageChange = (newPage) => {
        setPageNo(newPage);
        fetchData(newPage);
        scrollTo(0, 0)
    };

    useEffect(() => {
        fetchData(pageNo)
    }, [pageNo])

    if (loading) return <div className="loader"></div>;

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
            <div className="flex justify-center items-center gap-4 pb-10">
                <button
                    disabled={pageNo === 1}
                    onClick={() => handlePageChange(pageNo - 1)}
                    className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
                >
                    Prev
                </button>

                <div className="flex gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-md">
                    {[...Array(6)].map((_, index) => {
                        const pageNumber = pageNo + index;
                        return (
                            <button
                                key={pageNumber}
                                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${pageNo === pageNumber
                                    ? "bg-amber-700 text-white font-semibold shadow-md"
                                    : "bg-white border hover:bg-gray-200"
                                    }`}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={() => handlePageChange(pageNo + 1)}
                    className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
                >
                    Next
                </button>
            </div>


        </div>


    )
}

export default HomeContainer;