import styled from 'styled-components';

export const StyledActor = styled.div`
	font-family: 'Abel', sans-serif;
	color: #fff;
	background: #203354;
	border-radius: 5px;
	padding: 4px;
	text-align: center;

	img {
		display: block;
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 5px;
	}

	.actor-name {
		display: block;
		font-size: 25px;
		margin: 15px 0 0 0;
	}

	.actor-character {
		display: block;
		font-size: 18px;
		margin: 0 0 10px 0;
	}
`;
