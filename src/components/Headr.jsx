import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import MovieLists from './MovieLists';
import GenreLists from './GenreLists';
import LanguageSwitcher from './LanguageSwitcher';

export default function Headr({lang}) {
  return (
    <header className="container mx-auto flex justify-between items-center py-4 bg-background-light dark:bg-background-dark">
      <Link href="/" className="text-3xl font-bold text-primary-light md:text-2xl sm:text-xl dark:text-primary-dark">
        SWED-MOVIES
      </Link> 
      <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-7 items-center  justify-center"> 
        <div className="flex space-x-4 md:space-x-7">
          <GenreLists/>
          <MovieLists/>
        </div>

        <div className="flex space-x-4 md:space-x-7">
          <Link href="#" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md dark:bg-gray-900 dark:hover:bg-gray-600 dark:text-gray-200">
            الممثلون
          </Link>
          <Link href="/About" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md dark:bg-gray-900 dark:hover:bg-gray-600 dark:text-gray-200">
            عن
          </Link>
        </div>
        <LanguageSwitcher lang={lang}/>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
