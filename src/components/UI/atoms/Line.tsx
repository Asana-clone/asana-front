import React from 'react';
import styled from '@emotion/styled';

interface LineProps {
	color?: string;
}

const Line: React.FC<LineProps> = () => {
	return <LineEl />;
};

Line.defaultProps = {
	color: '#edeae9',
};

const LineEl = styled.hr<LineProps>`
	background-color: ${(props) => props.color};
	border: 0;
	height: 1px;
	width: 100%;
	margin: 1px 0;
	margin-bottom: 1rem;
`;

export default Line;
