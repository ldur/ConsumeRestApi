import React from 'react';
import './Home.css';
import { AddressForm } from "../../molecules/AddressForm/AddressForm";
import { ResultContainer } from "../../molecules/ResultContainer/ResultContainer";
import { IResult } from "../../../models/IResult";
import { Street } from "../../../models/IStreetCollections";
import { Typography } from "@mui/material";


export const Home = () => {

	const [finalResult, setFinalResult] = React.useState<IResult>({
		street: null,
		streetNumber: null,
		floor: null,
		flat: null,
		resultDone: false
	});

	return (
		<div className="main-container">
			<Typography variant="h4">DI Tech Case</Typography>
			<div className="content-container">
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
				<ResultContainer
					result={finalResult}
				></ResultContainer>
			</div>
		</div>
	);
}