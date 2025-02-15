
const MovieCard = ({movie}) => {


    return (
        <div className="bg-gray-900 w-full  mx-auto p-6  shadow-lg">
          <div className="w-[250px] bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img 
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              alt="moviename" 
              className="w-full h-[300px] object-cover rounded-lg"
            />
          <div className="mt-3 text-white text-lg font-semibold">{movie.original_title}</div>
          <div className="text-yellow-400 font-medium">⭐ Rating: {movie.vote_average}</div>
          </div>
        </div>
      );
}

export default MovieCard