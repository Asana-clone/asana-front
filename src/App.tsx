import React, { useState } from 'react';
import UserHome from './components/pages/user/UserHome';
import ActiveLineTab from './components/UI/atoms/ActiveLineTab';

const App = () => {
	const [active, setActive] = useState(false);
	const handleClick = (): void => {
		active ? setActive(false) : setActive(true);
	};
	return (
		<div>
			Appjs
			<ActiveLineTab onClick={handleClick} active={active} />
		</div>
	);
};

export default App;
