import Results from '@/components/Results';
import { fetchData } from '@/utils/api';

const fetchTrendingMovies = async (genre,lang) => {
  const timeWindow = 'week'; 
  return await fetchData(`${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/${timeWindow}`}`,`${lang}`);
};




export default async function Home({ searchParams ,params }) {
  const { lang } = await params;
  const genre = await searchParams.genre || 'fetchTrending';

  let moviesData;

  try {
    moviesData = await fetchTrendingMovies(genre,lang);

  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data.....</div>;
  }


  return (
    <div>
       <Results results={moviesData.results} />
    </div>
  );
}