import React from 'react';

const TGProfileDetails = ({ tGuide = {} }) => {
	return (
		<>
			{tGuide.details && (
				<div className='container flex justify-between'>
					<div className='flex flex-col w-[60%]'>
						<p className='mb-3 text-xl font-semibold'>Experience</p>
						<p>{tGuide.details?.bio}</p>

						<div className='flex items-center mt-5 text-lg gap-x-3'>
							<p className='self-center font-semibold'>Languages:</p>
							<div className='flex gap-x-1'>
								{tGuide?.details?.languages.map((l, i) => {
									return (
										<div key={i}>
											{l.label}
											{i + 1 < tGuide.details.languages.length ? ',' : '.'}
										</div>
									);
								})}
							</div>
						</div>
						<div className='flex items-center mt-5 text-lg gap-x-3'>
							<p className='self-center font-semibold'>Currencies:</p>
							<div className='flex gap-x-1'>
								{tGuide?.details?.currencies.map((l, i) => {
									return (
										<div key={i}>
											{l.label}
											{i + 1 < tGuide.details.currencies.length ? ',' : '.'}
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className='p-5 border w-[30%] flex flex-col gap-y-10 justify-self-end bg-base-100 rounded-xl '>
						<div className='flex flex-col'>
							<p className='font-semibold'>Location</p>
							<p>{tGuide.details.location}</p>
						</div>
						<div className='flex flex-col'>
							<p className='font-semibold'>Phone Number</p>
							<p>{tGuide.details.phone}</p>
						</div>
						<div className='flex flex-col'>
							<p className='font-semibold'>Website</p>
							<p
								className='cursor-pointer hover:underline'
								onClick={() => {
									window.open(`${tGuide.details.website}`, '_blank');
								}}
							>
								{tGuide.details.website}
							</p>
						</div>
						<div className='flex flex-col'>
							<p className='font-semibold'>Email</p>
							<p>{tGuide.details.email}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TGProfileDetails;
