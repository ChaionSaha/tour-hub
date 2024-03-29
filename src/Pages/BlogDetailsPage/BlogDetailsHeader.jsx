import React from 'react';

const BlogDetailsHeader = ({ img, title }) => {
	return (
		<div
			style={{ background: `url(${img})` }}
			className='min-h-[50vh] bgImg flex justify-center items-center px-5 lg:px-0'
		>
			<div className='container px-5 lg:px-0 lg:w-[70%] text-white font-bold text-center text-4xl lg:text-5xl'>
				{title}
			</div>
		</div>
	);
};

export default BlogDetailsHeader;
