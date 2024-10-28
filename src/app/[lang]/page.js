import FeatshTrendingData from '@/components/FeatshTrendingData';



export default async function Home({ params, searchParams }) {
  const { lang } = await params; // ها هنا، أنت تنتظر
  const genre = (await searchParams).genre || 'fetchTrending'; // ها هنا، أنت تنتظر

  return (
    <div>
      <FeatshTrendingData genre={genre} lang={lang} />
    </div>
  );
}