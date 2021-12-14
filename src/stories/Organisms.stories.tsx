import GlobalNav from '../components/UI/organisms/GlobalNav';
import ProjectNav from '../components/UI/organisms/ProjectNav';

export default {
	title: 'Organisms',
	component: ProjectNav,
};

export const projectNav = () => {
	return <ProjectNav />;
};

export const globalNav = () => {
	return <GlobalNav />;
};
