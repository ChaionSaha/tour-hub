import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CustomTitle from '../../Shared/CustomTitle';
import TripSection from './TripSection';

const EntryPage = () => {
	const { setLoading } = useOutletContext();
	return (
		<div>
			<CustomTitle title='Home' />
			<TripSection setLoading={setLoading} />
		</div>
	);
};

export default EntryPage;
