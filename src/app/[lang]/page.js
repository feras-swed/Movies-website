import Results from '@/components/Results';
import { fetchData } from '@/utils/api';

const fetchTrendingMovies = async () => {
  const timeWindow = 'day'; 
  return await fetchData(`/trending/all/week`);
};



export default async function Home({ searchParams, }) {

  let moviesData;

  try {
    moviesData = await fetchTrendingMovies();

  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data.....</div>;
  }


  
  const movies = moviesData.results.slice(0, 8).map(movie => ({
    id: movie.id,
    title: movie.title,
    imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    imageBackGrondUrl: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    genre: movie.adult ? 'Adult' : 'Kids',
    additionalInfo: movie.release_date.split('-')[0], 
  }));

















  return (
    <div>
       <Results results={movies} />
    </div>
  );
}