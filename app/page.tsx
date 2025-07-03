import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/GetMovies";
import CarouselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
const upComingMovies = await getUpcomingMovies();
const topRatedMovies = await getTopRatedMovies();
const popularMovies = await getPopularMovies();
if (!Array.isArray(nowPlayingMovies || upComingMovies || topRatedMovies|| popularMovies)) {
  return <p>Nothing found</p>
  
}

  return (
   <div>
   
  <CarouselBanner id="uuu"keywords=""   />
  <div className="flex flex-col space-y-2 ">
    <MovieContainer movies={nowPlayingMovies}  title="Now Playing" />
    <MovieContainer movies={upComingMovies}  title="UpComing"/>
    <MovieContainer movies={topRatedMovies}  title="top Rated"/>
    <MovieContainer movies={popularMovies}  title="popular playing"/>
  </div>

   </div>
  );
}
