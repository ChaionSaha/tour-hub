import React from 'react';
import { useParams } from 'react-router-dom';

const TourGuideProfile = () => {
	const { id } = useParams();
	return <div>Showing result for {id}.</div>;
};

export default TourGuideProfile;
