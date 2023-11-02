import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
