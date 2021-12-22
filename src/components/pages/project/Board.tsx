/* eslint-disable import/extensions */
import BoardTemp from '../../templates/BoardTemp';
import React from 'react';

interface BoardProps {
	test?: string;
}

const Board: React.FC<BoardProps> = (props) => {
	const { test } = props;
	return (
		<>
			<BoardTemp />
		</>
	);
};

export default Board;
