import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomTitle from '../../Shared/CustomTitle';

const SearchPage = () => {
	const [searchParams] = useSearchParams();
	useEffect(() => {
		console.log(searchParams.get('q'));
	}, [searchParams]);
	return (
		<div>
			<CustomTitle title={'Search'} />
		</div>
	);
};

export default SearchPage;
