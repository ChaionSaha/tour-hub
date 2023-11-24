import React from 'react';
import { useNavigate } from 'react-router-dom';

const TourGuidesSection = ({ tourGuides = [] }) => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col py-10 gap-y-5'>
			<p className='my-5 text-3xl font-bold'>Available Tour Guides</p>
			<div className='grid grid-cols-4 gap-5'>
				{tourGuides &&
					tourGuides.map((t, i) => {
						return (
							<div
								key={i}
								className='flex flex-col p-5 bg-base-100 gap-y-3 rounded-2xl'
							>
								<p className='py-1 font-bold text-white px-7 bg-primary w-fit rounded-xl'>
									{t.rating}
								</p>
								<img
									src={t.img}
									className='self-center rounded-full w-44 h-44'
									alt=''
								/>
								<div className='flex flex-col w-full gap-y-1'>
									<p className='mt-5 text-xl font-semibold text-center'>
										{t.name}
									</p>
									<p className='text-center '>
										{t.experience} Years Experience
									</p>
								</div>
								<button
									className='text-white btn btn-primary'
									onClick={() => {
										navigate(`/tourguide/${t.tgid}`);
									}}
								>
									See Profile
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default TourGuidesSection;
