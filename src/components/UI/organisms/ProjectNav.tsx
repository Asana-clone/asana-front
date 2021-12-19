import React, { useState } from 'react';
import ActiveLineTab from '../atoms/ActiveLineTab';
import Grid from '../atoms/Grid';
import styled from '@emotion/styled';

interface ProjectNavProps {}

const ProjectNav: React.FC<ProjectNavProps> = () => {
	const [active, setActive] = useState([true, false, false, false, false]);
	const [pathName, setPathName] = useState(window.location.pathname);
	const handleClick = (name: string): void => {};

	React.useEffect(() => {}, [pathName]);

	return (
		<>
			<Grid>
				<ActiveLineTab
					text="Overview"
					onClick={() => handleClick('/overview')}
					active={active[0]}
				/>
				<ActiveLineTab
					text="List"
					onClick={() => handleClick('/list')}
					active={active[1]}
				/>
				<ActiveLineTab
					text="Board"
					onClick={() => handleClick('/board')}
					active={active[2]}
				/>
				<ActiveLineTab
					text="Calendar"
					onClick={() => handleClick('calendar')}
					active={active[3]}
				/>
				<ActiveLineTab
					text="Dashboard"
					onClick={() => handleClick('dashboard')}
					active={active[4]}
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
