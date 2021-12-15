import React from 'react';
import ProjectNav from '../../UI/organisms/ProjectNav'

interface ProjectHomeProps {
	test?: string;
}

const ProjectHome: React.FC<ProjectHomeProps> = (props) => {
	const { test } = props;
	return (
		<>
			<ProjectNav />
			<p>{test} ProjectHome</p>
		</>
	);
};

export default ProjectHome;
