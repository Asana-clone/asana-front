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
						iconType="rename"
						text="Rename section"
						position="start"
						onClick={() => {}}
					/>
					<AddButton
						iconType="addSection"
						text="Add section"
						position="start"
						onClick={() => {}}
					/>
					<AddButton
						iconType="delete"
						text="Delete section"
						position="start"
						lineColor="red"
						onClick={() => {}}
					/>
				</Grid>
			)}
		</>
	);
};

export default OptionModal;
