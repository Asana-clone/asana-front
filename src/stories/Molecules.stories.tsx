import NavMenu from '../components/UI/molecules/NavMenu';
import AddButton from '../components/UI/molecules/AddButton';
import BoardCard from '../components/UI/molecules/BoardCard';
import MemberCard from '../components/UI/molecules/MemberCard';
import ListRow from '../components/UI/molecules/ListRow';
import Number from '../components/UI/molecules/dashboard/Number';
import BarGraph from '../components/UI/molecules/dashboard/BarGraph';
import DonutGraph from '../components/UI/molecules/dashboard/DonutGraph';
import ProjectToolTip from '../components/UI/molecules/ProjectToolTip';
import OptionModal from '../components/UI/molecules/OptionModal';

export default {
	title: 'Molecules',
	component: NavMenu,
};

export const addButton = () => {
	return <AddButton onClick={() => {}} text="add!" />;
};

export const optionModal = () => {
	return <OptionModal />;
};

export const boardCard = () => {
	return (
		<BoardCard
			desc="아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나"
			isComplete={false}
			assignee="kyuung"
			id={1}
		/>
	);
};

export const memberCard = () => {
	return <MemberCard name="jinsung" text="Project Owner" color="#DDA211" />;
};

export const listRow = () => {
	return <ListRow title="title" value={85} />;
};

export const number = () => {
	return <Number title="Completed tasks" value="Task count" data={8} />;
};

export const barGraph = () => {
	return <BarGraph />;
};

export const donutGraph = () => {
	return <DonutGraph />;
};

export const projectToolTip = () => {
	return (
		<ProjectToolTip
			members={[
				{ nickName: 'KY', role: 'FEFEFE' },
				{ nickName: 'JS', role: 'FEFEFE' },
				{ nickName: 'HC', role: 'BE' },
				{ nickName: 'YW', role: 'BE' },
			]}
		/>
	);
};
