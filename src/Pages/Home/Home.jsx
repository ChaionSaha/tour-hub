import React, { useState } from 'react';
import HeroSection from '../Shared/HeroSection';
import Navbar from '../Shared/Navbar';

const Home = () => {
	const [imgLink, setImgLink] = useState(
		'https://i.ibb.co/2g0bYcB/shifaaz-shamoon-Rl9l9m-L6-Pvs-unsplash-1.png'
	);
	return (
		<div>
			<Navbar />
			<HeroSection imgLink={imgLink} />
		</div>
	);
};

export default Home;
