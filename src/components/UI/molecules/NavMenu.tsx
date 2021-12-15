import React from 'react';
import Grid from '../atoms/Grid';
import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text';

interface NavMenuProps {
	menu: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ menu, children }) => {
	return (
		<Grid>
			<Icon color="black" size="24px" icon={menu} />
			<Text color="white">{children}</Text>
		</Grid>
	);
};

export default NavMenu;
