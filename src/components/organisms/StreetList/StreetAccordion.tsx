import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Button,  Typography } from "@mui/material";
import { Street } from "../../../models/IStreetCollections";
import { IStreetNumbersForCollection, StreetNumber } from "../../../models/IStreetNumbersForCollection";

interface StreetAccordianProps {
	street: Street;
	streetNumbersForCollection: IStreetNumbersForCollection | null;
	expanded: boolean;
	streetSelected: (expanded: boolean) => void;
	streetNrToggled: (streetNumber: StreetNumber) => void;
}

export const StreetAccordion = (streetAccordianProps: StreetAccordianProps) => {
	function getStreetNr(res: StreetNumber) {
		return res.streetNo + (res.entrance ? res.entrance : "");
	}

	return (
		<Accordion
			expanded={streetAccordianProps.expanded}
			onChange={() => streetAccordianProps.streetSelected(!streetAccordianProps.expanded)}
		>
			<AccordionSummary
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography variant="h6">{streetAccordianProps.street.streetName}, {streetAccordianProps.street.city}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<h4>Gate nr</h4>
				{streetAccordianProps.streetNumbersForCollection &&
					streetAccordianProps
						.streetNumbersForCollection
						.streetNumbers
						.map((streetNr, index) => <Button key={index} onClick={() => streetAccordianProps.streetNrToggled(streetNr)}>{getStreetNr(streetNr)}</Button>)}
			</AccordionDetails>
		</Accordion>
	);
}