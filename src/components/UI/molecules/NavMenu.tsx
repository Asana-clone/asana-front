import React from 'react';
import Grid from '../atoms/Grid';
import Text from '../atoms/Text';

interface NavMenuProps {
	menu: string;
	fontSize?: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ menu, fontSize, children }) => {
	const goToPage = () => {};

	return (
		<div onClick={goToPage} style={{ cursor: 'pointer' }}>
			<Grid
				width="6rem"
				height="2rem"
				background="#424244"
				position="space-between"
				margin="0.5rem 0"
			>
				{children}
				<Text color="white" align="left" width="4rem" size={fontSize}>
					{menu}
				</Text>
			</Grid>
		</div>
	);
};

export default NavMenu;
