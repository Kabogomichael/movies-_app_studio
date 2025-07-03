import MovieContainer from '@/components/MovieContainer';
import { getPopularMovies, getSearchMovies } from '@/lib/GetMovies';

import React from 'react'
interface Props{
  params:{
    term:string;
  }
}
const SearchTerm = async ({params:{term}}:Props) => {
const termToUse = decodeURI(term)

const movies  = await getSearchMovies(termToUse)
const popularMovies = await getPopularMovies()
if (!movies) {
  return <h1>{termToUse} not found</h1>
}
  return (
    <div className='py-10 max-w-screen-xl mx-auto'>
      <h2 className='text-4xl font-bold px-10 mb-5'>Result of {termToUse}</h2>
      <MovieContainer movies={movies} title='searched movies' isVertical />
      <MovieContainer movies={popularMovies} title='You may also like'  />
      
    </div>
  )
}

export default SearchTerm