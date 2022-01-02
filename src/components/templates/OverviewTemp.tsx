import React from 'react';
import ProjectNav from '../UI/organisms/ProjectNav';
import ProjectNameBar from '../UI/molecules/ProjectNameBar';
import OverViewTextCard from '../UI/organisms/OverViewTextCard';
import OverviewPR from '../UI/organisms/OverViewPR';
import OverViewGoals from '../UI/organisms/OverViewGoals';

interface Props {
	members: Array<string>;
}

const OverviewTemp: React.FC<Props> = ({ members }) => {
	return (
		<>
			<ProjectNameBar color="yellow" name="clone" members={members} />
			<ProjectNav />
			<OverViewTextCard />
			<OverviewPR />
			<OverViewGoals />
		</>
	);
};

export default OverviewTemp;
