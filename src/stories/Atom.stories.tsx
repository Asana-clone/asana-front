import Avatar from '../components/UI/atoms/Avatar';
import Text from '../components/UI/atoms/Text';
import Grid from '../components/UI/atoms/Grid';
import InputFocus from '../components/UI/atoms/InputFocus';
import Progress from '../components/UI/atoms/Progress';
import TextArea from '../components/UI/atoms/TextArea';
import Line from '../components/UI/atoms/Line';
import Icons from '../components/UI/atoms/Icons';

export default {
	title: 'Atom',
	component: Avatar,
};

export const avatar = () => {
	return <Avatar color={'#Ddf967'}>kyuung</Avatar>;
};

export const grid = () => {
	return (
		<Grid kind={'FC'} position={'space-between'} width="500px" height="500px">
			<p>aaa</p>
			<p>aaa</p>
			<p>aaa</p>
		</Grid>
	);
};

export const text = () => {
	return <Text align="left">ddddd</Text>;
};

export const inputFocus = () => {
	return <InputFocus sectionName="abc" />;
};

export const progress = () => {
	return <Progress value={60} />;
};

export const textArea = () => {
	return <TextArea placeholder="palceholder!!" />;
};

export const line = () => {
	return <Line />;
};

export const icons = () => {
	return <Icons color="black" typeName="plus" />;
};
