import { StreetNumber } from "./IStreetNumbersForCollection";
import { Street } from "./IStreetCollections";
import { IFloor } from "./IFloor";
import { IHouseholdsOnFloor } from "./IHouseholdsOnFloor";

export interface IResult {
	streetNumber: StreetNumber | null;
	street: Street | null;
	floor: IFloor | null;
	flat: IHouseholdsOnFloor | null;

	resultDone: boolean;
}
