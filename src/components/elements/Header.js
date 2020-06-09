import React from 'react';
import { Link } from '@reach/router';
import RMDBLogo from '../images/movieWeb.png';

import { StyledHeader, StyledLogo } from '../styles/StyledHeader';

// 1. Learn how to create a styled basic styled component
// 2. Learn how to handle props in styled component
// 3. Create a global style with styled components

//--------------------HEADER-----------------------//

const Header = () => (
	<StyledHeader>
		<div className="header-content">
			<Link to="/">
				<StyledLogo src={RMDBLogo} alt="rmdb-logo" />
			</Link>
		</div>
	</StyledHeader>
);

export default Header;
