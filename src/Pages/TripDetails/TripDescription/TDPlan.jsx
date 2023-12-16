import React from 'react';

const TDPlan = ({ trip = {} }) => {
	return (
		<>
			{trip && trip.days && (
				<div className='container px-5 lg:px-0'>
					<div className='flex flex-col p-5 py-16 mt-20 lg:p-10 gap-y-10 bg-base-100 rounded-xl'>
						<p className='text-3xl font-bold'>Trips Plan:</p>

						<div className='flex flex-col gap-y-3'>
							<p className='text-xl font-bold'>Tour Duration </p>
							<p>
								{trip.duration} Days{' '}
								{trip.duration - 1 !== 0 ? `${trip.duration - 1} Nights` : ''}
							</p>
						</div>
						<div className='flex flex-col gap-y-10 lg:w-[80%]'>
							{trip.days.map((d, i) => {
								return (
									<div key={i} className='flex flex-col gap-y-3'>
										<p className='text-xl font-bold'>Day {d.did} </p>
										<p>{d.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TDPlan;
