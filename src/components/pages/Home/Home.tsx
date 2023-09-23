import React from 'react';
import './Home.css';
import { Button, Divider, Typography } from "@mui/material";
import { AddressSearchRow } from "../../organisms/AddressSearchRow";
import { getRandomKey } from "../../../util/KeyGenerator.util";


export const Home = () => {

	function getNewAddressSearchRow(id: number = 0) {
		return (
			<AddressSearchRow
				id={id}
				copyButtonClicked={() => {
				}}
				deleteButtonVisible={false}
				deleteButtonClicked={() => {
				}}
			></AddressSearchRow>
		)
	}

	const [searchRows, setSearchRows] = React.useState<{ key: string, element: JSX.Element }[]>([{
		key: getRandomKey(),
		element: getNewAddressSearchRow()
	}
	]);

	return (
		<div className="main-container">
			<Typography variant="h4">DI Tech Case</Typography>
			<div className="column-content">
				{searchRows.map((searchRow, index) => {
					return (
						<div key={searchRow.key}>
							<searchRow.element.type
								deleteButtonVisible={searchRows.length > 1}
								deleteButtonClicked={() => {
									setSearchRows(searchRows.filter((sr, index) => {
											return sr.key !== searchRow.key
										}
									))

								}}></searchRow.element.type>
							{searchRows.length > 1 &&
                                <Divider/>
							}
						</div>

					)
				})}
				<div>
					<Button
						variant="contained"
						onClick={() => {
							setSearchRows([...searchRows, {
								key: getRandomKey(),
								element: getNewAddressSearchRow()
							}
							])
						}}
					>Legg til søk</Button>
				</div>
			</div>
		</div>
	);
}