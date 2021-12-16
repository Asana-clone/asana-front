import Avatar from '../components/UI/atoms/Avatar';
import Text from '../components/UI/atoms/Text';
import Grid from '../components/UI/atoms/Grid';
import ProjectAvatar from '../components/UI/atoms/ProjectAvatar';
import InputFocus from '../components/UI/atoms/InputFocus';

export default {
	title: 'Atom',
	component: Avatar,
};

export const avatar = () => {
	return <Avatar nickname={'kyuung'} color={'#Ddf967'} />;
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

export const projectAvatar = () => {
	return <ProjectAvatar onClick={() => {}} />;
};

export const inputFocus = () => {
	return <InputFocus />;
};
