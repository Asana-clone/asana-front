import { InMemoryCache } from '@apollo/client';
import { GET_SECTIONS } from './localStorage';

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {},
		},
	},
});

cache.writeQuery({
	query: GET_SECTIONS,
	data: {
		sections: [
			{ id: 1, title: 'TODO', tasks: ['todo카드1', 'todo카드2', 'todo카드3', 'todo카드4'] },
			{ id: 2, title: 'ING', tasks: ['ING카드1', 'ING카드2', 'ING카드3', 'ING카드4'] },
			{ id: 3, title: 'END', tasks: ['END카드1', 'END카드2', 'END카드3', 'END카드4'] },
		],
	},
});
