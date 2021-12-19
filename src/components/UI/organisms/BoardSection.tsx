import React from 'react';
import styled from '@emotion/styled';
import AddButton from '../molecules/AddButton';
import BoardCard from '../molecules/BoardCard';
import BoardSectionTitle from '../molecules/BoardSectionTitle';
// import ScrollX from '@/styles/ScrollX';

interface BoardSectionProps {
	[index: number]: string;
}

const BoardSection: React.FC<BoardSectionProps> = () => {
	let descArray: BoardSectionProps;

	return (
		<Container>
			<BoardSectionTitle />
			<BoardCard desc="card1" isComplete={false} />
			<BoardCard desc="card2" isComplete={false} />
			<BoardCard desc="card3" isComplete={false} />
			<BoardCard desc="card4" isComplete={false} />
			<BoardCard desc="card5" isComplete={false} />
			<BoardCard desc="card3" isComplete={false} />
			<BoardCard desc="card4" isComplete={false} />
			<BoardCard desc="card5" isComplete={false} />
			<AddButton text="Add Task" />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	width: 18.3rem;
	flex-direction: column;
	justify-content: start;
	align-itmes: center;
	max-height: 100vh;
	margin-right: 1.5rem;
	overflow-y: scroll;
`;

export default React.memo(BoardSection);
