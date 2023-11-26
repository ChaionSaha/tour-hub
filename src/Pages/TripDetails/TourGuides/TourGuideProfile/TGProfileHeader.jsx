import React from 'react';

const TGProfileHeader = ({ tGuide = {} }) => {
	return (
		<div className='relative flex flex-col'>
			<img src={tGuide.bgImg} alt='' className='h-[30vh] w-full object-cover' />
			<div className='self-center w-56 translate-y-[-50%] h-56 p-2 rounded-full bg-base-100'>
				<img src={tGuide.img} alt='' className='w-full h-full' />
			</div>
			<p className='text-3xl font-semibold text-center translate-y-[-250%]'>
				{tGuide.name}
			</p>
		</div>
	);
};

export default TGProfileHeader;
