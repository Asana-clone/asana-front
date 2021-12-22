import styled from '@emotion/styled';
import React from 'react';
import AddButton from '../UI/molecules/AddButton';
import ProjectNameBar from '../UI/molecules/ProjectNameBar';
import BoardFilter from '../UI/organisms/BoardFilter';
import BoardSection from '../UI/organisms/BoardSection';
import ProjectNav from '../UI/organisms/ProjectNav';

interface BoardTempProps {}

const BoardTemp: React.FC<BoardTempProps> = () => {
	return (
		<>
			<div>
				<ProjectNameBar
					color="yellow"
					name="clone"
					members={['kyuung', 'jinsung', 'hwang chang', 'young woo']}
				/>
				<ProjectNav />
				<BoardFilter completed={1} />
				<Container>
					<AddButton text="Add section" />
				</Container>
			</div>
		</>
	);
};

const Container = styled(`section`)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20rem, auto));
	scroll-snap-type: x mandatory;
	grid-auto-flow: column;
	overflow-x: auto;
	place-items: start center;
`;

export default React.memo(BoardTemp);
