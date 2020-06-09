import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { StyledNavigation } from '../styles/StyledNavigation';

//---------------NAVIGATION BAR------------//
//distructured movie prop from props.movie
const Navigation = ({ movie }) => (
	<StyledNavigation>
		<div className="navigation-content">
			<Link to="/">
				<p>Home</p>
			</Link>
			<p>|</p>
			<p>{movie}</p>
		</div>
	</StyledNavigation>
);

//--------PROPS-TYPES--------//
Navigation.propTypes = {
	movie: PropTypes.string
};

export default Navigation;
