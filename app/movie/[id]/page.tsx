import { getMoviesDetails, getMoviesVideos, getPopularMovies } from '@/lib/GetMovies'
import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/GetImagePath'
import VideoPlayer from '@/components/VideoPlayer'
import MovieContainer from '@/components/MovieContainer'
export const metadata:Metadata ={
    title:'movie studio clone'
 }
interface Props{
    params:{
        id:string
    }
}
const MoviePage = async({params:{id}}:Props) => {
    const movies = await getMoviesVideos(id)
    console.log(movies);
    
 const videos = movies.map((movie:any) =>({
    id:movie.id,
    iso_639_1:movie.iso_639_1,
    iso_3166_1:movie.iso_3166_1,
    key:movie.key,
    name:movie.name,
    official:movie.official,
    published_at:movie.published_at,
    site:movie.site,
    size:movie.size,
    type:movie.type

 }) );

 
 const details:any = await getMoviesDetails(id)
 
 const popularMovies = await getPopularMovies()
    
  return (
    <div>
        <div className='py-10 px-10'>
            <div className='py-10 flex flex-col lg:flex-row  items-center gap-5'>
                <div className='w-full lg:w-1/2 min-h-96 rounded-md overflow-hidden group '>
                    <Image src={getImagePath(details?.backdrop_path)}  alt={details?.title} width={1920} height={1080}/>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col gap-2'>
                    <h2 className='text-2xl font-semibold underline decoration-[1px]'>{details?.original_title}</h2>
                    <p className='text-sm leading-6 tracking-wide mt-2'>{details?.overview}</p>
                    <p className='text-gray-300 text-sm font-semibold'>IMDB :{" "} <span className='dark:text-white text-gray-600 font-medium'>{details?.vote_average}</span></p>
                    <p className='text-gray-300 text-sm'>votes:{" "}<span className='dark:text-white font-medium text-gray-600'>{details?.vote_count}</span></p>
                    <p className='text-gray-300 text-sm'>release Date:{" "}<span className='dark:text-white font-medium text-gray-600'>{details?.release_date}</span></p>
                    <p className='text-gray-300 text-sm'>Genres:{" "} {details?.genres.map((item:any) =>(
                        <span className='text-white font-medium mr-1 ' key={item?.id}>{item?.name}</span>
                    ))}</p>
                    <p className='text-gray-300 text-sm'>Tag Line:{" "}<span className='dark:text-white font-medium text-gray-600'>{details?.tagline}</span></p>
                    <p className='text-gray-300 text-sm'>status:{" "}<span className={`font-medium ${details?.status === "Released"?"text-green-500":"text-red-500"}`}>{details?.status}</span></p>

                </div>
            </div>
            <VideoPlayer videos={videos} />
        </div>
        <div className='mt-6'>
            <MovieContainer movies={popularMovies} title='Popular movies' isVertical  />
        </div>
        
    </div>
  )
}

export default MoviePage