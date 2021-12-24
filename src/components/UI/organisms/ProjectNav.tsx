import React, { useState, useEffect } from 'react';
import ActiveLineTab from '../atoms/ActiveLineTab';
import Grid from '../atoms/Grid';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

interface ProjectNavProps {}

const ProjectNav: React.FC<ProjectNavProps> = () => {
	let navigate = useNavigate();
	const [active, setActive] = useState({
		overview: false,
		list: false,
		board: false,
		calendar: false,
		dashboard: false,
	});

	const getPathName = (): string => {
		return window.location.pathname;
	};

	const handleClick = (name: string): void => {
		navigate(`/${name}`);
		setActive(() => ({
			overview: false,
			list: false,
			board: false,
			calendar: false,
			dashboard: false,
			[name]: true,
		}));
	};
	useEffect(() => {
		const pahtName = getPathName().slice(1);
		setActive((prevState) => ({
			...prevState,
			[pahtName]: true,
		}));
	}, []);

	return (
		<>
			<Grid>
				<ActiveLineTab
					text="Overview"
					onClick={() => handleClick('overview')}
					active={active.overview}
				/>
				<ActiveLineTab
					text="List"
					onClick={() => handleClick('list')}
					active={active.list}
				/>
				<ActiveLineTab
					text="Board"
					onClick={() => handleClick('board')}
					active={active.board}
				/>
				<ActiveLineTab
					text="Calendar"
					onClick={() => handleClick('calendar')}
					active={active.calendar}
				/>
				<ActiveLineTab
					text="Dashboard"
					onClick={() => handleClick('dashboard')}
					active={active.dashboard}
				/>
			</Grid>
			<Line />
		</>
	);
};

const Line = styled.hr`
	background-color: #edeae9;
	border: 0;
	height: 0.5px;
	width: 100%;
	margin: 1px 0;
	margin-bottom: 1rem;
`;

export default React.memo(ProjectNav);
