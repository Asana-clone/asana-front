import React from 'react';
import Text from '../atoms/Text';
import Grid from '../atoms/Grid';
import AddButton from '../molecules/AddButton';
import MemberCard from '../molecules/MemberCard';

const OverViewPR: React.FC = () => {
	return (
		<Grid kind="FC">
			<p>
				<Text size={'20px'} color={'#1e1f21'} weight={'600'}>
					Project roles
				</Text>
			</p>
			<Grid position="start">
				<AddButton onClick={() => {}} text="Add member" isDotradius={true} />
				<MemberCard name="jinsung" text="Project Owner" color="#DDA211" />
				<MemberCard name="kyuung" text="+ Add role" color="#fc989a" />
			</Grid>
		</Grid>
	);
};

export default OverViewPR;
