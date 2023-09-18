import React from "react";
import './ResultContainer.css';
import { Badge, Typography } from "@mui/material";
import { IResult } from "../../../models/IResult";
import CheckIcon from '@mui/icons-material/Check';
import { getFlatLabel } from "../../../util/string-parser.util";

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
					{resultContainerProps.result.street && <div className="border-wrapper">
						{resultContainerProps.result.street?.streetName &&
                            <Typography><strong>Gate navn:</strong> {resultContainerProps.result.street?.streetName}
                            </Typography>}
						{resultContainerProps.result.streetNumber &&
                            <Typography>
                                <strong>Post nr:</strong> {resultContainerProps.result.streetNumber?.postalCode}
                            </Typography>}
						{resultContainerProps.result.streetNumber &&
                            <Typography>
                                <strong> Poststed:</strong> {resultContainerProps.result.street.city}
                            </Typography>}
                        <p></p>

						{resultContainerProps.result.streetNumber &&
                            <Typography><strong>Gate nr:</strong> {resultContainerProps.result.streetNumber?.streetNo}
                            </Typography>}
						{resultContainerProps.result.streetNumber?.entrance &&
                            <Typography><strong>Inngang:</strong> {resultContainerProps.result.streetNumber?.entrance}
                            </Typography>}

						{resultContainerProps.result.floor &&
                            <Typography>Etasje {resultContainerProps.result.floor.floorNo} </Typography>}

						{(resultContainerProps.result.flat && resultContainerProps.result.floor) &&
                            <Typography>{getFlatLabel(resultContainerProps.result.flat, resultContainerProps.result.floor!)}</Typography>}
                    </div>}
				</Badge>

			</div>
		</div>
	);
}
