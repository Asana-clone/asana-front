import React from 'react';

interface BoardProps {
	test: string;
}

const Board: React.FC<BoardProps> = (props) => {
	const { test } = props;
	return (
		<>
			<p>{test} Board</p>
		</>
	);
};

export default Board;
