import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

const HotelsSection = ({ hotels = [], spotName }) => {
	return (
		<div className='flex flex-col py-10 gap-y-5 '>
			<p className='my-5 text-3xl font-bold'>
				Recommended Hotels Near {spotName}
			</p>
			<div className='grid gap-5 lg:grid-cols-4'>
				{hotels &&
					hotels.map((h, i) => {
						return (
							<div
								key={i}
								className='flex flex-col p-3 bg-base-100 rounded-3xl'
							>
								<div className='relative'>
									<img src={h.img} alt='' className='w-full ' />
									<div className='absolute top-[3%] left-[3%] bg-[#fdfdfd96] rounded-lg p-2 gap-x-1 items-center flex'>
										<StarIcon className='w-4 text-[#ED7D2B]' />
										<p>{h.rating}</p>
									</div>
								</div>
								<p
									className='mt-5 mb-2 text-xl font-semibold cursor-pointer hover:underline'
									onClick={() => {
										window.open(`${h.website}`, '_blank');
									}}
								>
									{h.name}
								</p>
								<p className='mb-2 text-sm'>{h.address}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default HotelsSection;
