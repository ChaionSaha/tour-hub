import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomTitle from '../../Shared/CustomTitle';
import HeroSection from '../../Shared/HeroSection';

const TourGuides = () => {
	const [tourGuides, setTourGuides] = useState([]);
	const [imgLink, setImgLink] = useState(
		'https://i.ibb.co/2g0bYcB/shifaaz-shamoon-Rl9l9m-L6-Pvs-unsplash-1.png'
	);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		const run = async () => {
			const { data } = await axios(
				`${import.meta.env.VITE_serverLink}/getTourGuides`
			);
			setTourGuides(data);
		};
		run().catch((err) => toast.error(err.message));
	}, []);
	return (
		<>
			<CustomTitle title='Tour Guides' />
			<HeroSection imgLink={imgLink} setLoading={setLoading} />
			<div className='container px-5 py-16 lg:px-0'>
				<p className='mb-5 text-3xl font-bold'>Tour Guides</p>
				<div className='grid gap-5 lg:grid-cols-4'>
					{tourGuides &&
						tourGuides.map((t, i) => {
							return (
								<div
									key={i}
									className='flex flex-col p-5 duration-150 hover:shadow-lg bg-base-100 gap-y-3 rounded-2xl'
								>
									<img
										src={t.img}
										className='self-center rounded-full w-44 h-44'
										alt=''
									/>
									<div className='flex flex-col w-full gap-y-1'>
										<p className='mt-5 text-xl font-semibold text-center'>
											{t.name}
										</p>
										<p className='text-center '>
											{t.experience} Years Experience
										</p>
									</div>
									<button
										className='text-white btn btn-primary'
										onClick={() => {
											navigate(`/tripdetails/tourguide/${t.tgid}`);
										}}
									>
										See Profile
									</button>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default TourGuides;
