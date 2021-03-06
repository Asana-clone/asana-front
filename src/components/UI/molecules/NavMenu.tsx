import React from 'react';
import Grid from '../atoms/Grid';
import Text from '../atoms/Text';

interface NavMenuProps {
	menu: string;
	fontSize?: string;
	onClick: () => void;
	margin?: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ menu, fontSize, onClick, children, margin }) => {
	const goToPage = (): void => onClick();

	return (
		<div onClick={goToPage} style={{ cursor: 'pointer' }}>
			<Grid
				width="6rem"
				height="2rem"
				background="#424244"
				position="space-between"
				margin={margin}
			>
				{children}
				<Text color="white" align="left" width="4rem" size={fontSize}>
					{menu}
				</Text>
			</Grid>
		</div>
	);
};

NavMenu.defaultProps = {
	margin: '0.3rem 0',
};

export default NavMenu;
