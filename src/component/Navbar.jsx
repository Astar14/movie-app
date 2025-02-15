import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import SearchContainer from '../container/SearchContainer'
import { apiKey } from '../config'

const Navbar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    return (
        <>
            <nav className="flex justify-between items-center bg-gray-700 text-white py-4 px-6 shadow-md">
                <Link to='/' className="text-2xl font-bold cursor-pointer">MovieDb</Link>
                <div className="flex items-center gap-8">
                    <ul className="flex gap-6 text-lg">
                        <NavLink className="cursor-pointer hover:text-yellow-400" to={'/'}>Popular</NavLink>
                        <NavLink className="cursor-pointer hover:text-yellow-400" to={'/top-rated'}>Top Rated</NavLink>
                        <NavLink className="cursor-pointer hover:text-yellow-400" to={'/upcoming'}>Upcoming</NavLink>
                    </ul>

                    <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent outline-none text-white placeholder-gray-400"
                        />
                        <button className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-lg hover:bg-yellow-400 cursor-pointer" onClick={() => navigate('/search')}>
                            Search
                        </button>
                    </div>
                </div>
            </nav >
            <SearchContainer search={search} />
        </>
    )
}

export default Navbar