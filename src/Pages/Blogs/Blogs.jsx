import React, { useState } from 'react';
import BlogSection from '../Homepage/EntryPage/BlogSection';
import CustomTitle from '../Shared/CustomTitle';
import HeroSection from '../Shared/HeroSection';

const Blogs = () => {
	const [imgLink, setImgLink] = useState(
		'https://i.ibb.co/2g0bYcB/shifaaz-shamoon-Rl9l9m-L6-Pvs-unsplash-1.png'
	);
	const [loading, setLoading] = useState(false);

	return (
		<div>
			<CustomTitle title='Blogs' />
			<HeroSection imgLink={imgLink} setLoading={setLoading} />
			<BlogSection />
		</div>
	);
};

export default Blogs;
