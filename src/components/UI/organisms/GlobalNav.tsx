import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Grid from '../atoms/Grid';
import Text from '../atoms/Text';
import NavMenu from '../molecules/NavMenu';
interface GlobalNavProps {}

const GlobalNav: React.FC<GlobalNavProps> = () => {
	return (
		<Grid background="#424244" width="17rem" height="100vh" kind="FC" position="start">
			<Grid kind="FC" height="30%">
				<NavMenu menu={'nav-home'}>Home</NavMenu>
			</Grid>
			<Grid></Grid>
		</Grid>
	);
};

export default GlobalNav;
