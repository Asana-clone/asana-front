import React from 'react';
import styled from '@emotion/styled';
import Grid from '../atoms/Grid';
import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text';

interface AddButtonProps {
	type?: string;
	text?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ type, text }) => {
	return (
		<Grid>
			{type === 'radius' ? (
				<>
					<Dotradius>
						<Icon color="#707272" size="24px" icon="add" />
					</Dotradius>
					<Text color="#6d6e6f">{text}</Text>
				</>
			) : (
				''
			)}
			{type === 'default' ? (
				<>
					<Icon color="#707272" size="24px" icon="add" />
					<Text color="#6d6e6f">{text}</Text>
				</>
			) : (
				''
			)}
		</Grid>
	);
};

AddButton.defaultProps = {
	text: 'Add Member',
	type: 'default',
};

const Dotradius = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35px;
	height: 35px;
	border: 1px dashed #6d6e6f;
	border-radius: 50%;
	margin-right: 10px;
`;

export default AddButton;
