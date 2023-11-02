import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Home.scss';

const Navbar = ({ hotelsRef, blogsRef, guidesRef }) => {
	const scrollIntoView = (elementRef) => {
		window.scrollTo({ top: elementRef?.current.offsetTop, behavior: 'smooth' });
	};
	return (
		<div className='container flex items-center justify-between py-5'>
			<NavLink to='/'>
				<img src={logo} alt='' className='w-52' />
			</NavLink>
			<div className='flex gap-x-10 navlink-container'>
				<NavLink to='/hotels'>Hotels</NavLink>
				<NavLink to='/blogs'>Trips Blogs</NavLink>
				<NavLink to='/tourguides'>Tour Guides</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
