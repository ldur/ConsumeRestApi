import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField, Typography } from "@mui/material";
import {
	getFloorsForDeliveryPointId,
	getHouseholdsOnFloor,
	getStreetCollections,
	getStreetNumbersForCollection
} from "../../../service/AddressHelper.service";
import { IStreetCollections, Street } from "../../../models/IStreetCollections";
import './AddressForm.css';
import { IStreetNumbersForCollection, StreetNumber } from "../../../models/IStreetNumbersForCollection";
import { HouseTypesMap } from "../../../util/HouseTypes.mapper";
import { IFloor } from "../../../models/IFloor";
import { IHouseholdsOnFloor } from "../../../models/IHouseholdsOnFloor";
import { getFlatLabel } from "../../../util/StringParser.util";


interface AddressFormProps {
	streetNumberSelected: (streetNumber: StreetNumber) => void;
	streetSelected: (street: Street) => void;
	floorSelected: (floor: IFloor) => void;
	flatSelected: (flat: IHouseholdsOnFloor) => void;
}

export const AddressForm = (addressFormProps: AddressFormProps) => {
	const [streetNameSearchInput, setStreetNameSearchInput] = useState("");

	const [streetCollectionResponse, setStreetCollectionResponse] = React.useState<IStreetCollections>({
		streets: [],
		totalResults: 0
	});

	const [selectedStreetNumber, setSelectedStreetNumber] = React.useState<StreetNumber>();
	const [streetNumbersForCollection, setStreetNumbersForCollection] = React.useState<IStreetNumbersForCollection>({streetNumbers: []});

	const [selectedFloor, setSelectedFloor] = React.useState<IFloor>();
	const [floorsForDeliveryPointId, setFloorsForDeliveryPointId] = React.useState<IFloor[]>([]);


	const [houseHoldsForFloorResponse, setHouseHoldsForFloorResponse] = React.useState<IHouseholdsOnFloor[]>([]);


	useEffect(() => {
		const timeOutId = setTimeout(() => onStreetNameChange(), 500);
		return () => clearTimeout(timeOutId);
	}, [streetNameSearchInput]);


	const onStreetNameChange = () => {
		if (streetNameSearchInput.length > 0) {
			getStreetCollections(streetNameSearchInput)
				.then(res => {
					setStreetCollectionResponse(res.data as IStreetCollections);
				})
				.catch(error => console.log(error));
		}
	}

	const getStreetNr = (street: StreetNumber) => {
		if (street.duplicateNumberAndEntrance) {
			return street.streetNo + ' ' + HouseTypesMap[street.houseType];
		}
		if (street.entrance) {
			return street.streetNo + ' ' + street.entrance
		} else {
			return street.streetNo + ''
		}
	};

	function getFloors(streetNumberSelected: StreetNumber) {
		console.log(streetNumberSelected);
		if (streetNumberSelected) {
			setSelectedStreetNumber(streetNumberSelected);
			addressFormProps.streetNumberSelected(streetNumberSelected);
			if (streetNumberSelected.showHouseholds) {
				getFloorsForDeliveryPointId(streetNumberSelected.deliveryPointId.toString())
					.then(res => {
						console.log(res.data);
						setFloorsForDeliveryPointId(res.data);
					})
					.catch(error => console.log(error));


			}
		}
	}

	return (
		<div className="main-container">
			<Typography variant="h4">Søk</Typography>
			<div className="main-form-container">

				<Autocomplete
					id={'streetNameSearchInput'}
					disableClearable={true}
					renderOption={(props, option) => {
						return (
							<li {...props} key={option.streetIds.join(',')}>
								{option.streetName + ', ' + option.city}
							</li>
						);
					}}
					onChange={(event, value) => {
						if (value) {
							setSelectedFloor(undefined);
							setSelectedStreetNumber(undefined);
							addressFormProps.streetSelected(value);
							getStreetNumbersForCollection(value.streetIds.join(','))
								.then(res => {
									setStreetNumbersForCollection(res.data as IStreetNumbersForCollection);
								})
								.catch(error => console.log(error));
						}
					}}
					getOptionLabel={(option) => option.streetName + ', ' + option.city}
					options={streetCollectionResponse.streets}
					sx={{width: 300}}
					renderInput={(params) => <TextField
						{...params}
						inputProps={{"data-testid": "street-name-search-input"}}
						label="Gate"
						value={streetNameSearchInput}
						onChange={event => setStreetNameSearchInput(event.target.value)}
					/>}
				/>

				<Autocomplete
					id={'streetNrSearchInput'}
					disabled={!streetCollectionResponse}
					disableClearable={true}
					getOptionLabel={(option) => getStreetNr(option)}
					renderOption={(props, option) => {
						return (
							<li {...props} key={option.addressId}>
								{getStreetNr(option)}
							</li>
						);
					}}
					onChange={(event, value) => {
						getFloors(value);
					}}
					options={streetNumbersForCollection.streetNumbers}
					sx={{width: 200}}
					renderInput={(params) => <TextField {...params} label="Gate nr"

					/>}
				/>

				{selectedStreetNumber?.showHouseholds && <Autocomplete
                    id={'floorSearchInput'}
                    disabled={!floorsForDeliveryPointId}
                    disableClearable={true}
                    getOptionLabel={(option) => 'Etasje ' + option.floorNo.toString()}
                    renderOption={(props, option) => {
						return (
							<li {...props} key={option.floorNo}>
								{'Etasje ' + option.floorNo.toString()}
							</li>
						);
					}}
                    onChange={(event, value) => {
						console.log(value);
						if (value) {
							setSelectedFloor(value);
							addressFormProps.floorSelected(value);
							getHouseholdsOnFloor(selectedStreetNumber.deliveryPointId.toString(), value.floorType, value.floorNo.toString())
								.then(res => {
									setHouseHoldsForFloorResponse(res.data as IHouseholdsOnFloor[]);
								})
								.catch(error => console.log(error));
						}
					}}
                    options={floorsForDeliveryPointId}
                    sx={{width: 150}}
                    renderInput={(params) => <TextField {...params}
					                                    disabled={!floorsForDeliveryPointId}
					                                    label="Etasje"
					/>}
                />}


				{selectedStreetNumber?.showHouseholds && <Autocomplete
                    id={'flatSearchInput'}
                    disabled={!selectedFloor}
                    disableClearable={true}
                    getOptionLabel={(option) => getFlatLabel(option, selectedFloor!)}
                    renderOption={(props, option) => {
						return (
							<li {...props} key={selectedFloor?.floorType + option.flatNo.toString()}>
								{getFlatLabel(option, selectedFloor!)}
							</li>
						);
					}}
                    onChange={(event, value) => {
						console.log(value);
						if (value) {
							addressFormProps.flatSelected(value);
						}
					}}
                    options={houseHoldsForFloorResponse}
                    sx={{width: 300}}
                    renderInput={(params) => <TextField {...params}
					                                    disabled={!selectedFloor}
					                                    label="Leilighet"
					/>}
                />}

			</div>
		</div>
	);
}
