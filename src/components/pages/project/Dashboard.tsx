/* eslint-disable import/extensions */
import DashboardTemp from '@/components/templates/DashboardTemp';
import React from 'react';

interface Props {
	test?: string;
}

const Dashboard: React.FC<Props> = (props) => {
	const members = ['kyuung', 'jinsung', 'hwang chang', 'young woo'];
	return (
		<>
			<DashboardTemp members={members} />
		</>
	);
};

export default Dashboard;
