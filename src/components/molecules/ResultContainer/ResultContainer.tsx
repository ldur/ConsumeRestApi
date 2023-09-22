import React from "react";
import './ResultContainer.css';
import { Badge, Typography } from "@mui/material";
import { IResult } from "../../../models/IResult";
import CheckIcon from '@mui/icons-material/Check';
import { getFlatLabel } from "../../../util/StringParser.util";

interface ResultContainerProps {
	result: IResult;
}

export const ResultContainer = (resultContainerProps: ResultContainerProps) => {

	return (
		<div className={'main-container'}>
			<Typography variant="h4">Kvittering</Typography>
			<div className="stats-container">
				<Badge badgeContent={<CheckIcon></CheckIcon>}
				       invisible={!resultContainerProps.result.resultDone}
				       color="success">
					{resultContainerProps.result.street && <div className="stats-wrapper">
						{resultContainerProps.result.street &&
                            <>
                                <Typography id={"streetNameResult"}>
                                    <strong>Gate navn:</strong> {resultContainerProps.result.street?.streetName}
                                </Typography>
                                <Typography id={"cityResult"}>
                                    <strong>Poststed:</strong> {resultContainerProps.result.street.city}
                                </Typography>
                            </>
						}

						{resultContainerProps.result.streetNumber &&
                            <>
                                <Typography id={"postalCodeResult"}>
                                    <strong>Post nr:</strong> {resultContainerProps.result.streetNumber?.postalCode}
                                </Typography>
                                <Typography id={"streetNumberResult"}>
                                    <strong>Gate nr:</strong> {resultContainerProps.result.streetNumber?.streetNo}
                                </Typography>
								{resultContainerProps.result.streetNumber?.entrance &&
                                    <Typography id={"entranceResult"}><strong>Inngang:</strong> {resultContainerProps.result.streetNumber?.entrance}
                                    </Typography>}
                            </>

						}


						{resultContainerProps.result.floor &&
                            <>
                                <Typography id={"floorResult"}>Etasje {resultContainerProps.result.floor.floorNo}</Typography>
								{resultContainerProps.result.flat &&
                                    <Typography id={"householdResult"}>{getFlatLabel(resultContainerProps.result.flat, resultContainerProps.result.floor!)}</Typography>}
                            </>
						}

                    </div>}
				</Badge>

			</div>
		</div>
	);
}
