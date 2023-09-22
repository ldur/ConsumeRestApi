import { AxiosResponse } from 'axios';
import '@testing-library/jest-dom/extend-expect';

export const getStreetCollectionsMockResponse = {
	data: {
		"streets": [
			{
				"countryCode": "NO",
				"city": "ASKER",
				"streetName": "KNUD ASKERS VEI",
				"streetIds": [
					5553
				],
				"isAliasMatch": "0"
			},
		],
		"totalResults": 21
	},
} as AxiosResponse;
