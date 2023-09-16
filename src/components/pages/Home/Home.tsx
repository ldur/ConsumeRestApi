import React from 'react';
import './Home.css';
import { AddressForm } from "../../molecules/AddressForm/AddressForm";

export const Home = () => {

	return (
		<div className="main-container">
			<h1>DI Address Helper Case</h1>
			<div className="content-container">
				<AddressForm></AddressForm>
				<div>
					<h2>Result</h2>
					
				</div>
			</div>
		</div>
	);
}