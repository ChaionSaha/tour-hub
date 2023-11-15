import React from 'react';

const TripsSection = ({ trips = [] }) => {
	return (
		<div className='flex flex-col py-10 gap-y-5'>
			<p className='my-5 text-3xl font-bold'>Available Trips for you</p>
			{trips.map((t, i) => {
				return (
					<div className='flex p-4 gap-x-16 bg-base-100 rounded-xl' key={i}>
						<img src={t.img} alt='' />
						<div className='flex flex-col w-[60%]'>
							<div className='flex items-center pb-2 mb-5 border-b-2 border-gray-300 gap-x-5'>
								<p className='text-xl font-semibold'>{t.name}</p>
								<div className='font-semibold text-white badge badge-primary badge-lg'>
									{t.rating}
								</div>
							</div>

							<div className='flex flex-col gap-y-3 w-[80%] text-[#565656]'>
								<div className='flex gap-x-5'>
									<p className='text-xl '>
										<i className='bi bi-geo-alt'></i>
									</p>
									<p>{t.transport}</p>
								</div>
								<div className='flex gap-x-5'>
									<p className='text-xl '>
										<i className='bi bi-box-seam'></i>
									</p>
									<p>{t.special}</p>
								</div>
							</div>
							<button className='self-start px-16 mt-10 text-white normal-case btn btn-primary'>
								View Details
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TripsSection;
