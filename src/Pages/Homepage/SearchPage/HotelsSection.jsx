import React from 'react';

const HotelsSection = ({ hotels = [], spotName }) => {
	return (
		<div className='flex flex-col py-10 gap-y-5'>
			<p className='my-5 text-3xl font-bold'>
				Recommended Hotels Near {spotName}
			</p>
		</div>
	);
};

export default HotelsSection;
