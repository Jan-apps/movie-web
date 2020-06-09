import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

//-----------------MOVIE THUMB-------------------//
//distructured image, movieId and clicable props
const MovieThumb = ({ image, movieId, clickable, movieName, releaseDate }) => (
	//if clicable is true set Link to movieId and class clicable
	<StyledMovieThumb>
		{clickable ? (
			<Link to={`/${movieId}`}>
				<div className="movie-thumb-box">
					<img className="clickable" src={image} alt="moviethumb" />
					<div className="movie-name">{movieName}</div>
					<div className="movie-year">{releaseDate.slice(0, 4)}</div>
				</div>
			</Link>
		) : (
			<img src={image} alt="moviethumb" />
		)}
	</StyledMovieThumb>
);

//--------defined props---------//
MovieThumb.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool
};

export default MovieThumb;
