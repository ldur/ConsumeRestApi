import { IHouseholdsOnFloor } from "../models/IHouseholdsOnFloor";
import { IFloor } from "../models/IFloor";


export const parseFloorNumber = (floorNo: number | undefined) => {
	if (floorNo) {
		return floorNo < 10 ? '0' + floorNo : floorNo;
	}
	return '';
}

export const parseFlatNr = (flatNo: number) => {
	return flatNo < 10 ? '0' + flatNo : flatNo
}

export const getFlatLabel = (householdsOnFloor: IHouseholdsOnFloor, floor: IFloor) => {
	return householdsOnFloor.flatNoAlias ? householdsOnFloor.flatNoAlias : householdsOnFloor.flatNo + '. dør fra venstre (' + floor?.floorType + parseFloorNumber(floor?.floorNo) + parseFlatNr(householdsOnFloor.flatNo) + ')';
}