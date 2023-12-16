import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import CustomTitle from '../../../Shared/CustomTitle';
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
		<div>
			<CustomTitle title={tGuide.name} />
			<TGProfileHeader tGuide={tGuide} />
			<TGProfileDetails tGuide={tGuide} />
			{/* <div className='container px-5 lg:px-0'>
				<TourGuidesSection tourGuides={tourGuides} />
			</div> */}
		</div>
	);
};

export default TourGuideProfile;
