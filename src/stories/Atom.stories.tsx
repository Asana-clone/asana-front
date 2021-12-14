import Avatar from '../components/UI/atoms/Avatar';
import Text from '../components/UI/atoms/Text';
import Grid from '../components/UI/atoms/Grid';
import GridTest from '../components/UI/atoms/GridTest';

export default {
	title: 'Atom',
	component: Avatar,
};

export const avatar = () => {
	return <Avatar nickname={'kyuung'} color={'#Ddf967'} />;
};

export const grid = () => {
	return <Grid>Grid</Grid>;
};

export const text = () => {
	return <Text color={'#Ddf967'} fontSize={'16px'}>text</Text>;
};

export const gridTest = () => {
	return <GridTest>GridTest</GridTest>;
};
