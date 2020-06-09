import styled from 'styled-components';

export const StyledSearchBar = styled.div`
	width: 100%;
	height: 70px;
	background: #203354;
	padding: 10px 20px 0px 10px;
	box-sizing: border-box;
	color: #fff;
`;

export const StyledSearchBarContent = styled.div`
	max-width: 1280px;
	width: 100%;
	height: 40px;
	background: #425d8c;
	margin: 0 auto;
	border-radius: 10px;
	position: relative;
	color: #fff;

	.fa-search {
		position: absolute;
		left: 20px;
		top: 7px;
		color: #fff;
		z-index: 1000;
		font-size: 25px;
	}

	input {
		font-family: 'Abel', sans-serif;
		font-size: 28px;
		position: absolute;
		left: 0px;
		margin: 8px 0;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
		background: transparent;
		height: 25px;
		color: #fff;
		box-sizing: border-box;

		:focus {
			outline: none;
		}

		@media screen and (max-width: 720px) {
			font-size: 28px;
		}
	}
`;
