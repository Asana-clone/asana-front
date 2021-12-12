import React from 'react';

interface UserHomeProps {
	test: string;
}

const UserHome: React.FC<UserHomeProps> = (props) => {
	const { test } = props;
	return (
		<>
			<p>{test} home</p>
		</>
	);
};

export default UserHome;
