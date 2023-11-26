import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import HotelsSection from '../../Homepage/SearchPage/HotelsSection';
import CustomTitle from '../../Shared/CustomTitle';
import TDHeader from './TDHeader';
import TDPlan from './TDPlan';

const TripDescription = () => {
	const { tsid, tid } = useParams();
	const [trip, setTrip] = useState({});
	const [hotels, setHotels] = useState([]);
	const [spotName, setSpotName] = useState('');

	useEffect(() => {
		const run = async () => {
			const { data } = await axios(
				`${import.meta.env.VITE_serverLink}/getTripDetails/${tsid}/${tid}`
			);
			setTrip(data);

			await axios(
				`${import.meta.env.VITE_serverLink}/getNearByHotels/${tsid}`
			).then((data) => {
				setHotels(data.data.hotels);
				setSpotName(data.data.spot.name);
			});
		};
		run().catch((err) => toast.error(err.message));
	}, [tid, tsid]);

	return (
		<div>
			<CustomTitle title={trip.name} />
			<TDHeader trip={trip} />
			<TDPlan trip={trip} />
			<div className='container'>
				{hotels && hotels.length !== 0 && (
					<HotelsSection hotels={hotels} spotName={spotName} />
				)}
			</div>
		</div>
	);
};

export default TripDescription;
