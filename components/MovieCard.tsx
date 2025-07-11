'use client'
import { getImagePath } from '@/lib/GetImagePath'
import { Movie } from '@/type'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
 
const MovieCard = ({movie}:{movie:Movie}) => {
    const router = useRouter()
    const handleRoute =()=>{
        router.push(`/movie/${movie?.id}`)
    }
  return (
    <div onClick={handleRoute} className='relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out 
    hover:drop-shadow-lg'>

        
             <p className='absolute z-20 bottom-5 left-5 font-semibold text-white'>{movie.title}</p> 
            <Image src={getImagePath(movie?.backdrop_path || movie.poster_path)} alt={movie.title} width={1920}
              height={1080} className='w-fit lg:min-w-[400px] h-56 object-cover shadow-md shadow-gray-900
              drop-shadow-xl '/>

<div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/90 via-gray-200/0 to-gray-300 dark:to-[#1A1C29]" />
            
        
    </div>
  )
}

export default MovieCard