import React from 'react';
import { NavLink } from 'react-router-dom';
import logoWhite from '../../img/logo(white).png';

const Footer = () => {
	return (
		<div className='bg-black '>
			<div className='container flex flex-col px-5 py-16 text-white lg:px-0'>
				<div className='grid gap-x-10 gap-y-16 lg:grid-cols-5'>
					<div className='flex flex-col gap-y-5'>
						<NavLink to='/'>
							<img src={logoWhite} alt='' />
						</NavLink>
						<p className='text-sm'>
							With over 2 million bookable vacation rentals, Vrbo connects
							homeowners with families and vacationers looking for something
							more than a hotel for their trip.
						</p>
						<div className='flex items-center gap-x-3'>
							<p className='p-2 text-2xl bg-blue-600 rounded-md cursor-pointer'>
								<i className='bi bi-facebook'></i>
							</p>
							<p className='p-2 text-2xl bg-blue-400 rounded-md cursor-pointer'>
								<i className='bi bi-twitter'></i>
							</p>
							<p className='p-2 text-2xl bg-blue-600 rounded-md cursor-pointer'>
								<i className='bi bi-linkedin'></i>
							</p>
							<p className='p-2 text-2xl bg-red-600 rounded-md cursor-pointer'>
								<i className='bi bi-youtube'></i>
							</p>
						</div>
					</div>

					<div className='flex lg:justify-center'>
						<div className='flex flex-col gap-y-5'>
							<p className='font-bold'>Links</p>
							<ul className='flex flex-col gap-y-5'>
								<li className='duration-150 cursor-pointer hover:underline'>
									<NavLink to='/hotels'>Hotel</NavLink>
								</li>
								<li className='duration-150 cursor-pointer hover:underline'>
									<NavLink to='/blogs'>Blogs</NavLink>
								</li>
								<li className='duration-150 cursor-pointer hover:underline'>
									<NavLink to='/tourguides'>Tour Guides</NavLink>
								</li>
							</ul>
						</div>
					</div>

					<div className='flex lg:justify-center'>
						<div className='flex flex-col gap-y-5'>
							<p className='font-bold'>Support</p>
							<ul className='flex flex-col gap-y-5'>
								<li className='duration-150 cursor-pointer hover:underline'>
									Help Center
								</li>
								<li className='duration-150 cursor-pointer hover:underline'>
									Safety Information
								</li>
								<li className='duration-150 cursor-pointer hover:underline'>
									Cancellation options
								</li>
							</ul>
						</div>
					</div>

					<div className='flex lg:justify-center'>
						<div className='flex flex-col gap-y-5'>
							<p className='font-bold'>Community</p>
							<ul className='flex flex-col gap-y-5'>
								<li className='duration-150 cursor-pointer hover:underline'>
									TourHub: Share your memories
								</li>
								<li className='duration-150 cursor-pointer hover:underline'>
									Support local community
								</li>
								<li className='duration-150 cursor-pointer hover:underline'>
									Combating discrimination
								</li>
							</ul>
						</div>
					</div>

					<div className='flex lg:justify-center'>
						<div className='flex flex-col gap-y-5'>
							<p className='font-bold'>About</p>
							<ul className='flex flex-col gap-y-5'>
								<li className='duration-150 cursor-pointer hover:underline'>
									Newsroom
								</li>
								<li className='duration-150 cursor-pointer hover:underline'>
									Learn about new features
								</li>
								<li className='duration-150 cursor-pointer hover:underline'>
									Letter from our founders
								</li>

								<li className='duration-150 cursor-pointer hover:underline'>
									Career
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
