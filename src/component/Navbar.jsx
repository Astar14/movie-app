import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import SearchContainer from '../container/SearchContainer'
import { apiKey } from '../config'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [search, setSearch] = useState("")
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()

    const changeIcon = () => {
        setToggle(!toggle)
    }
    
    const searchMovies = () => {
        navigate(`/search?${search}`)
        changeIcon()
    }

    return (
        <>
            <nav className="flex justify-between items-center bg-gray-700 text-white py-4 px-6 shadow-md">
                <Link to='/' className="text-2xl font-bold cursor-pointer">MovieDb</Link>
                {
                    toggle ? <IoClose onClick={changeIcon} className='text-3xl cursor-pointer md:hidden' /> : <GiHamburgerMenu className='text-3xl cursor-pointer md:hidden' onClick={changeIcon} />
                }
                {
                    toggle ? <>
                        <ul className='bg-black flex flex-col min-w-screen w-[100%] right-0 h-full text-center fixed  text-white md:hidden top-15 text-lg font-bold gap-5 z-40 pt-15'>
                            <Link to="/"><li className="hover:text-gray-300 cursor-pointer" onClick={changeIcon}>Popular</li></Link>
                            <Link to="/top"><li className="hover:text-gray-300 cursor-pointer" onClick={changeIcon}>Top</li></Link>
                            <Link to="/upcoming"> <li className="hover:text-gray-300 cursor-pointer" onClick={changeIcon}>Upcoming</li></Link>
                            <li>
                            <div className="flex items-center flex-col gap-4 px-4 py-2 rounded-lg">
                            <input
                                type="text"
                                placeholder="Search movies..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-transparent outline-none text-white placeholder-white border border-white px-2"
                            />
                            <button className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-lg hover:bg-yellow-400 cursor-pointer w-[65%]" onClick={searchMovies}>
                                Search
                            </button>
                        </div>
                            </li>
                        </ul>
                        
                    </>
                        : ""


                }

                <div className="hidden md:flex items-center gap-8">
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
                            className="bg-transparent outline-none text-white placeholder-white border border-white px-2"
                        />
                        <button className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-lg hover:bg-yellow-400 cursor-pointer" onClick={() => navigate(`/search?${search}`)}>
                            Search
                        </button>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar