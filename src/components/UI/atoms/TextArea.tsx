import React, { FC } from 'react';
import styled from '@emotion/styled';

interface TextAreaProps {
	width?: string;
	height?: string;
	border?: string;
	value?: string;
	placeholder?: string;
	color?: string;
}

const TextArea: FC<TextAreaProps> = ({ children, ...props }) => {
	return <TextAreaStyle {...props}>{children}</TextAreaStyle>;
};

TextArea.defaultProps = {
	width: '100%',
	height: '100px',
	border: 'none',
	color: '#000',
};

const TextAreaStyle = styled.textarea<TextAreaProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border: ${({ border }) => border};
	color: ${({ color }) => color};
`;

export default TextArea;
