import React from 'react';
import styled from '@emotion/styled';

interface TextProps {
	color: string;
	fontSize: string;
}

const Text: React.FC<TextProps> = (props) => {
	const { children } = props;
	return (
		<>
			<TextStyle>{children}</TextStyle>
		</>
	);
};

Text.defaultProps = {
	color: 'black',
};

const TextStyle = styled.span`
	color: ${(props) => props.color};
`;

export default Text;
