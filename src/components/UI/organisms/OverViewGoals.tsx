import React, { FC } from 'react';
import Text from '../atoms/Text';
import Grid from '../atoms/Grid';

const OverViewGoals: FC = () => {
	return (
		<Grid width="100vw" kind="FC">
			<Grid>
				<Text size={'20px'} color={'#1e1f21'} weight={'600'}>
					Goals this project supports
				</Text>
			</Grid>
		</Grid>
	);
};

export default OverViewGoals;
