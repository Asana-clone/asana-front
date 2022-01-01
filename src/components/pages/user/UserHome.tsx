/* eslint-disable import/extensions */
import React from 'react';
import UserHomeTemp from '@/components/templates/UserHomeTemp';

interface Props {}

const UserHome: React.FC<Props> = () => {
	const dummyProjects = [
		{
			name: 'a',
			members: [
				{ nickName: 'ky', role: 'FE' },
				{ nickName: 'ky2', role: 'FE' },
				{ nickName: 'ky3', role: 'FE' },
			],
		},
		{
			name: 'a',
			members: [
				{ nickName: 'ky4', role: 'FE' },
				{ nickName: 'ky5', role: 'FE' },
				{ nickName: 'ky6', role: 'FE' },
			],
		},
	];
	return (
		<>
			<UserHomeTemp projects={dummyProjects} />
		</>
	);
};

export default UserHome;
