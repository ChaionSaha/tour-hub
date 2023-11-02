import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const HeroSection = ({ imgLink }) => {
	const { handleSubmit, register, watch } = useForm();
	const [isActive, setIsActive] = useState(false);
	return (
		<div
			style={{ background: `url(${imgLink})` }}
			className='min-h-[75vh] flex justify-center items-center'
		>
			<div className='container relative p-10 py-12 rounded-xl bg-base-100'>
				<div className='relative w-full rounded-xl'>
					<span
						className={`absolute left-[2%] top-1/2 duration-150 ${
							isActive
								? '-translate-y-[110%] text-sm text-gray-600'
								: '-translate-y-1/2 text-xl text-black'
						} `}
					>
						Location/Tour
					</span>
					<input
						{...register('search')}
						onFocus={() => setIsActive(true)}
						onBlur={() => {
							if (watch('search')) setIsActive(true);
							else setIsActive(false);
						}}
						type='text'
						className='w-full pt-5 input input-primary input-lg focus:outline-none'
					/>
				</div>
				<button className='absolute bottom-0 px-16 text-white -translate-x-1/2 translate-y-1/2 btn btn-primary btn-lg left-1/2'>
					Search
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
