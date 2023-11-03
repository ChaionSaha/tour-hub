import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './EntryPage.scss';

const BlogSection = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		const run = async () => {
			const { data } = await axios('/blogs.json');
			setBlogs(data);
		};
		run().catch((err) => toast.error(err.message));
	}, []);
	return (
		<div className='container mt-20'>
			<p className='text-3xl font-bold'>Related blogs for you</p>
			<div className='grid grid-cols-3 gap-3 mt-10'>
				{blogs &&
					blogs.map((b, i) => {
						return (
							<div
								key={i}
								className='flex flex-col cursor-pointer blog justify-end relative min-h-[25vh] p-7 rounded-xl overflow-hidden'
							>
								<div className='flex flex-col  z-[100] blog-text'>
									<p className='text-xl font-bold'>{b.name}</p>
									<p className='w-3/4 text-sm'>{b.shortDescription}</p>
								</div>
								<div className='absolute top-0 left-0 h-full w-full bg-[rgba(48,48,48,0.3)] z-[10]'></div>
								<div
									className='absolute top-0 left-0 h-full w-full z-[1] blog-img'
									style={{
										background: `url(${b.shortImg})`,
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
									}}
								></div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default BlogSection;
