import React from 'react';
import Avatar from '../atoms/Avatar';
import Grid from '../atoms/Grid';
import ProjectAvatar from '../atoms/ProjectAvatar';
import Text from '../atoms/Text';

interface ProjectNameBarProps {
	name: string;
	color: string;
	members: Array<string>;
}

const ProjectNameBar: React.FC<ProjectNameBarProps> = ({ color, name, members }) => {
	return (
		<>
			<Grid width="32rem" position="space-between" margin="1rem 0">
				<Grid width="9rem" position="space-between">
					<ProjectAvatar size="4rem" background={color} onClick={() => {}} />
					<Text weight="600" size="1.5rem">
						{name}
					</Text>
				</Grid>
				<Grid width="10rem">
					{members?.map((member) => (
						<Avatar color="green">{member}</Avatar>
					))}
				</Grid>
			</Grid>
		</>
	);
};

ProjectNameBar.defaultProps = {
	members: ['kyuung', 'jinsung', 'hwang chang', 'young woo'],
};

export default ProjectNameBar;
