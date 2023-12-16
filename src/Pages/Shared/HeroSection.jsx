import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ imgLink, setLoading }) => {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			search: '',
		},
	});
	const [isActive, setIsActive] = useState(false);
	const navigate = useNavigate();

	const handleSearch = (data) => {
		const searchParam = encodeURI(
			data.search.toLowerCase().split(' ').join('-')
		);
		setLoading(true);
		navigate(`/search?q=${searchParam}`);
	};

	return (
		<div
			style={{ background: `url(${imgLink})` }}
			className='min-h-[75vh] flex justify-center items-center px-5 lg:px-0'
		>
			<div className='container relative flex flex-col p-5 lg:p-10 lg:py-12 rounded-xl bg-base-100'>
				<div className='relative w-full rounded-xl'>
					<label
						htmlFor='search'
						className={`absolute left-[2%] top-1/2 duration-150 z-[10] ${
							isActive
								? '-translate-y-[110%] text-sm text-gray-600'
								: '-translate-y-1/2 text-xl text-black'
						} `}
					>
						Location/Tour
					</label>
					<input
						id='search'
						{...register('search', { required: true })}
						onFocus={() => setIsActive(true)}
						onBlur={() => {
							if (watch('search')) setIsActive(true);
							else setIsActive(false);
						}}
						type='text'
						className='w-full pt-5  input input-primary text-black font-medium input-lg text-xl focus:outline-none z-[100]'
					/>
				</div>
				<button
					onClick={() => handleSubmit(handleSearch)()}
					className='lg:absolute self-center bottom-0 lg:px-16 px-10 py-3 lg:py-5 font-semibold text-white lg:-translate-x-1/2 active:scale-[0.9] duration-150 lg:translate-y-1/2 bg-primary rounded-xl left-1/2 mt-3 lg:mt-0'
				>
					Search
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
