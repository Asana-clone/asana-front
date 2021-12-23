import React from 'react';
import { AiOutlineMail, AiOutlineDesktop } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import Grid from '../atoms/Grid';
import Text from '../atoms/Text';

interface Props {
	nickName: string;
	email: string;
	department?: string;
	role?: string;
}

const UserToolTip: React.FC<Props> = ({ nickName, email, department, role }) => {
	return (
		<>
			<Grid kind="FC" width="20rem" border="1px solid #6D6E6F" padding="1rem">
				<Text size="2rem" margin="0 0 1.3rem 0">
					{nickName}
				</Text>
				<Grid margin="0.5rem 0">
					<AiOutlineDesktop size={'1.3rem'} color="#6D6E6F" />
					<Text margin="0 0 0 1rem" color="#6D6E6F">
						{role}
					</Text>
				</Grid>
				<Grid margin="0.5rem 0">
					<HiOutlineOfficeBuilding size={'1.3rem'} color="#6D6E6F" />
					<Text margin="0 0 0 1rem" color="#6D6E6F">
						{department}
					</Text>
				</Grid>
				<Grid margin="0.5rem 0">
					<AiOutlineMail size={'1.3rem'} color="#6D6E6F" />
					<Text margin="0 0 0 1rem" color="#6D6E6F">
						{email}
					</Text>
				</Grid>
			</Grid>
		</>
	);
};

export default UserToolTip;
