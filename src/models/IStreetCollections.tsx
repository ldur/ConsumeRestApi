export interface IStreetCollections {
	streets: Street[];
	totalResults: number;
}

export interface Street {
	countryCode: string;
	city: string;
	streetName: string;
	streetIds: number[];
	isAliasMatch: string;
}