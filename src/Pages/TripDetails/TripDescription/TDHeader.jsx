import React from 'react';

const TDHeader = ({ trip = {} }) => {
	return (
		<div
			className='min-h-[45vh] relative flex flex-col justify-center items-center gap-y-2'
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${trip.bgImg})`,
				backgroundPosition: 'center',
			}}
		>
			<p className='text-5xl font-bold text-white'>{trip.name}</p>
			<p className='text-2xl font-semibold text-white'>
				{trip.duration} day tour
			</p>
		</div>
	);
};

export default TDHeader;
