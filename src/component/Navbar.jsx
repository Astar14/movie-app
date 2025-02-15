import React from 'react'

const Navbar = () => {
    return (
        <>

            <nav className="flex justify-between items-center bg-gray-700 text-white py-4 px-6 shadow-md">
                <div className="text-2xl font-bold">MovieDb</div>
                <div className="flex items-center gap-8">
                    <ul className="flex gap-6 text-lg">
                        <li className="cursor-pointer hover:text-yellow-400 ">Popular</li>
                        <li className="cursor-pointer hover:text-yellow-400 ">Top Rated</li>
                        <li className="cursor-pointer hover:text-yellow-400 ">Upcoming</li>
                    </ul>

                    <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            className="bg-transparent outline-none text-white placeholder-gray-400"
                        />
                        <button className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-lg hover:bg-yellow-400 cursor-pointer">
                            Search
                        </button>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar