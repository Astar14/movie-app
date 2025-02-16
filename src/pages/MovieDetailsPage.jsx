import React, { useState } from 'react'
import { apiKey, apiUrl } from '../config'
import { useParams } from 'react-router-dom'
import MovieDetails from '../container/MovieDetails'


const MovieDetailsPage = () => {

  return (
    <MovieDetails/>
  )
}

export default MovieDetailsPage