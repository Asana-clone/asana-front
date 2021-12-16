import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	const HandleClick = (): void => onClick();
	return (
		<>
			<ButtonEl onClick={HandleClick}>{children}</ButtonEl>
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
