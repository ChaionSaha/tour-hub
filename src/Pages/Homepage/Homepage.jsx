import React, { useState } from 'react';
import HeroSection from '../Shared/HeroSection';
import BlogSection from './BlogSection';
import TripSection from './TripSection';

const Homepage = () => {
	const [imgLink, setImgLink] = useState(
		'https://i.ibb.co/2g0bYcB/shifaaz-shamoon-Rl9l9m-L6-Pvs-unsplash-1.png'
	);
	return (
		<div>
			<HeroSection imgLink={imgLink} />
			<TripSection />
			<BlogSection />
		</div>
	);
};

export default Homepage;
