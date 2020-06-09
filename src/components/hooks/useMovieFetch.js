import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useMovieFetch = (movieId) => {
	const [ state, setState ] = useState({});
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	//--------------------------Fetch Data function-------------------------//
	const fetchData = useCallback(
		async () => {
			setError(false); //set error to false
			setLoading(true); //set loading to true

			try {
				const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
				const result = await (await fetch(endpoint)).json(); //fetching data and parsing to json

				const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
				const creditsResult = await (await fetch(creditsEndpoint)).json();

				const directors = creditsResult.crew.filter(
					//Filtering all directors from crew list and saving to an array
					(member) => member.job === 'Director'
				);

				setState({
					...result, //append data object to result
					actors: creditsResult.cast, //append creditsTesults.cast to actors state
					directors //append directors to directors array
				});
			} catch (error) {
				setError(true); //if error set error state to true
			}
			setLoading(false); //when finished fetching set loading to false
		},
		[ movieId ] //in the end callback  movieID ????
	);

	useEffect(
		() => {
			if (localStorage[movieId]) {
				setState(JSON.parse(localStorage[movieId]));
				setLoading(false);
			} else {
				fetchData();
			}
		},
		[ fetchData, movieId ]
	);

	useEffect(
		() => {
			localStorage.setItem(movieId, JSON.stringify(state));
		},
		[ movieId, state ]
	);

	return [ state, loading, error ]; //return states
};
