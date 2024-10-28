"use client"
import { useRouter } from 'next/navigation';

export default  function LanguageSwitcher({lang}) {
  const router = useRouter();
  const locales = ['en', 'ar'] // Add all supported locales

  const toggleLanguage = () => {
    setIsArabic(!isArabic)
    localStorage.setItem('preferredLang', newLang)
    document.cookie = `preferredLang=${newLang}; path=/`
    
    const currentPath = window.location.pathname.replace(/^\/(en|ar)/, '')
    window.location.href = `/${newLang}${currentPath}`
  }

  const handleLanguageChange = (newLang) => {



    const currentPath =  window.location.pathname.replace(/^\/(en|ar)/, '');
    const newPath = currentPath;
    window.location.href= `/${newLang}${newPath}`;
  };

  return (

    <div>   
    <select className=" bg-gray-200 border-primary-light w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-gray-900 dark:border-gray-700 dark:focus:ring-primary-dark" onChange={(e) => handleLanguageChange(e.target.value)} value={lang}> {/* إضافة value={lang} */}
    {locales.map((locale) => (
      <option key={locale} value={locale}>
        {/* Add translations here */}
        {locale === 'ar' ? 'العربية' : locale === 'en' ? 'English' : locale}
      </option>
    ))}
  </select>
    </div>
  );
}