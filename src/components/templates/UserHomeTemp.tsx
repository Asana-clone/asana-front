import React from 'react';
import Grid from '../UI/atoms/Grid';
import Line from '../UI/atoms/Line';
import ProjectAvatar from '../UI/atoms/ProjectAvatar';
import Text from '../UI/atoms/Text';

interface Members {
	nickName: string;
	role: string;
}

interface Project {
	name: string;
	members: Members[];
}

interface Props {
	projects: Project[];
}

const UserHomeTemp: React.FC<Props> = ({ projects }) => {
	const [hoverStatus, setHoverStatus] = React.useState(false);
	return (
		<>
			<Grid kind="FC" position="start" padding="5rem 0">
				<Text width="40rem" weight="600" align="left" size="1.8rem" margin="1rem 0">
					Projects
				</Text>
				<Line size="2px" width="40rem" />
				<Grid width="40rem" position="start">
					{projects.map((project) => (
						<ProjectAvatar members={project.members} margin="1.5rem">
							{project.name.slice(0, 2)}
						</ProjectAvatar>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default UserHomeTemp;
