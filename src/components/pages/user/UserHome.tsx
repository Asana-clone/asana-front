/* eslint-disable import/extensions */
import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { isModalVar } from '@/apollo/localStorage';

interface Props {
	test: string;
}

const UserHome: React.FC<Props> = () => {
	const modalStatus = useReactiveVar(isModalVar);
	return (
		<>
			<p>{`${modalStatus}`}</p>
		</>
	);
};

export default UserHome;
