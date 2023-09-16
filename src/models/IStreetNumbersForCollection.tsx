export interface IStreetNumbersForCollection {
  streetNumbers: StreetNumber[];
}

export interface StreetNumber {
  streetNo: number;
  addressId: number;
  entrance: string;
  houseType: string;
  deliveryPointId: number;
  postalCode: string;
  duplicateNumberAndEntrance: boolean;
  latitude: number;
  longitude: number;
  showHouseholds: boolean;
}