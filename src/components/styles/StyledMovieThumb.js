import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
	img {
		margin: 0 0 10px 0;
		width: 100%;
		/* min-height: 340px; */
		transition: all 0.3s;
		object-fit: cover;
		border-radius: 5px;
		animation: animateMovieThumb 0.5s;

		:hover {
			opacity: 0.8;
		}

		.clickable {
			cursor: pointer;
			text-decoration: none;
		}

		@keyframes animateMovieThumb {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}

	.movie-name {
		text: normal;
		color: #fff;
		font-size: 20px;
		text-align: center;
	}
	.movie-year {
		text: normal;
		text-align: center;
		color: #fff;
		font-size: 20px;
		padding-bottom: 10px;
	}
	.movie-thumb-box {
		width: 100%;
		border: 1px solid black;
		border-radius: 5px;
		background: #203354;
	}

	a:hover,
	a:visited,
	a:link,
	a:active {
		text-decoration: none;
	}
`;
