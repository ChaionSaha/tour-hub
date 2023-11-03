import React from 'react';
import CustomTitle from '../../Shared/CustomTitle';
import BlogSection from './BlogSection';
import TripSection from './TripSection';

const EntryPage = () => {
	return (
		<div>
			<CustomTitle title='Home' />
			<TripSection />
			<BlogSection />
		</div>
	);
};

export default EntryPage;
