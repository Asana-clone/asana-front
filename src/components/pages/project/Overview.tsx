import React from 'react';
import OverviewTemp from '../../templates/OverviewTemp';

interface ProjectHomeProps {
	test?: string;
}

const ProjectHome: React.FC<ProjectHomeProps> = (props) => {
	return (
		<>
			<OverviewTemp />
		</>
	);
};

export default ProjectHome;
