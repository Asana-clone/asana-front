import ProjectNav from '../components/UI/organisms/ProjectNav';
import OverViewTextCard from '../components/UI/organisms/OverViewTextCard';
import OverViewPR from '../components/UI/organisms/OverViewPR';


export default {
	title: 'Organisms',
	component: ProjectNav,
};

export const projectNav = () => {
	return <ProjectNav />;
};

export const overViewTextCard = () => {
	return <OverViewTextCard />;
}

export const overViewPR = () => {
	return <OverViewPR />;
}
