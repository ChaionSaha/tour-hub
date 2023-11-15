import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomTitle from '../../Shared/CustomTitle';
import HotelsSection from './HotelsSection';
import TripsSection from './TripsSection';

const SearchPage = () => {
	const [searchParams] = useSearchParams();
	const [trips, setTrips] = useState([]);
	const [hotels, setHotels] = useState([]);
	const [spotName, setSpotName] = useState('');

	const { setImgLink, loading, setLoading } = useOutletContext();
	const searchRef = useRef(null);

	useEffect(() => {
		const run = async () => {
			const { data } = await axios(
				`${import.meta.env.VITE_serverLink}/search?q=${searchParams.get('q')}`
			);
			setTrips(data.trips);
			setHotels(data.hotels);
			setLoading(false);

			window.scrollTo({
				top: searchRef.current?.offsetTop,
				behavior: 'smooth',
			});

			await axios(
				`${
					import.meta.env.VITE_serverLink
				}/getHeroImageBySearch?q=${searchParams.get('q')}`
			).then((data) => {
				setImgLink(
					data.data.bgImg ||
						'https://i.ibb.co/2g0bYcB/shifaaz-shamoon-Rl9l9m-L6-Pvs-unsplash-1.png'
				);
				setSpotName(data.data.name);
			});
		};
		run().catch((err) => toast.error(err.message));
	}, [searchParams]);

	return (
		<div className='bg-base-200' ref={searchRef}>
			<div className='container'>
				<CustomTitle title={'Search'} />
				{loading ? (
					<div className='flex items-center justify-center w-full h-full py-20'>
						<span className='loading loading-spinner loading-lg'></span>
					</div>
				) : trips && trips.length === 0 ? (
					<p className='my-20 text-2xl font-medium text-center bg-base-100'>
						Sorry. No trips available now
					</p>
				) : (
					<div className=''>
						<TripsSection trips={trips} />
						<HotelsSection hotels={hotels} spotName={spotName} />
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchPage;
