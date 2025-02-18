import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import { Suspense, lazy } from 'react'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'));
const TopRatedPage = lazy(() => import('./pages/TopRatedPage'));
const UpcomingPage = lazy(() => import('./pages/UpcomingPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const MovieDetails = lazy(() => import('./container/MovieDetails'));

function App() {

  return (
    <>
      <Layout>
        <Suspense fallback={<div className="loader"></div>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/top-rated' element={<TopRatedPage />} />
            <Route path='/upcoming' element={<UpcomingPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/:movieId' element={<MovieDetails />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
