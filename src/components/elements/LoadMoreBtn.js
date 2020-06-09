import React from 'react';
import PropTypes from 'prop-types';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

//--------------------LOAD-MORE-BTN-----------------------//
//distructured text an callback function props
const LoadMoreBtn = ({ text, callback }) => (
	<StyledLoadMoreBtn type="button" onClick={callback}>
		{text}
	</StyledLoadMoreBtn>
);

//--------------------PROPS-TYPES-----------------------//
LoadMoreBtn.propTypes = {
	text: PropTypes.string,
	callback: PropTypes.func
};

export default LoadMoreBtn;
