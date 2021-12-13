import Avatar from '../components/UI/atoms/Avatar';
import Text from '../components/UI/atoms/Text';
import Grid from '../components/UI/atoms/Grid';

export default {
	title: 'Atom',
	component: Avatar,
};

export const avatar = () => {
	return <Avatar nickname={'kyuung'} color={'#Ddf967'} />;
};

export const grid = () => {
	return <Grid>ㅇ_ㅇb</Grid>;
};

export const text = () => {
	return <Text color={'#Ddf967'}>text</Text>;
};
