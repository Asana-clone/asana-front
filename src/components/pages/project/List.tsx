import React from 'react';

interface ListProps {
	test?: string;
}

const List: React.FC<ListProps> = (props) => {
	const { test } = props;
	return (
		<>
			<p>{test} Board</p>
		</>
	);
};

export default List;
