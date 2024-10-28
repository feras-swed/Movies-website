'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SerchBox({lang}) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className='flex justify-between'
      onSubmit={handleSubmit}
    >
      <input
  type="text" 
  placeholder={lang === "ar" ? "ابحث عن فيلم..." : "Find a movie..."}
  className=" bg-gray-800 border-primary-light w-full rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-gray-900 dark:border-gray-700 dark:focus:ring-primary-dark" 
 value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
       <button
        type="submit" // Add type="submit" for better form behavior
        className='bg-primary-light hover:bg-primary-hover dark:bg-primary-dark dark:hover:bg-primary-light text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:shadow-outline'
        disabled={search === ''}
      >
        {lang === "ar" ? "بحث" : "search"}
      </button>

    </form>
  );
}




















