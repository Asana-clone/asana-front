/* eslint-disable import/extensions */
import React from 'react';
import { gql, useReactiveVar } from '@apollo/client';
import { isModalVar } from '@/apollo/localStorage';

interface UserHomeProps {
	test: string;
}

const UserHome: React.FC<UserHomeProps> = (props) => {
	const modalState = useReactiveVar(isModalVar);
	return (
		<>
			<p>{`${modalState}`}</p>
			<button onClick={() => console.log(modalState)}>테스트버튼</button>
		</>
	);
};

export default UserHome;
