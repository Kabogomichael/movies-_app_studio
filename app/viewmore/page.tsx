import MovieContainer from '@/components/MovieContainer';
import { getNowPlayingMovies, getPopularMovies, getUpcomingMovies } from '@/lib/GetMovies';
import React from 'react'
interface Props{
    searchParams:{
        title:string;
    }
}

const ViewMore = async ({searchParams:{title}}:Props) => {
   let movies:any = null;
   if (title === 'Now Playing') {
    movies =  await getNowPlayingMovies();
    
   }else if(title === 'UpComing'){
    movies = await getUpcomingMovies();

   }
   else if(title === 'top Rated'){
    movies = await getUpcomingMovies();
    
   }else if(title === 'popular playing'){
    movies = await getPopularMovies();
    
   }

  return (
    <div className='py-10'>
        <h2 className='text-4xl font-bold px-10 mb-5 '>Result of {title}</h2>
        <MovieContainer movies={movies } isVertical={true}  />
    </div>
  )
}

export default ViewMore