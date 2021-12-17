import React from 'react';
import Grid from '../UI/atoms/Grid';
import AddButton from '../UI/molecules/AddButton';
import BoardFilter from '../UI/organisms/BoardFilter';
import BoardSection from '../UI/organisms/BoardSection';
import ProjectNav from '../UI/organisms/ProjectNav';

interface BoardTempProps {}

const BoardTemp: React.FC<BoardTempProps> = () => {
	return (
		<>
			<ProjectNav />
			<BoardFilter completed={1} />
			<Grid position="start" positionSub="start">
				<BoardSection />
				<BoardSection />
				<BoardSection />
				<BoardSection />
				<AddButton text="Add section" />
			</Grid>
		</>
	);
};

export default BoardTemp;
