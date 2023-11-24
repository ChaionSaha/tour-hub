import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CustomTitle from '../../Shared/CustomTitle';
import BlogSection from './BlogSection';
import TripSection from './TripSection';

const EntryPage = () => {
	const { setLoading } = useOutletContext();
	return (
		<div>
			<CustomTitle title='Home' />
			<TripSection setLoading={setLoading} />
			<BlogSection />
		</div>
	);
};

export default EntryPage;
