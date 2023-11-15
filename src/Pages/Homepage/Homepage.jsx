import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeroSection from '../Shared/HeroSection';

const Homepage = () => {
	const [imgLink, setImgLink] = useState(
		'https://i.ibb.co/2g0bYcB/shifaaz-shamoon-Rl9l9m-L6-Pvs-unsplash-1.png'
	);
	const [loading, setLoading] = useState(false);
	return (
		<div>
			<HeroSection imgLink={imgLink} setLoading={setLoading} />
			<Outlet context={{ imgLink, setImgLink, loading, setLoading }} />
		</div>
	);
};

export default Homepage;
