import { InMemoryCache } from '@apollo/client';
import { isModalVar } from './localStorage';

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isModalTest: {
					read() {
						return isModalVar();
					},
				},
			},
		},
	},
});
