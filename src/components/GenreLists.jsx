"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function GenreLists() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button 
        onClick={toggleDropdown}
        className="dark:hover:text-primary-hover hover:text-primary-hover inline-flex w-full justify-between items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-primary-dark"
      >
        التصنيفات
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:text-gray-300">
          <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <li>
              <Link 
                href="#" 
                className="dark:hover:text-primary-hover hover:text-primary-hover block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  dark:hover:bg-gray-700 " 
                role="menuitem"
                onClick={() => setIsOpen(false)} // إغلاق القائمة عند اختيار عنصر
              >
                أكشن
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="dark:hover:text-primary-hover hover:text-primary-hover block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  dark:hover:bg-gray-700 " 
                role="menuitem"
                onClick={() => setIsOpen(false)} // إغلاق القائمة عند اختيار عنصر
              >
                مغامرات
              </Link>
            </li>
            {/* ... باقي التصنيفات ... */}
          </ul>
        </div>
      )}
    </div>
  );
}