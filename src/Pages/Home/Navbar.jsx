import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { NavLink, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
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

	const [user] = useAuthState(auth);
	const [signOut] = useSignOut(auth);

	return (
		<div className='lg:border-b'>
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
				<div className='items-center hidden lg:flex gap-x-10 navlink-container'>
					<NavLink to='/hotels'>Hotels</NavLink>
					<NavLink to='/blogs'>Trips Blogs</NavLink>
					<NavLink to='/tourguides'>Tour Guides</NavLink>

					{user ? (
						<details className='dropdown' open={true}>
							<summary className='m-1 btn btn-ghost'>
								<i className='text-2xl bi bi-person-circle'></i>
							</summary>
							<ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
								<li>
									<button className='text-base'>Profile</button>
								</li>
								<li>
									<button
										onClick={() => {
											signOut();
										}}
										className='text-base'
									>
										Log Out
									</button>
								</li>
							</ul>
						</details>
					) : (
						<NavLink to='/login'>Login</NavLink>
					)}
				</div>
				<div
					className={`fixed h-[100vh]  text-3xl border font-bold w-[100vw] top-0 left-0 z-[999] flex flex-col justify-center items-center lg:hidden bg-base-100 gap-y-10 ${
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

					{user ? (
						<button
							onClick={() => {
								signOut();
							}}
							className='hover:border-black btn btn-ghost btn-sm hover:border hover:bg-transparent'
						>
							Sign Out
						</button>
					) : (
						<NavLink to='/login'>Login</NavLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
