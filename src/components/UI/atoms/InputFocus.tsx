import React, { useState } from 'react';
import styled from '@emotion/styled';
import Text from './Text';

interface Props {
	sectionName: string;
}

const InputFocus: React.FC<Props> = ({ sectionName }) => {
	const [click, setClick] = useState(false);
	const [title, setTitle] = useState(sectionName);

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
	padding: 0.3rem;
	font-size: 1.5rem;
	border: 1px solid lightgray;
	border-radius: 0.5rem;
`;

export default InputFocus;
