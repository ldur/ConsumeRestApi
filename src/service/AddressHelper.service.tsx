import axios from "axios";

const apiKey = '';

export const getStreetCollections = async (searchInput: string) => {
	return axios
		.get('https://ws.di.no/ws/json/addressHelper/v-2/NO/streetSearch/' + searchInput + '?apiKey=' + apiKey)

};

export const getStreetNumbersForCollection = async (streetIds: string) => {
	return axios
		.get('https://ws.di.no/ws/json/addressHelper/v-2/NO/streetNumberSearch/' + streetIds + '?apiKey=' + apiKey + '&limitToOfficial=false&limit=50&streetNumber=*')
}
