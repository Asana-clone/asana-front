import BoardTemp from '../components/templates/BoardTemp';
import OverviewTemp from '../components/templates/OverviewTemp';

export default {
	title: 'Templates',
	component: OverviewTemp,
};

export const overviewTemp = () => {
	return <OverviewTemp />;
};

export const boardTemp = () => {
	return <BoardTemp />;
};
