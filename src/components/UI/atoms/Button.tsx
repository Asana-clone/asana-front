import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	//onClick?: () => void;
	text?: string;
	_onClick?: any;
}

const Button: React.FC<ButtonProps> = ({ children, _onClick }) => {
	//const HandleClick = (): void => onClick();
	return (
		<>
			<ButtonEl onClick={_onClick}>{children}</ButtonEl>
		</>
	);
};

const ButtonEl = styled('button')`
	width: 2rem;
	height: 2rem;
	border: 1px black dashed;
	border-radius: 2rem;
`;

export default Button;
