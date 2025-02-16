import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import HomePage from './pages/HomePage'
import './App.css'
import TopRatedPage from './pages/TopRatedPage'
import UpcomingPage from './pages/UpcomingPage'
import SearchPage from './pages/SearchPage'
import MovieDetails from './container/MovieDetails'
import Cast from './component/Cast'


function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/top-rated' element={<TopRatedPage />} />
          <Route path='/upcoming' element={<UpcomingPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/:movieId' element={<MovieDetails />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
