import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import TourGuidesSection from '../../../Homepage/SearchPage/TourGuidesSection';
import TGProfileDetails from './TGProfileDetails';
import TGProfileHeader from './TGProfileHeader';

const TourGuideProfile = () => {
	const { id } = useParams();
	const [tGuide, setTguide] = useState({});
	const [tourGuides, setTourGuides] = useState([]);

	useEffect(() => {
		const run = async () => {
			const { data } = await axios(
				`${import.meta.env.VITE_serverLink}/getTourGuideDetails/${id}`
			);
			setTguide(data);

			await axios(
				`${
					import.meta.env.VITE_serverLink
				}/getTourGuidesRecom?tsid=${encodeURIComponent(
					JSON.stringify(data.tsid)
				)}`
			).then((data) => {
				setTourGuides(data.data);
			});
		};
		run().catch((err) => toast.error(err.message));
	}, [id]);

	return (
		<div className='bg-base-200'>
			<TGProfileHeader tGuide={tGuide} />
			<TGProfileDetails tGuide={tGuide} />
			<div className='container'>
				{tourGuides && tourGuides.length !== 0 && (
					<TourGuidesSection tourGuides={tourGuides} />
				)}
			</div>
		</div>
	);
};

export default TourGuideProfile;
