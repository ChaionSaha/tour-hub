import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BlogSection from '../Homepage/EntryPage/BlogSection';
import CustomTitle from '../Shared/CustomTitle';
import BlogDetailsHeader from './BlogDetailsHeader';

const BlogDetails = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState({});
	useEffect(() => {
		const run = async () => {
			const { data } = await axios(
				`${import.meta.env.VITE_serverLink}/getBlogDetails/${id}`
			);
			console.log(data);
			setBlog(data);
		};
		run().catch((err) => toast.error(err.message));
	}, [id]);
	return (
		<div>
			<CustomTitle title={blog.name} />
			<BlogDetailsHeader img={blog.headerImg} title={blog.name} />
			<div className='container pt-16'>
				<div className='w-[60%]'>
					<ReactQuill value={blog.details} readOnly={true} theme='bubble' />
				</div>
			</div>
			<BlogSection />
		</div>
	);
};

export default BlogDetails;
