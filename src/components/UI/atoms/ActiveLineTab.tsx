import React from 'react';
import styled from '@emotion/styled';

interface ActiveLineTabProps {
	active: boolean;
	text?: string;
	onClick: () => void;
}

const ActiveLineTab: React.FC<ActiveLineTabProps> = ({ text, active, onClick }) => {
	const HandleClick = (): void => onClick();
	return (
		<>
			<LineTab active={active} onClick={HandleClick}>
				{text}
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
	${(props) => props.active && `border-bottom: 2px solid black`}
`;

export default React.memo(ActiveLineTab);
