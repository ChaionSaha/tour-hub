import React from 'react';
import { Helmet } from 'react-helmet-async';

const CustomTitle = ({ title }) => {
	return (
		<Helmet>
			<title>{`${title} - Tour Hub`}</title>
		</Helmet>
	);
};

export default CustomTitle;
