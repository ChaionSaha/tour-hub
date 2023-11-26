import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import BlogSection from '../Homepage/EntryPage/BlogSection';
import TourGuidesSection from '../Homepage/SearchPage/TourGuidesSection';

const TripDetails = () => {
	const [tourGuides, setTourGuides] = useState([]);

	useEffect(() => {
		const run = async () => {
			const tsid = JSON.parse(sessionStorage.getItem('search'));
			await axios(
				`${
					import.meta.env.VITE_serverLink
				}/getTourGuidesRecom?tsid=${encodeURIComponent(JSON.stringify(tsid))}`
			).then((data) => {
				setTourGuides(data.data);
			});
		};
		run().catch((err) => toast.error(err.message));
	}, []);

	return (
		<div className='bg-base-200'>
			<Outlet />
			<div className='container'>
				{tourGuides && tourGuides.length !== 0 && (
					<TourGuidesSection tourGuides={tourGuides} />
				)}
			</div>
			<BlogSection />
		</div>
	);
};

export default TripDetails;
