import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Footer = ({ className }) => (
	<div className={className}>
		<div className="footer__container">
			<p className="footer__p">
				Here is the footer component
			</p>
		</div>
	</div>
);

Footer.propTypes = {
	className: PropTypes.string
};

export default Footer;
