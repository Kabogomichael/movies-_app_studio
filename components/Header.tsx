import React from 'react'
import Link from 'next/link'
import GenreDropDown from './GenreDropDown'
import SearchInput from './SearchInput'
import { ModeToggle } from './ThemeToggle'
import LogoUi from './ui/LogoUi'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between p-5 backdrop-blur-2xl transition-colors  gap-4 md:gap-0 sticky z-50 top-0'>
        {/* logo */}
        <Link href={"/"} className='flex items-center'>
        <LogoUi />
        </Link>
        
        {/* others */}
        <div className=' flex space-x-2 items-center'>
            {/* genre */}
            <GenreDropDown />
                 {/* search */}
                 <SearchInput />
                      {/* theme */}
                      <ModeToggle />
        </div>
    </div>
  )
}

export default Header