import React from 'react';
import Grid from '../../atoms/Grid';
import Text from '../../atoms/Text';

interface Props {
	title: string;
	data: number;
	value: string;
}

const Number: React.FC<Props> = ({ title, data, value }) => {
	return (
		<>
			<Grid kind="FC" border="1px solid #EDEAE9" width="15rem" padding="1rem" isRadius={true}>
				<Text size="1rem" weight="700" margin="0 0 1rem 0">
					{title}
				</Text>
				<Text size="1.8rem" weight="700" margin="0 0 1rem 0">
					{data}
				</Text>
				<Text size="0.9rem" color="#d7dce0">
					{value}
				</Text>
			</Grid>
		</>
	);
};

export default Number;
