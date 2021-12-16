import React from 'react';
import styled from '@emotion/styled';
import Grid from '../atoms/Grid';
import NavMenu from '../molecules/NavMenu';
import {
	FiHome,
	FiCheckCircle,
	FiBell,
	FiGitPullRequest,
	FiTrello,
	FiTarget,
	FiSquare,
} from 'react-icons/fi';
import { SiAsana } from 'react-icons/si';

interface GlobalNavProps {}

const GlobalNav: React.FC<GlobalNavProps> = () => {
	return (
		<>
			<Grid width="200px" height="100vh" kind="FC" background="#424244" padding="1rem 1rem">
				<NavMenu menu={'asana'} fontSize="1.4rem">
					<SiAsana size={'24px'} color="red" />
				</NavMenu>
				<Grid background="inherit" kind="FC">
					<NavMenu menu={'Home'}>
						<FiHome size={'20px'} color="white" />
					</NavMenu>
					<NavMenu menu={'My Tasks'}>
						<FiCheckCircle size={'20px'} color="white" />
					</NavMenu>
					<NavMenu menu={'Inbox'}>
						<FiBell size={'20px'} color="white" />
					</NavMenu>
					<NavMenu menu={'Reporting'}>
						<FiGitPullRequest size={'20px'} color="white" />
					</NavMenu>
					<NavMenu menu={'Portfolios'}>
						<FiTrello size={'20px'} color="white" />
					</NavMenu>
					<NavMenu menu={'Goals'}>
						<FiTarget size={'20px'} color="white" />
					</NavMenu>
				</Grid>
				<Line />
				<Grid background="inherit" kind="FC">
					<Grid kind="FC" background="#424244">
						<NavMenu menu={'project1'}>
							<FiSquare size={'16px'} color="yellow" />
						</NavMenu>
						<NavMenu menu={'project2'}>
							<FiSquare size={'16px'} color="blue" />
						</NavMenu>
						<NavMenu menu={'project3'}>
							<FiSquare size={'16px'} color="red" />
						</NavMenu>
						<NavMenu menu={'project4'}>
							<FiSquare size={'16px'} color="white" />
						</NavMenu>
					</Grid>
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
