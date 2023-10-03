import axios from "axios";

const apiKey = '905679e0-2da7-4be1-94a2-23646d8d3488';

export const getStreetCollections = async (searchInput: string) => {
	return axios
		.get('https://ws.di.no/ws/json/addressHelper/v-2/NO/streetSearch/' + searchInput + '?apiKey=' + apiKey)

};

export const getStreetNumbersForCollection = async (streetIds: string) => {
	return axios
		.get('https://ws.di.no/ws/json/addressHelper/v-2/NO/streetNumberSearch/' + streetIds + '?apiKey=' + apiKey + '&limitToOfficial=false&limit=50&streetNumber=*')
}

export const getFloorsForDeliveryPointId = async (deliveryId: string) => {
	return axios
		.get('https://ws.di.no/ws/json/addressHelper/v-2/NO/address/' + deliveryId + '/floors?apiKey=' + apiKey)
}

export const getHouseholdsOnFloor = async (deliveryId: string, floorType: string, floorNo: string) => {
	return axios
		.get('https://ws.di.no/ws/json/addressHelper/v-2/NO/address/' + deliveryId + '/floor/' + floorType + '-' + floorNo + '/households?apiKey=' + apiKey + '&limit=50')
}