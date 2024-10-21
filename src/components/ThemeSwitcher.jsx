"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 rounded-md hover:bg-primary-hover click:bg-primary-active">
      {theme === 'light' ? (
        <BsMoon className="text-2xl" /> 
      ) : (
        <BsSun className="text-2xl" /> 
      )}
    </button>
  );
}
