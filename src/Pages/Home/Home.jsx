import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Home;
