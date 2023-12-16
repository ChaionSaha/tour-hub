import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Home.scss';

const Navbar = ({ hotelsRef, blogsRef, guidesRef }) => {
	const scrollIntoView = (elementRef) => {
		window.scrollTo({ top: elementRef?.current.offsetTop, behavior: 'smooth' });
	};
	const [isShown, setIsShown] = useState(false);
	const location = useLocation();
	useEffect(() => {
		setIsShown(false);
	}, [location]);
	return (
		<div className='container relative flex items-center py-5 gap-x-5 lg:justify-between'>
			<button
				className='mx-5 text-lg lg:hidden btn-sm btn btn-outline'
				onClick={() => setIsShown(true)}
			>
				<i className='bi bi-list'></i>
			</button>
			<NavLink to='/'>
				<img src={logo} alt='' className='w-40 lg:w-52' />
			</NavLink>
			<div className='hidden lg:flex gap-x-10 navlink-container'>
				<NavLink to='/hotels'>Hotels</NavLink>
				<NavLink to='/blogs'>Trips Blogs</NavLink>
				<NavLink to='/tourguides'>Tour Guides</NavLink>
			</div>
			<div
				className={`absolute h-[100vh] text-3xl font-bold w-[100vw] top-0 left-0 z-[100] flex flex-col justify-center items-center lg:hidden bg-base-100 gap-y-10 ${
					isShown ? 'translate-x-0' : ' translate-x-[-100%]'
				} duration-150`}
			>
				<button
					className='absolute top-[2%] text-xl right-[5%] btn btn-outline'
					onClick={() => setIsShown(false)}
				>
					<i className='bi bi-x'></i>
				</button>
				<NavLink to='/hotels'>Hotels</NavLink>
				<NavLink to='/blogs'>Trips Blogs</NavLink>
				<NavLink to='/tourguides'>Tour Guides</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
