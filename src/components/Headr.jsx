import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import MovieLists from './MovieLists';
import GenreLists from './GenreLists';
import LanguageSwitcher from './LanguageSwitcher';

export default function Headr({lang}) {
  return (
    <header className="container mx-auto flex justify-between items-center py-4 bg-background-light dark:bg-background-dark">
      <Link href="/" className="text-3xl font-bold text-primary-light md:text-2xl dark:text-primary-dark">
        SWED-MOVIES
      </Link> 
      <nav className="flex space-x-4"> 

        <GenreLists/>

        <MovieLists/>

        <Link href="#" className="text-gray-800 hover:text-primary-light dark:text-gray-200 dark:hover:text-primary-active">
          الممثلون
        </Link>
        <Link href="/About" className="text-gray-800 hover:text-primary-light dark:text-gray-200 dark:hover:text-primary-active">
          عن
        </Link>
      </nav>
      <LanguageSwitcher lang={lang}/>


      <ThemeSwitcher />
    </header>
  );
}
