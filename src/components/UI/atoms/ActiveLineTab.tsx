import React, { useState } from 'react';
import styled from '@emotion/styled';
import Text from './Text';

interface ActiveLineTabProps {
	active: boolean;
	text?: string;
	onClick: () => void;
}

const ActiveLineTab: React.FC<ActiveLineTabProps> = ({ text, active, onClick }) => {
	const [color, setColor] = useState('#6d6e6f');
	const HandleClick = (): void => onClick();
	return (
		<>
			<LineTab
				onMouseEnter={() => setColor('black')}
				onMouseLeave={() => setColor('#6d6e6f')}
				active={active}
				onClick={HandleClick}
			>
				<Text color={color}>{text}</Text>
			</LineTab>
		</>
	);
};

ActiveLineTab.defaultProps = {
	text: 'Asana',
};

const LineTab = styled('button')<ActiveLineTabProps>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 2rem;
	border: none;
	padding: 0 0.5rem;
	background-color: #fff;
	cursor: pointer;
	&:hover {
		border-bottom: 2px solid black;
	}
	${(props) => props.active && `border-bottom: 2px solid black`}
`;

export default React.memo(ActiveLineTab);
