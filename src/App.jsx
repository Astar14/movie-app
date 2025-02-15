import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import HomePage from './pages/HomePage'
import './App.css'


function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
        </Routes>
      </Layout>      
    </>
  )
}

export default App
