import React from 'react';

// Components
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';


//-------------------------MOVIE-Component-----------------------------------//
//distructured movieId prop
const Movie = ({ movieId }) => {

  //distructing movie, loading and error states from useMovieFetch Hook, movieId passed as param
  const [movie, loading, error] = useMovieFetch(movieId);

  //-------------------Error---------------------------//
  if (error) return <div>Something went wrong ...</div>;
  //-------------------Spinner---------------------------//
  if (loading) return <Spinner />;


  return (
  <>
    <Navigation movie={movie.original_title} />
    <MovieInfo movie={movie} />
    <MovieInfoBar
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}
      /* (time, budget, revenue) - props -> fetching from movie object State*/
    />
    <Grid header="Actors" /*header-> prop, actor-> prop, key->unique identifier*/ >
      
      {movie.actors.map(actor => (
        <Actor key={actor.credit_id} actor={actor} />
      ))}     
    </Grid>
  </>
  )
};

export default Movie;