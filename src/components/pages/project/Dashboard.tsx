import React from 'react';

interface DashboardProps {
	test: string;
}

const Dashboard: React.FC<DashboardProps> = (props) => {
	const { test } = props;
	return (
		<>
			<p>{test} Board</p>
		</>
	);
};

export default Dashboard;
