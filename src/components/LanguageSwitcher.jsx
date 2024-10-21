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
    <select onChange={(e) => handleLanguageChange(e.target.value)} value={lang}> {/* إضافة value={lang} */}
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