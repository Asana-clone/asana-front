import styled from '@emotion/styled';
import React from 'react';
import Grid from '../atoms/Grid';
import AddButton from './AddButton';

interface Props {}

const OptionModal: React.FC<Props> = () => {
	return (
		<>
			<Pos>
				<Grid
					kind="FC"
					position="start"
					width="16.8rem"
					height="9rem"
					border="1px solid lightgray"
					isRadius={true}
					padding="0.2rem 0.2rem"
					background="#fff"
				>
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
			</Pos>
		</>
	);
};

const Pos = styled.div`
	position: absolute;
	z-index: 1;
	top: 2rem;
	right: 0;
`;

export default OptionModal;
