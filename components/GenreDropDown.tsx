import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { Genres } from '@/type'
const genreArray = [{
    id:1,
    title:'Action',

},{
    id:2,
    title:'Animation',

}]

const GenreDropDown = async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options:RequestInit = {
        method:'GET',
        headers:{
            accept:'application/json',
            Authorization:`Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,

        },
        next:{
            revalidate: 60 * 60 *24,
        },
    }
    const response = await fetch(url,options)
    const data = (await response.json()) as Genres;
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className=' flex items-center text-sm font-medium'>
            Genre <ChevronDown className='ml-1 '  size={20}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='border-1 shadow-sm  dark:border-white/20 dark:bg-neutral-900 dark:text-gray-400 duration-200  bg-white text-black   p-2 rounded-md'>
            <DropdownMenuLabel className='font-semibold '>Select a Genra</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {data?.genres?.map((item) =>(
                <DropdownMenuItem key={item?.id} className='font-extralight dark:hover:text-red-500 hover:font-bold'>
                    <Link href={`/genre/${item?.id}?genre=${item?.name} `}> 
                    {item?.name}
                    </Link>
                    
                </DropdownMenuItem>
            ))}

        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default GenreDropDown