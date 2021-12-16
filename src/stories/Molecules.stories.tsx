import NavMenu from '../components/UI/molecules/NavMenu';
import AddButton from '../components/UI/molecules/AddButton';
import BoardCard from '../components/UI/molecules/BoardCard';

export default {
	title: 'Molecules',
	component: NavMenu,
};

export const navMenu = () => {
	return <NavMenu menu={'menu'} />;
};

export const addButton = () => {
	return <AddButton />;
};

export const boardCard = () => {
	return (
		<BoardCard
			desc="아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나아사나"
			isComplete={false}
		/>
	);
};
