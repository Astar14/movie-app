import React, { useState } from 'react'

const Cast = ({ cast }) => {

    return (
        <>
            {
                cast.profile_path && (
                    <div className='min-w-[200px]'>
                        <img className='w-full object-cover ' src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="" />
                        <h2 className='text-sm font-semibold mt-2'>Character:- {cast.character}</h2>
                        <h2 className="text-sm">Name: {cast.name}</h2>
                    </div>
                )
            }
        </>
    )
}

export default Cast