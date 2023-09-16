import React, { useEffect, useState } from 'react';
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { getStreetCollections, getStreetNumbersForCollection } from "../../../service/AddressHelper.service";
import { IStreetCollections } from "../../../models/IStreetCollections";
import './AddressForm.css';
import { IStreetNumbersForCollection } from "../../../models/IStreetNumbersForCollection";


export const AddressForm = () => {
	const [streetNameSearchInput, setStreetNameSearchInput] = useState("");
	const [streetCollectionSearchResult, setStreetCollectionSearchResult] = React.useState<IStreetCollections>();

	const [streetNumber, setStreetNumber] = React.useState('');
	const [streetNumbersForCollection, setStreetNumbersForCollection] = React.useState<IStreetNumbersForCollection>();


	const handleStreetNumberChange = (event: SelectChangeEvent) => {
		setStreetNumber(event.target.value as string);
	};

	useEffect(() => {
		const timeOutId = setTimeout(() => onStreetNameChange(), 500);
		return () => clearTimeout(timeOutId);
	}, [streetNameSearchInput]);

	const onStreetNameChange = () => {

		getStreetCollections(streetNameSearchInput)
			.then(res => {
				setStreetCollectionSearchResult(res.data as IStreetCollections);
			})
			.catch(error => console.log(error));
	}

	function getStreetNames() {
		return streetCollectionSearchResult ? streetCollectionSearchResult.streets.map((street, index) => {
				return {label: street.streetName, id: street.streetIds.join(',')};
			}
		) : [];
	}

	return (
		<div className="main-form-container">
			<Autocomplete
				disableClearable={true}
				renderOption={(props, option) => {
					return (
						<li {...props} key={option.id}>
							{option.label}
						</li>
					);
				}}
				onChange={(event, value) => {
					console.log(value);
					if (value) {
						getStreetNumbersForCollection(value.id)
							.then(res => {
								setStreetNumbersForCollection(res.data as IStreetNumbersForCollection);
							})
							.catch(error => console.log(error));
					}
				}}
				isOptionEqualToValue={(option, value) => option.label === value.label}
				id="combo-box-demo"
				options={getStreetNames()}
				sx={{width: 300}}
				renderInput={(params) => <TextField {...params} label="Gate"
				                                    onChange={event => setStreetNameSearchInput(event.target.value)}
				/>}
			/>
			<FormControl sx={{minWidth: 120}}>
				<InputLabel
					disabled={!streetCollectionSearchResult}
					id="street-number-select-label">Gate nr</InputLabel>
				<Select
					disabled={!streetCollectionSearchResult}
					labelId="street-number-select-label"
					label="Gate nr"
					value={streetNumber}
					onChange={handleStreetNumberChange}
				>
					{streetNumbersForCollection && streetNumbersForCollection.streetNumbers.map((streetNumber, index) => {
						return <MenuItem
							key={index}
							value={streetNumber.streetNo + streetNumber.entrance}
						>
							{streetNumber.streetNo + streetNumber.entrance}</MenuItem>
					})
					}
				</Select>
			</FormControl>

		</div>

	);
}
