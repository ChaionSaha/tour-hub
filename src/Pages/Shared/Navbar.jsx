import React from 'react';
import logo from '../../img/logo.png';
import './Shared.scss';

const Navbar = ({ hotelsRef, blogsRef, guidesRef }) => {
	const scrollIntoView = (elementRef) => {
		window.scrollTo({ top: elementRef?.current.offsetTop, behavior: 'smooth' });
	};
	return (
		<div className='container flex items-center justify-between py-5'>
			<img src={logo} alt='' className='w-52' />
			<ul className='flex gap-x-10 navlink-container'>
				<li onClick={() => scrollIntoView(hotelsRef)}>Hotels</li>
				<li onClick={() => scrollIntoView(blogsRef)}>Trips Blogs</li>
				<li onClick={() => scrollIntoView(guidesRef)}>Tour Guides</li>
			</ul>
		</div>
	);
};

export default Navbar;
