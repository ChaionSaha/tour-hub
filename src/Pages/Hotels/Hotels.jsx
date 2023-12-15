import { StarIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CustomTitle from '../Shared/CustomTitle';
import HeroSection from '../Shared/HeroSection';

const Hotels = () => {
	const [hotels, setHotels] = useState([]);
	const [imgLink, setImgLink] = useState(
		'https://i.ibb.co/2g0bYcB/shifaaz-shamoon-Rl9l9m-L6-Pvs-unsplash-1.png'
	);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const run = async () => {
			const { data } = await axios(
				`${import.meta.env.VITE_serverLink}/getHotels`
			);
			setHotels(data);
		};
		run().catch((err) => toast.error(err.message));
	}, []);
	return (
		<>
			<CustomTitle title='Hotels' />
			<HeroSection imgLink={imgLink} setLoading={setLoading} />
			<div className='container py-16'>
				<p className='mb-5 text-3xl font-bold'>Hotels</p>
				<div className='grid grid-cols-4 gap-5'>
					{hotels &&
						hotels.map((h, i) => {
							return (
								<div
									key={i}
									className='flex flex-col p-3 bg-base-100 rounded-3xl'
								>
									<div className='relative'>
										<img src={h.img} alt='' className='w-full ' />
										<div className='absolute top-[3%] left-[3%] bg-[#fdfdfd96] rounded-lg p-2 gap-x-1 items-center flex'>
											<StarIcon className='w-4 text-[#ED7D2B]' />
											<p>{h.rating}</p>
										</div>
									</div>
									<p
										className='mt-5 mb-2 text-xl font-semibold cursor-pointer hover:underline'
										onClick={() => {
											window.open(`${h.website}`, '_blank');
										}}
									>
										{h.name}
									</p>
									<p className='mb-2 text-sm'>{h.address}</p>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default Hotels;
