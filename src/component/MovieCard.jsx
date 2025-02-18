import { Link } from "react-router-dom";
import { imageBaseUrl } from "../config";

const MovieCard = ({ movie }) => {


  return (
    <Link to={`/${movie.id}`} className="shadow-lg">
      <div className="w-[250px] bg-black p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img
          src={`${imageBaseUrl}/${movie.poster_path}`}
          alt="moviename"
          className="w-full h-[300px] object-cover rounded-lg"
        />
        <div className="mt-3 text-white text-lg font-semibold line-clamp-1">{movie.original_title}</div>
        <div className="text-yellow-400 font-medium">⭐ Rating: {movie.vote_average.toString().slice(0, 3)}</div>
      </div>
    </Link>
  );
}

export default MovieCard