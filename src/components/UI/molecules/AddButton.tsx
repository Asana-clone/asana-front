import React from 'react';
import styled from '@emotion/styled';
import Grid from '../atoms/Grid';
import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text';

const AddButton: React.FC = () => {
	return (
		<Grid>
			<Dotradius>
				<Icon color="#707272" size="24px" icon="add" />
			</Dotradius>
			<Text>Add member </Text>
		</Grid>
	);
};

const Dotradius = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35px;
	height: 35px;
	border: 1px dashed #6d6e6f;
	border-radius: 50%;
`;

export default AddButton;
