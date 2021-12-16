import React from 'react';
import Grid from '../atoms/Grid';
import InputFocus from '../atoms/InputFocus';
import BoardCard from '../molecules/BoardCard';

interface BoardSectionProps {}

const BoardSection: React.FC<BoardSectionProps> = () => {
	return (
		<Grid kind="FC">
			<InputFocus />
			<BoardCard desc="card1" isComplete={false} />
			<BoardCard desc="card2" isComplete={false} />
			<BoardCard desc="card3" isComplete={false} />
			<BoardCard desc="card4" isComplete={false} />
			<BoardCard desc="card5" isComplete={false} />
		</Grid>
	);
};

export default BoardSection;
