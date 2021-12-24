/* eslint-disable import/extensions */
import BoardTemp from '../../templates/BoardTemp';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SECTIONS } from '../../../apollo/localStorage';

const Board: React.FC = () => {
	const { data } = useQuery(GET_SECTIONS);

	const members = ['kyuung', 'jinsung', 'hwang chang', 'young woo'];
	return (
		<>
			<BoardTemp sections={data.sections} members={members} />
		</>
	);
};

export default Board;
