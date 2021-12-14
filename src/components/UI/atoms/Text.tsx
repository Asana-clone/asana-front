import React from 'react';
import styled from '@emotion/styled';

interface TextProps {
	color: string;
	size: string;
	// align: Align;
}

enum Align {
	left = 'left',
	center = 'center',
	right = 'right',
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
};

const TextStyle = styled('span')<TextProps>`
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
`;

export default Text;
