import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Homepage from './Pages/Homepage/Homepage';
import Hotels from './Pages/Hotels/Hotels';
import TourGuides from './Pages/TourGuides/TourGuides';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />}>
					<Route path='' element={<Homepage />} />
					<Route path='/hotels' element={<Hotels />} />
					<Route path='/blogs' element={<Blogs />} />
					<Route path='/tourguides' element={<TourGuides />} />
				</Route>
			</Routes>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme='light'
			/>
		</div>
	);
};

export default App;
