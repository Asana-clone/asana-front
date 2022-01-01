/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import '@storybook/addon-actions/register';
import GlobalNav from '../components/UI/organisms/GlobalNav';
import OverViewTextCard from '../components/UI/organisms/OverViewTextCard';
// import OverViewPR from '../components/UI/organisms/OverViewPR';
import BoardSection from '../components/UI/organisms/BoardSection';
import UserToolTip from '../components/UI/organisms/UserToolTip';

export default {
	title: 'Organisms',
	component: OverViewTextCard,
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
			sectionName="title"
			id={1}
			tasks={['예시입니다', '예시', '예시인데', '드래그앤드롭', '라이브러리싫ㅇ ㅓ!']}
		/>
	);
};
export const userToolTip = () => {
	return (
		<UserToolTip
			nickName="kyuung"
			email="kyuungah@gamil.com"
			department="취업시켜주세요회사이름은열글자?"
			role="FEdev"
		/>
	);
};
