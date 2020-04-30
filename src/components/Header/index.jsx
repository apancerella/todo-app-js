import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Header = ({ className }) => (
	<div className={className}>
		<div className="header__container">
			<nav className="navbar">
				<span className="header__span navbar-brand">
					<FontAwesomeIcon icon={faListAlt} size="lg" />
				</span>
				<span className="header__span">React & Redux Demo (Todo App)</span>
			</nav>
		</div>
	</div>
);

Header.propTypes = {
	className: PropTypes.string
};

export default Header;
