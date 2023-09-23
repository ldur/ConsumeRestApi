import React from 'react';
import { AddressForm } from "../molecules/AddressForm/AddressForm";
import { Street } from "../../models/IStreetCollections";
import { ResultContainer } from "../molecules/ResultContainer/ResultContainer";
import { Button } from "@mui/material";
import { IResult } from "../../models/IResult";
import './AddressSearchRow.css';
import ClearIcon from '@mui/icons-material/Clear';

interface AddressSearchRowProps {
	copyButtonClicked: () => void;
	deleteButtonClicked: () => void;
	deleteButtonVisible: boolean;
	id: number;
}

export const AddressSearchRow = (addressSearchRowProps: AddressSearchRowProps) => {
	const [finalResult, setFinalResult] = React.useState<IResult>({
		street: null,
		streetNumber: null,
		floor: null,
		flat: null,
		resultDone: false
	});

	return (
		<div className="row-content">
			<AddressForm
				streetSelected={(street: Street) => {
					setFinalResult({
							street: street,
							streetNumber: null,
							floor: null,
							flat: null,
							resultDone: false
						}
					)
				}}
				streetNumberSelected={(streetNumber) => {
					setFinalResult({
						...finalResult,
						streetNumber: streetNumber,
						resultDone: !streetNumber.showHouseholds
					})
				}}
				floorSelected={(floor) => {
					setFinalResult({
						...finalResult,
						floor: floor,
						flat: null,
						resultDone: false
					})
				}}
				flatSelected={(flat) => {
					setFinalResult({
						...finalResult,
						flat: flat,
						resultDone: true
					})
				}}
			></AddressForm>
			<ResultContainer result={finalResult}></ResultContainer>
			<div>
				{addressSearchRowProps.deleteButtonVisible && <Button variant="contained"
                                                                      color="error"
                                                                      onClick={() => {
					                                                      addressSearchRowProps.deleteButtonClicked();
				                                                      }}
                >
                    <ClearIcon></ClearIcon>
                </Button>}
			</div>
		</div>
	);
}