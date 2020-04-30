import React from 'react';

import './style.css';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const App = () => (
	<div className="app__container">
		<Header className="app__header" />
		<Content className="app__content" />
		<Footer className="app__footer" />
	</div>
);

export default App;
