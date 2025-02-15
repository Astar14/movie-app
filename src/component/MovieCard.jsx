import React from 'react'

const MovieCard = () => {
    return (
        <div className="bg-gray-900 w-full  mx-auto p-6  shadow-lg">
          <div className="w-[250px] bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img 
              src="https://via.placeholder.com/250x350" 
              alt="Spiderman" 
              className="w-full h-[350px] object-cover rounded-lg"
            />
            <div className="mt-3 text-white text-lg font-semibold">Spiderman</div>
            <div className="text-yellow-400 font-medium">⭐ Rating: 7.2</div>
          </div>
        </div>
      );
}

export default MovieCard