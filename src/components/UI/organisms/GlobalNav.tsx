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
import { useNavigate } from 'react-router-dom';

interface GlobalNavProps {}

const GlobalNav: React.FC<GlobalNavProps> = () => {
	const navigate = useNavigate();
	return (
		<>
			<div style={{ position: 'fixed' }}>
				<Grid
					width="200px"
					height="100vh"
					kind="FC"
					background="#424244"
					padding="1rem 1rem"
					position="start"
					positionSub="start"
				>
					<NavMenu
						onClick={() => {
							navigate('/');
						}}
						menu={'asana'}
						fontSize="1.4rem"
						margin="1rem 0.3rem 3rem 0.3rem"
					>
						<SiAsana size={'24px'} color="red" />
					</NavMenu>

					<NavMenu
						onClick={() => {
							navigate('/');
						}}
						menu={'Home'}
					>
						<FiHome size={'20px'} color="white" />
					</NavMenu>
					<NavMenu
						onClick={() => {
							navigate('/');
						}}
						menu={'Tasks'}
					>
						<FiCheckCircle size={'20px'} color="white" />
					</NavMenu>
					<NavMenu
						onClick={() => {
							navigate('/');
						}}
						menu={'Inbox'}
					>
						<FiBell size={'20px'} color="white" />
					</NavMenu>
					<NavMenu
						onClick={() => {
							navigate('/');
						}}
						menu={'Reporting'}
					>
						<FiGitPullRequest size={'20px'} color="white" />
					</NavMenu>
					<NavMenu
						onClick={() => {
							navigate('/');
						}}
						menu={'Portfolios'}
					>
						<FiTrello size={'20px'} color="white" />
					</NavMenu>
					<NavMenu
						onClick={() => {
							navigate('/');
						}}
						menu={'Goals'}
					>
						<FiTarget size={'20px'} color="white" />
					</NavMenu>
					<NavMenu
						onClick={() => {
							navigate('/overview/1');
						}}
						menu={'project1'}
						margin="5rem 0.3rem 3rem 0.1rem"
					>
						<FiSquare size={'16px'} color="yellow" />
					</NavMenu>
				</Grid>
			</div>
		</>
	);
};

const Line = styled.hr`
	background-color: #a2a0a2;
	width: 100%;
`;

export default GlobalNav;
