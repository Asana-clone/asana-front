import React from 'react';
import ProjectNav from '../UI/organisms/ProjectNav';
import OverViewTextCard from '../UI/organisms/OverViewTextCard';
import OverviewPR from '../UI/organisms/OverViewPR';
import OverViewGoals from '../UI/organisms/OverViewGoals';

const OverviewTemp = () => {
	return (
		<>
			<ProjectNav />
			<OverViewTextCard />
			<OverviewPR />
			<OverViewGoals />
		</>
	);
};

export default OverviewTemp;
