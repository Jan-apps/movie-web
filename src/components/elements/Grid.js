import React from 'react';
import PropTypes from 'prop-types';

import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';

//--------------------GRID-LAYOUT-----------------------//
//distructured header and children props
const Grid = ({ header, children }) => (
	//header= popular movies or Search Result or Actor
	<StyledGrid>
		<h1>{header}</h1>
		<StyledGridContent>{children}</StyledGridContent>
	</StyledGrid>
);

//--------------------PROP-TYPES-----------------------//
Grid.propTypes = {
	header: PropTypes.string
};

export default Grid;
