import React, { useState, useReducer } from 'react';
import ActiveLineTab from '../atoms/ActiveLineTab';

interface ProjectNavProps {}

// type Action = { type: 'setActive' };
// function reducer(state: boolean, action: Action): any {
//     switch(action.type) {
//         case 'setActive':

//     }
// }

const ProjectNav: React.FC<ProjectNavProps> = () => {
	const [active, setActive] = useState(false);
	const handleClick = (): void => {
		active ? setActive(false) : setActive(true);
	};

	return (
		<>
			<ActiveLineTab text="Overview" onClick={handleClick} active={active} />
			<ActiveLineTab text="List" onClick={handleClick} active={active} />
			<ActiveLineTab text="Board" onClick={handleClick} active={active} />
			<ActiveLineTab text="Calendar" onClick={handleClick} active={active} />
			<ActiveLineTab text="Dashboard" onClick={handleClick} active={active} />
		</>
	);
};

export default ProjectNav;
