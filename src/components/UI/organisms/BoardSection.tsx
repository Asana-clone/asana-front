import styled from '@emotion/styled';
import AddButton from '../molecules/AddButton';
import BoardCard from '../molecules/BoardCard';
import BoardSectionTitle from '../molecules/BoardSectionTitle';

interface BoardSectionProps {}

const BoardSection: React.FC<BoardSectionProps> = () => {
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
	overflow-y: scroll;
`;

export default BoardSection;
