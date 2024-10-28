import React from 'react'
import Results from '@/components/Results';
import { fetchData } from '@/utils/api';

const fetchTrendingMovies = async (genre, lang) => {
  const timeWindow = 'week'; 
  return await fetchData(`${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/${timeWindow}`}`, `${lang}`);
};





async function  FeatshTrendingData({genre, lang}) {

  
    let moviesData;
  
    try {
      moviesData = await fetchTrendingMovies(genre, lang);
    } catch (error) {
      console.error('Error fetching data:', error);
      return <div>Error loading data.....</div>;
    }


  return (
    <div>
    
    <Results results={moviesData.results} />
    
    </div>
  )
}

export default FeatshTrendingData