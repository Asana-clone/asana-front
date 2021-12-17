import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	onClick: () => void;
	size: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size }) => {
	const HandleClick = (): void => onClick();
	return (
		<>
			<ButtonEl onClick={HandleClick} size={size}>
				{children}
			</ButtonEl>
		</>
	);
};

const ButtonEl = styled('button')<ButtonProps>`
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	border: 1px black dashed;
	border-radius: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Button;
