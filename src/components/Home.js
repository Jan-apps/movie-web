import React, { useState } from 'react';
//import defined urls etc
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from '../config';
// import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';
import NoImage from './images/no_image.jpg';
// import Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';


//----------------------------------HOME-Content--------------------------------------------//
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');  //set state searchTerm to empty string

  const [
    {
      state: { movies, currentPage, totalPages, heroImage }, //setting states of ...
      loading,                                              // distructing loading state
      error,                                                 //distructuring error state
    },
    fetchMovies,                                  
  ] = useHomeFetch(searchTerm);


//--------------------SearchMovies-Function-------------------------//
  const searchMovies = search => {
    //if search is defined go to search records otherwise go to popular movies
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);

  }

  //-------------- Load more movies Function (trigged by pressing BTN )------------------- //
  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`; //current page defined in a state
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint; //if searchTerm exist use search endpoint page otherwise use popular 

    fetchMovies(endpoint); //fetching movies with a given endpoint 

  }

  //------------------------Error-------------------------------//
  if (error) return <div>Something went wrong ...</div>;

  //-----------------------Spinner-------------------------//
  if (!movies[0]) return <Spinner />;
  console.log(movies);

  return (
    <>
       <SearchBar callback={searchMovies} />
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
    
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
            releaseDate={movie.release_date}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
