import React from "react";
import './ResultContainer.css';
import { Badge, Typography } from "@mui/material";
import { IResult } from "../../../models/IResult";
import CheckIcon from '@mui/icons-material/Check';

interface ResultContainerProps {
	result: IResult;
}

export const ResultContainer = (resultContainerProps: ResultContainerProps) => {

	return (
		<div className={'main-container'}>
			<Typography variant="h4">Result</Typography>
			<Badge badgeContent={<CheckIcon></CheckIcon>}
			       invisible={!resultContainerProps.result.resultDone}
			       color="success">
				<div className="stats-container">
					<Typography><strong>Gate nr:</strong> {resultContainerProps.result.streetNumber?.streetNo}
					</Typography>
					{resultContainerProps.result.streetNumber?.entrance &&
                        <Typography><strong>Inngang:</strong> {resultContainerProps.result.streetNumber?.entrance}
                        </Typography>}
					<Typography><strong>Post nr:</strong> {resultContainerProps.result.streetNumber?.postalCode}
					</Typography>
					<Typography><strong>Etasje type:</strong></Typography>
				</div>
			</Badge>
		</div>
	);
}
