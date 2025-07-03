
import React from 'react'
import HeroCarousel from './HeroCarousel';
import { getDiscoverMovies } from '@/lib/GetMovies';
interface Props{
    id:string;
    keywords:string;
}
const CarouselBanner = async({id,keywords}:Props) => {
   const movies = await getDiscoverMovies(id,keywords)
   if (!Array.isArray(movies)) {
    return <p>Not movies found</p>
    
   }
  //  const movies =  await getPopularMovies()



  return <HeroCarousel movies={movies}  />
}

export default CarouselBanner