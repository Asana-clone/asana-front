import React from 'react';
import styled from '@emotion/styled';

interface TextProps {
	color?: string;
	size?: string;
	weight?: string;
	align?: 'left' | 'right' | 'center';
	width?: string;
	margin?: string;
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
	margin: '0 0 0 0',
};

const TextStyle = styled('span')<TextProps>`
	${(props) => props.width && `width: ${props.width}`};
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.weight};
	margin: ${(props) => props.margin};
	display: block;
`;

export default Text;
