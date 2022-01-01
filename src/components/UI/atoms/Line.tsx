import React from 'react';
import styled from '@emotion/styled';

interface LineProps {
	color?: string;
	width?: string;
	size?: string;
}

const Line: React.FC<LineProps> = ({ color, width, size }) => {
	return <LineEl color={color} width={width} size={size} />;
};

Line.defaultProps = {
	color: '#edeae9',
	width: '100%',
	size: '1px',
};

const LineEl = styled.hr<LineProps>`
	background-color: ${(props) => props.color};
	border: 0;
	height: ${(props) => props.size};
	width: ${(props) => props.width};
	margin: 1px 0;
	margin-bottom: 1rem;
`;

export default Line;
