import NavbarItem from './NavbarItem';
import SerchBox from './SerchBox';
export default function Navbar({lang}) {
  return (
    <div className='flex  items-center dark:bg-orange-950 bg-orange-800 p-4 lg:text-lg justify-center gap-6'>
      
      <SerchBox lang={lang} />
      <NavbarItem  title={lang === "ar" ? "الرائج" : "Trending"} param='fetchTrending' />
      <NavbarItem  title={lang === "ar" ? "الأعلى تقييما" : 'Top Rated'} param='fetchTopRated' />
    </div>
  );
}