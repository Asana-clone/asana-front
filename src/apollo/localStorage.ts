import { makeVar } from '@apollo/client';
import { gql, useMutation } from '@apollo/client';

// use ReactiveVar
export const isModalVar = makeVar(false);

// use cache
export const GET_SECTIONS = gql`
	query getSections {
		sections @client
	}
`;
