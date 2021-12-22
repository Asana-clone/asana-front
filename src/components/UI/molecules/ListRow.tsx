import React from 'react';
import Grid from '../atoms/Grid';
import Text from '../atoms/Text';
import Avatar from '../atoms/Avatar';
import Progress from '../atoms/Progress';
import { BsTriangle } from 'react-icons/bs';

interface ListRowProps {
	title: string;
}

const ListRow: React.FC<ListRowProps> = ({ title }) => {
	return (
		<Grid>
			<Grid>
				<Text>
					<BsTriangle />
				</Text>
				<Text>{title}</Text>
			</Grid>
			<Grid>
				<Text>Q4 FY21</Text>
				<Progress value={90} />
				<Text>94%</Text>
			</Grid>
			<Avatar color="#DDA211">jinsung</Avatar>
		</Grid>
	);
};

ListRow.defaultProps = {
	title: 'title',
};

export default ListRow;
