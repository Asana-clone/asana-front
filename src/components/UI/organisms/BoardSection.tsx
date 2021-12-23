import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import AddButton from '../molecules/AddButton';
import BoardCard from '../molecules/BoardCard';
import BoardSectionTitle from '../molecules/BoardSectionTitle';

interface Props {
	tasks: Array<string>;
	sectionName: string;
	id: number;
}

const BoardSection: React.FC<Props> = ({ tasks, sectionName, id }) => {
	const [cardDesc, setCardDesc] = useState(tasks);

	return (
		<Container>
			<BoardSectionTitle sectionName={sectionName} />
			{cardDesc.map((desc, idx) => (
				<BoardCard id={id} key={idx} desc={`${desc}`} isComplete={false} />
			))}
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
