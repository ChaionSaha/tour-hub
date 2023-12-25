import React from 'react';

const TDHeader = ({ trip = {} }) => {
	return (
		<div
			className='min-h-[45vh] bgImg relative flex flex-col justify-center items-center gap-y-2'
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${trip.bgImg})`,
				backgroundPosition: 'center',
			}}
		>
			<p className='text-3xl font-bold text-center text-white lg:text-5xl'>
				{trip.name}
			</p>
			<p className='text-xl font-semibold text-white lg:text-2xl'>
				{trip.duration} day tour
			</p>
		</div>
	);
};

export default TDHeader;
