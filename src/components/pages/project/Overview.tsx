import React from 'react';
import OverviewTemp from '../../templates/OverviewTemp';

interface ProjectHomeProps {
	test?: string;
}

const ProjectHome: React.FC<ProjectHomeProps> = (props) => {
	const members = ['kyuung', 'jinsung', 'hwang chang', 'young woo'];
	return (
		<>
			<OverviewTemp members={members} />
		</>
	);
};

export default ProjectHome;
