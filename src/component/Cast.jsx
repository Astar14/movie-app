import React, { useState } from 'react'
import { imageBaseUrl } from '../config'


const Cast = ({ cast }) => {

    return (
        <>
            {
                cast.profile_path && (
                    <div className='min-w-[200px] hover:scale-[110%]'>
                        <img className='w-full object-cover' src={`${imageBaseUrl}/${cast.profile_path}`} alt="" />
                        <h2 className='text-sm font-semibold mt-2'>Character:- {cast.character}</h2>
                        <h2 className="text-sm">Name: {cast.name}</h2>
                    </div>
                )
            }
        </>
    )
}

export default Cast