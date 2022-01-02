import React from 'react';
import Grid from '../atoms/Grid';
import InputFocus from '../atoms/InputFocus';
import { BiDotsHorizontalRounded, BiPlus } from 'react-icons/bi';

interface Props {
	sectionName: string;
	onClickPlus: () => void;
	onClickDots: () => void;
}

const BoardSectionTitle: React.FC<Props> = ({ sectionName, onClickPlus, onClickDots }) => {
	const handlePlusBtn = (): void => onClickPlus();
	const handleDotBtn = (): void => onClickDots();

	return (
		<>
			<Grid position="space-between" width="17rem">
				<InputFocus sectionName={`${sectionName}`} />
				<Grid width="3.8rem" position="space-between">
					<BiPlus onClick={handlePlusBtn} size={'1.5rem'} style={{ cursor: 'pointer' }} />
					<BiDotsHorizontalRounded
						onClick={handleDotBtn}
						style={{ cursor: 'pointer' }}
						size={'1.5rem'}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default BoardSectionTitle;
