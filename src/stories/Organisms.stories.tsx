/* eslint-disable import/no-extraneous-dependencies */
import '@storybook/addon-actions/register';
import GlobalNav from '../components/UI/organisms/GlobalNav';
import ProjectNav from '../components/UI/organisms/ProjectNav';
import OverViewTextCard from '../components/UI/organisms/OverViewTextCard';
// import OverViewPR from '../components/UI/organisms/OverViewPR';
import BoardSection from '../components/UI/organisms/BoardSection';

export default {
	title: 'Organisms',
	component: ProjectNav,
};

export const projectNav = () => {
	return <ProjectNav />;
};

export const overViewTextCard = () => {
	return <OverViewTextCard />;
};

// export const overViewPR = () => {
// 	return <OverViewPR />;
// };
export const globalNav = () => {
	return <GlobalNav />;
};
export const boardSection = () => {
	return (
		<BoardSection
			cardDescData={['예시입니다', '예시', '예시인데', '드래그앤드롭', '라이브러리싫ㅇ ㅓ!']}
		/>
	);
};
