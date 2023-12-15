import React from 'react';

const BlogDetailsHeader = ({ img, title }) => {
	return (
		<div
			style={{ background: `url(${img})` }}
			className='min-h-[50vh] flex justify-center items-center px-5 lg:px-0'
		>
			<div className='container w-[70%] text-white font-bold text-center text-5xl'>
				{title}
			</div>
		</div>
	);
};

export default BlogDetailsHeader;
