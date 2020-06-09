import { useState, useEffect } from 'react';
import { POPULAR_BASE_URL } from '../../config';

//searchTerm is a param
export const useHomeFetch = (searchTerm) => {
	const [ state, setState ] = useState({ movies: [] }); //define state movies and set to empty array
	const [ loading, setLoading ] = useState(true); //define state loading and set to true
	const [ error, setError ] = useState(false); //define state error and set to false

	//-------------------- fetchMovies function--------------------- //
	const fetchMovies = async (endpoint) => {
		//endpoint param passed with BASE_API_URL and searchTerm
		setError(false); //set error state to false before fetching
		setLoading(true); //set loading state to true before fetching

		const isLoadMore = endpoint.search('page'); //Checks if there is a next page of records

		//try to fetch with await
		try {
			const result = await (await fetch(endpoint)).json(); //fetching and parsing to json
			console.log(result);

			setState((prev) => ({
				// setState of movies array
				//prev is a param and returns current state object
				//...prev spreads the object
				...prev,
				movies:
					isLoadMore !== -1 //if there is next page of records update movies array and append new results
						? [ ...prev.movies, ...result.results ] //otherwise fetch only new results and update the state
						: [ ...result.results ],
				heroImage: prev.heroImage || result.results[0], //set state to prev image or fetch new result from 1st record
				currentPage: result.page, //set current page to currentPage state
				totalPages: result.total_pages //set total pages to totalPages state
			}));
		} catch (error) {
			setError(true); //if there is error with fetching set error state to true
			console.log(error);
		}
		setLoading(false); //when finished set loading state to false
	};

	// Fetch popular movies initially on mount / start
	useEffect(() => {
		if (sessionStorage.homeState) {
			setState(JSON.parse(sessionStorage.homeState));
			setLoading(false);
		} else {
			fetchMovies(POPULAR_BASE_URL);
		}
	}, []);

	useEffect(
		() => {
			if (!searchTerm) {
				sessionStorage.setItem('homeState', JSON.stringify(state)); //if searchTerm is null
			}
		},
		[ searchTerm, state ]
	);

	return [ { state, loading, error }, fetchMovies ]; //return  states and fetchMovies function
};
