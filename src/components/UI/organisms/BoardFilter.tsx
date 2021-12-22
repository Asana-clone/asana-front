import React from 'react';
import { BiChevronDownCircle, BiFilter, BiSort } from 'react-icons/bi';
import Grid from '../atoms/Grid';
import Line from '../atoms/Line';
import BoardFilterButton from '../molecules/BoardFilterButton';

interface BoardFilterProps {
	completed: number;
}

const BoardFilter: React.FC<BoardFilterProps> = ({ completed }) => {
	return (
		<>
			<Grid position="space-between" height="2rem" margin="0 0 2rem 0">
				<p>{completed} task completed today</p>
				<Grid width="22rem" position="space-between">
					<BoardFilterButton text="All tasks">
						<BiChevronDownCircle size={'16px'} />
					</BoardFilterButton>
					<BoardFilterButton text="Filter">
						<BiFilter size={'20px'} />
					</BoardFilterButton>
					<BoardFilterButton text="Sort">
						<BiSort size={'16px'} />
					</BoardFilterButton>
				</Grid>
			</Grid>
		</>
	);
};

export default React.memo(BoardFilter);
