import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import AddButton from '../molecules/AddButton';
import BoardCard from '../molecules/BoardCard';
import BoardSectionTitle from '../molecules/BoardSectionTitle';
// import ScrollX from '@/styles/ScrollX';

interface BoardSectionProps {
	cardDescData: Array<string>;
}

const BoardSection: React.FC<BoardSectionProps> = ({ cardDescData }) => {
	const [cardDesc, setCardDesc] = useState(cardDescData);
	const test = (desc: String) => {
		console.log(desc);
	};
	return (
		<Container>
			<BoardSectionTitle />
			{cardDesc.map((desc, idx) => (
				<div onDragStart={() => test('over')} onDragEnd={() => test('end')}>
					<BoardCard key={idx} desc={`${desc}`} isComplete={false} />
				</div>
			))}
			<AddButton text="Add Task" />
		</Container>
	);
};

BoardSection.defaultProps = {
	cardDescData: ['예시입니다', '예시', '예시인데', '드래그앤드롭', '라이브러리싫ㅇ ㅓ!'],
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
