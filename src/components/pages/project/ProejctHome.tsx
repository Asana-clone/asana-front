import React from 'react';

interface ProjectHomeProps {
	test: string;
}

const ProjectHome: React.FC<ProjectHomeProps> = (props) => {
	const { test } = props;
	return (
		<>
			<p>{test} ProjectHome</p>
		</>
	);
};

export default ProjectHome;
