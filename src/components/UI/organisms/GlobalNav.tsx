import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Grid from '../atoms/Grid';
import Text from '../atoms/Text';
import NavMenu from '../molecules/NavMenu';
import { DiAndroid } from 'react-icons/di';
interface GlobalNavProps {}

const GlobalNav: React.FC<GlobalNavProps> = () => {
	return (
		<>
			<Grid
				width="200px"
				height="100vh"
				kind="FC"
				background="#424244"
				padding="1rem 1rem"
				position="start"
			>
				<NavMenu menu={'nav-home'}>asana</NavMenu>
				<Grid background="inherit" kind="FC" position="start" height="30%">
					<NavMenu menu={'home'}>
						<DiAndroid size={'24px'} color="white" />
					</NavMenu>
					<NavMenu menu={'circle-down'}>My Tasks</NavMenu>
					<NavMenu menu={'nav-home'}>Inbox</NavMenu>
					<NavMenu menu={'nav-home'}>Reporting</NavMenu>
				</Grid>
				<Line />
				<Grid background="inherit" kind="FC" position="start" height="30%">
					<Text size="1rem" color="#a2a0a2">
						My Projects
					</Text>
					<NavMenu menu={'nav-home'}>clone</NavMenu>
					<NavMenu menu={'nav-home'}>Asana</NavMenu>
					<NavMenu menu={'nav-home'}>andand</NavMenu>
					<NavMenu menu={'nav-home'}>project3</NavMenu>
				</Grid>
			</Grid>
		</>
	);
};

const Line = styled.hr`
	background-color: #a2a0a2;
	width: 100%;
`;

export default GlobalNav;
