import React from 'react';
import Grid from '../atoms/Grid';
import InputFocus from '../atoms/InputFocus';
import { BiDotsHorizontalRounded, BiPlus } from 'react-icons/bi';
interface TitleProps {}

const BoardSectionTitle: React.FC<TitleProps> = () => {
	return (
		<>
			<Grid position="space-between" width="17rem">
				<InputFocus />
				<Grid width="3.8rem" position="space-between">
					<BiPlus size={'1.5rem'} style={{ cursor: 'pointer' }} />
					<BiDotsHorizontalRounded style={{ cursor: 'pointer' }} size={'1.5rem'} />
				</Grid>
			</Grid>
		</>
	);
};

export default BoardSectionTitle;
