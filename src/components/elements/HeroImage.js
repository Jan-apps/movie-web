import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeroImage } from '../styles/StyledHeroImage';

//--------------------MOVIE-INFO-BAR-----------------------//
//distructured image, title and text props
const HeroImage = ({ image, title, text }) => (
	//image is a prop to StyledHeroImage style
	<StyledHeroImage image={image}>
		<div className="heroimage-content">
			<div className="heroimage-text">
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	</StyledHeroImage>
);

//--------------------PROPS-TYPES-----------------------//
HeroImage.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
};

export default HeroImage;
