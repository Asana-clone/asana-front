import React from 'react';
import styled from '@emotion/styled';

interface TextProps {
	color?: string;
	size?: string;
	weight?: string;
	align?: 'left' | 'right' | 'center';
}

const Text: React.FC<TextProps> = ({ children, ...props }) => {
	return (
		<>
			<TextStyle {...props}>{children}</TextStyle>
		</>
	);
};

Text.defaultProps = {
	color: 'black',
	size: '1rem',
	weight: '400',
	align: 'left',
};

const TextStyle = styled('span')<TextProps>`
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.weight};
	text-align: ${(props) => props.align};
`;

export default Text;
