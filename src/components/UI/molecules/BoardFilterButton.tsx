import styled from '@emotion/styled';
import React, { useState } from 'react';
import Text from '../atoms/Text';

interface FilterProps {
	text: string;
}

const BoardFilterButton: React.FC<FilterProps> = ({ children, text }) => {
	const [background, setBackground] = useState('#fff');
	const [color, setColor] = useState('#A4A5A5');

	const focus = () => {
		setBackground('#F4F3F3');
		setColor('black');
	};

	return (
		<Button
			onMouseEnter={() => focus()}
			onMouseLeave={() => {
				setBackground('#fff');
				setColor('#A4A5A5');
			}}
			style={{ backgroundColor: background }}
		>
			<div style={{ marginRight: '0.5rem' }}>{children}</div>
			<Text color={color}>{text}</Text>
		</Button>
	);
};

const Button = styled('button')`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2rem;
	border: none;
	padding: 0 1rem;
	border-radius: 0.3rem;
	cursor: pointer;
`;

export default BoardFilterButton;
