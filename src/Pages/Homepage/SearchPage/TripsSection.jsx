import React from 'react';
import { useNavigate } from 'react-router-dom';

const TripsSection = ({ trips = [] }) => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col px-5 py-10 lg:px-0 gap-y-5'>
			<p className='my-5 text-3xl font-bold'>Available Trips for you</p>
			{trips.map((t, i) => {
				return (
					<div
						className='flex flex-col p-4 lg:flex-row gap-x-16 gap-y-5 bg-base-100 rounded-xl'
						key={i}
					>
						<img src={t.img} alt='' />
						<div className='flex flex-col lg:w-[60%]'>
							<div className='flex items-center pb-2 mb-5 border-b-2 border-gray-300 gap-x-5'>
								<p className='text-xl font-semibold'>{t.name}</p>
								<div className='font-semibold text-white badge badge-primary badge-lg'>
									{t.rating}
								</div>
							</div>

							<div className='flex flex-col gap-y-3 lg:w-[80%] text-[#565656]'>
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
							<button
								onClick={() => {
									navigate(`/tripdetails/trip/${t.tsid}/${t.tid}`);
								}}
								className='px-16 mt-10 text-white normal-case lg:self-start btn btn-primary'
							>
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
