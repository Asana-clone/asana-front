import React from 'react';
import styled from '@emotion/styled';

interface Props {
	width?: string;
	height?: string;
	_onClick?: any;
	background?: string;
	kind?: 'FR' | 'FC';
	position?: 'start' | 'center' | 'end' | 'space-between';
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
	position: 'start',
};

const Container = styled.div<Props>`
	display: flex;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: ${({ background }) => background};
	${(props) =>
		props.kind === 'FR'
			? `justify-content:${props.position}; align-items:center;`
			: `flex-direction:column;justify-content:center; align-items:${props.position};`};
`;

export default Grid;
