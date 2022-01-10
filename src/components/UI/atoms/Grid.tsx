import React from 'react';
import styled from '@emotion/styled';

interface Props {
	width?: string;
	height?: string;
	_onClick?: any;
	background?: string;
	kind?: 'FR' | 'FC';
	position?: 'start' | 'center' | 'end' | 'space-between';
	positionSub?: 'start' | 'center' | 'end' | 'space-between';
	margin?: string;
	padding?: string;
	isCursor?: boolean;
	border?: string;
	isRadius?: boolean;
}

const Grid: React.FC<Props> = ({ _onClick, children, ...props }): React.ReactElement => {
	return (
		<Container onClick={_onClick} {...props}>
			{children}
		</Container>
	);
};

Grid.defaultProps = {
	width: '100%',
	height: '100%',
	_onClick: () => {},
	kind: 'FR',
	margin: '0 0 0 0',
	padding: '0 0 0 0',
	position: 'start',
	positionSub: 'center',
	isCursor: false,
	border: 'none',
	isRadius: false,
};

const Container = styled.div<Props>`
	display: flex;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: ${(props) => props.background};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	${(props) => props.isCursor && `cursor:pointer`};
	border: ${(props) => props.border};
	${(props) => props.isRadius && `border-radius: 1rem;`}
	${(props) =>
		props.kind === 'FR'
			? `justify-content:${props.position}; align-items:${props.positionSub};`
			: `flex-direction:column;justify-content:${props.positionSub}; align-items:${props.position};`};
`;

export default Grid;
