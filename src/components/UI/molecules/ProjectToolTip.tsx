import React from 'react';
import styled from '@emotion/styled';
import Grid from '../atoms/Grid';
import Text from '../atoms/Text';

interface MemberInfo {
	nickName: string;
	role: string;
}

interface Props {
	members: MemberInfo[];
}

const ProjectToolTip: React.FC<Props> = ({ members }) => {
	return (
		<>
			<ToolTip>
				<Grid
					isRadius={true}
					width="8rem"
					kind="FC"
					border="1px solid lightgray"
					padding="1rem"
					margin="0.1rem 0"
				>
					{members.map((member, idx) => (
						<Grid key={idx} width="inherit" position="space-between">
							<Text size="1.2rem" weight="600" margin="0.5rem 1rem 0.5rem 0">
								{member.nickName}
							</Text>
							<Text>{member.role}</Text>
						</Grid>
					))}
				</Grid>
			</ToolTip>
		</>
	);
};

const ToolTip = styled.div`
	position: absolute;
	top: 5.2rem;
`;

export default ProjectToolTip;
