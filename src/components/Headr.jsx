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
      <div> 
        <input 
          type="text" 
          placeholder="ابحث عن فيلم..." 
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-gray-900 dark:border-gray-700 dark:focus:ring-primary-dark" 
        />
      </div>

      <ThemeSwitcher />
    </header>
  );
}
