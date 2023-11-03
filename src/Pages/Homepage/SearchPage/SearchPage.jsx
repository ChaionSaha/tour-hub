import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomTitle from '../../Shared/CustomTitle';

const SearchPage = () => {
	const [searchParams] = useSearchParams();
	const [trips, setTrips] = useState([]);
	const [loading, setLoading] = useState(true);
	const [img, setImg] = useOutletContext();
	const searchRef = useRef(null);

	useEffect(() => {
		const run = async () => {
			const { data } = await axios(
				`${
					import.meta.env.VITE_serverLink
				}/getTripBySearch?q=${searchParams.get('q')}`
			);
			setTrips(data);
			setLoading(false);

			window.scrollTo({
				top: searchRef.current?.offsetTop,
				behavior: 'smooth',
			});

			await axios(
				`${
					import.meta.env.VITE_serverLink
				}/getHeroImageBySearch?q=${searchParams.get('q')}`
			).then((data) => {
				setImg(data.data.bgImg ? data.data.bgImg : img);
			});
		};
		run().catch((err) => toast.error(err.message));
	}, [searchParams]);

	return (
		<div className='bg-base-200' ref={searchRef}>
			<div className='container'>
				<CustomTitle title={'Search'} />
				{loading ? (
					<div className='flex items-center justify-center w-full h-full py-20 border'>
						<span className='loading loading-spinner loading-lg'></span>
					</div>
				) : (
					<div></div>
				)}
				{trips && trips.length === 0 ? (
					<p className='my-20 text-2xl font-medium text-center bg-base-100'>
						Sorry. No trips available now
					</p>
				) : (
					<div className='flex flex-col py-10 gap-y-5'>
						<p className='my-5 text-3xl font-bold'>Available Trips for you</p>
						{trips.map((t, i) => {
							return (
								<div
									className='flex p-4 gap-x-16 bg-base-100 rounded-xl'
									key={i}
								>
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
				)}
			</div>
		</div>
	);
};

export default SearchPage;
