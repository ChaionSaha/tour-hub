import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomTitle from '../../Shared/CustomTitle';
import HotelsSection from './HotelsSection';
import TourGuidesSection from './TourGuidesSection';
import TripsSection from './TripsSection';

const SearchPage = () => {
	const [searchParams] = useSearchParams();
	const [trips, setTrips] = useState([]);
	const [hotels, setHotels] = useState([]);
	const [spotName, setSpotName] = useState('');
	const [tourGuides, setTourGuides] = useState([]);

	const { setImgLink, loading, setLoading } = useOutletContext();
	const searchRef = useRef(null);

	useEffect(() => {
		const run = async () => {
			const { data } = await axios(
				`${import.meta.env.VITE_serverLink}/search?q=${searchParams.get('q')}`
			);
			setTrips(data.trips);
			setHotels(data.hotels);
			setTourGuides(data.tourGuides);
			setLoading(false);

			sessionStorage.setItem('search', JSON.stringify(data.tsid));

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
			<div className='container px-5 lg:px-0'>
				<CustomTitle title={'Search'} />
				{loading ? (
					<div className='flex items-center justify-center w-full h-full py-20'>
						<span className='loading loading-spinner loading-lg'></span>
					</div>
				) : trips && trips.length === 0 ? (
					<p className='my-20 text-2xl font-medium text-center '>
						Sorry. No trips available now
					</p>
				) : (
					<div className='border border-transparent'>
						<TripsSection trips={trips} />
						{hotels && hotels.length !== 0 && (
							<HotelsSection hotels={hotels} spotName={spotName} />
						)}
						{tourGuides && tourGuides.length !== 0 && (
							<TourGuidesSection tourGuides={tourGuides} />
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchPage;
