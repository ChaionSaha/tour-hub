import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TripSection = ({ setLoading }) => {
	const [places, setPlaces] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const run = async () => {
			const { data } = await axios(
				`${import.meta.env.VITE_serverLink}/getTouristSpots`
			);
			setPlaces(data);
		};
		run().catch((err) => toast.error(err.message));
	}, []);

	return (
		<div className='container mt-24'>
			<div className='flex items-center gap-x-20'>
				<p className='w-1/3 text-3xl font-bold '>
					Looking for some Place for your next trip?
				</p>
				<p className='w-1/2 '>
					Start planning the trip of your dreams with the help of 100+ hotels,
					tour host, transport facilities on TourHub official.
				</p>
			</div>
			<div className='grid gap-3 px-5 mt-10 lg:grid-cols-3'>
				{places &&
					places.map((p, i) => {
						return (
							<div
								key={i}
								className='relative text-white  flex flex-col justify-center p-10 min-h-[30vh] border rounded-xl overflow-hidden'
								style={{
									background: `url(${p.img})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<div className='flex flex-col gap-y-5 z-[100]'>
									<div className='flex flex-col gap-y-2'>
										<p className='text-3xl font-bold'>{p.name}</p>
										<p>{p.description}</p>
									</div>
									<button
										onClick={() => {
											setLoading(true);
											navigate(`/search?q=${p.shortName}`);
										}}
										className='self-start text-white normal-case btn btn-primary'
									>
										Explore
									</button>
								</div>
								<div className='absolute top-0 left-0 w-full h-full bg-[rgba(48,48,48,0.3)] z-[10]'></div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default TripSection;
