import React, { useState } from 'react';
import ActiveLineTab from '../atoms/ActiveLineTab';
import Grid from '../atoms/Grid';
import styled from '@emotion/styled';

interface ProjectNavProps {}

const ProjectNav: React.FC<ProjectNavProps> = () => {
	const [active, setActive] = useState(false);
	const handleClick = (): void => {
		active ? setActive(false) : setActive(true);
	};

	return (
		<>
			<Grid>
				<ActiveLineTab text="Overview" onClick={handleClick} active={active} />
				<ActiveLineTab text="List" onClick={handleClick} active={active} />
				<ActiveLineTab text="Board" onClick={handleClick} active={active} />
				<ActiveLineTab text="Calendar" onClick={handleClick} active={active} />
				<ActiveLineTab text="Dashboard" onClick={handleClick} active={active} />
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

export default ProjectNav;
