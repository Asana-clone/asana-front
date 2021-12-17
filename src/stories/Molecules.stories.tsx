import NavMenu from '../components/UI/molecules/NavMenu';
import AddButton from '../components/UI/molecules/AddButton';
import BoardCard from '../components/UI/molecules/BoardCard';
import MemberCard from '../components/UI/molecules/MemberCard';

export default {
	title: 'Molecules',
	component: NavMenu,
};

export const navMenu = () => {
	return <NavMenu menu={'menu'} />;
};

export const addButton = () => {
	return <AddButton text="add!" />;
};

export const boardCard = () => {
	return (
		<BoardCard
			desc="아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나"
			isComplete={false}
			assignee="kyuung"
		/>
	);
};

export const memberCard = () => {
	return <MemberCard name="jinsung" text="Project Owner" color="#DDA211" />;
};
