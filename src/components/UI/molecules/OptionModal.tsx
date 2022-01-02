import React from 'react';
import Grid from '../atoms/Grid';
import AddButton from './AddButton';

interface Props {
	isModal: boolean;
}

const OptionModal: React.FC<Props> = ({ isModal }) => {
	return (
		<>
			{isModal && (
				<Grid kind="FC" position="start" width="16rem">
					<AddButton
						iconType="plus"
						text="Rename section"
						position="start"
						onClick={() => {}}
					/>
					<AddButton
						iconType="plus"
						text="Add section"
						position="start"
						onClick={() => {}}
					/>
					<AddButton
						iconType="plus"
						text="Delete section"
						position="start"
						onClick={() => {}}
					/>
				</Grid>
			)}
		</>
	);
};

export default OptionModal;
