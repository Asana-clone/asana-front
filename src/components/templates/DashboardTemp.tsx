import React from 'react';
import ProjectNameBar from '../UI/molecules/ProjectNameBar';

interface Props {
	members: Array<string>;
}

const DashboardTemp: React.FC<Props> = ({ members }) => {
	return (
		<>
			<ProjectNameBar color="yellow" name="clone" members={members} />
		</>
	);
};

export default DashboardTemp;
