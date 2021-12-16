import React, { useState } from 'react';
import styled from '@emotion/styled';
import Text from './Text';

interface InputFocusProps {}

const InputFocus: React.FC<InputFocusProps> = () => {
	const [click, setClick] = useState(false);
	const [title, setTitle] = useState('string');

	return (
		<>
			<div
				onClick={() => setClick(true)}
				style={{ marginBottom: '0.5rem', marginLeft: '0.2rem' }}
			>
				{click ? (
					<Input
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				) : (
					<Text size="1.5rem">{title}</Text>
				)}
			</div>
		</>
	);
};

const Input = styled('input')`
	width: 12rem;
	height: 1.5rem;
	font-size: 1.5rem;
`;

export default InputFocus;
