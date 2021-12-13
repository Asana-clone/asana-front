import Avatar from '../components/UI/atoms/Avatar';
import Grid from '../components/UI/atoms/Grid';

export default {
	title: 'Atom',
	component: Avatar,
};

export const avatar = () => {
	return <Avatar nickname={'kyuung'} />;
};

export const grid = () => {
	return <Grid>ㅇ_ㅇb</Grid>;
}

