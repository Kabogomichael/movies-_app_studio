"use client";
import { Movie } from "@/type";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { getImagePath } from "@/lib/GetImagePath";

interface Props {
  movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden cursor-pointer relative " ref={emblaRef}>
      <div className="flex  ">
        {movies.map((movie) => (
          <div key={movie?.id} className=" flex-none basis-full min-w-0">
            <Image
              src={getImagePath(movie?.backdrop_path, true)}
              alt={movie?.title}
              width={1920}
              height={1080}
              className="object-cover"
            />
            {/* <div
              className=" hidden md:inline lg:inline absolute top-0
             pt-40 xl:pt-72 left-0 bg-transparent z-20 h-full w-full
              bg-gradient-to-r from-gray-900/90 via-transparent 
              to-transparent p-10 space-y-5 text-white"
            >
              <h2 className="text-5xl font-bold max-w-xl">{movie?.title}</h2>
             
              <p className="max-w-xl line-clamp-3">{movie?.overview}</p>
            </div> */}

            <div className="hidden md:inline lg:inline  h-full w-full   absolute top-0 z-20 bg-transparent bg-gradient-to-r from-gray-900/90 via-transparent   p-10   pt-40 xl:pt-72 ">
              <h1 className="text-5xl font-bold max-w-xl text-red-500 pb-5">{movie?.title}</h1>
              <p className="max-w-xl line-clamp-3 lg:text-xl pl-5 ">{movie?.overview}</p>
              </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/20 to-gray-300 dark:to-[#121212]" />
    </div>
  );
};

export default HeroCarousel;
