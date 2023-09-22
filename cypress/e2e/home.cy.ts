export {}

describe('Home', () => {
	it('should show initial content', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.App > :nth-child(1) > :nth-child(1)').should('have.text', 'DI Tech Case')
		cy.get('.content-container > :nth-child(1) > .MuiTypography-root').should('have.text', 'Søk');
		cy.get(':nth-child(2) > .MuiTypography-root').should('have.text', 'Kvittering');
		cy.get('.css-1wuilmg-MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('have.value', '')
		cy.get('.css-o1xa9-MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').should('have.value', '')
	})

	describe('Search for Knud Oyens vei', () => {
		describe('Search for Knud Oyens vei 12 A', () => {
			before(() => {
				cy.visit('http://localhost:3000/')
			})

			it('should should Knud Oyens vei as option when search', () => {
				const streetNameInput = cy.get('#streetNameSearchInput')
				streetNameInput.should('have.value', '')
				streetNameInput.type('Knud Øyens vei')

				const streetNameOptions = cy.get('.MuiAutocomplete-popper li');
				streetNameOptions.contains("KNUD ØYENS VEI, OSLO").should('be.visible');
				streetNameOptions.contains("KNUD ØYENS VEI, OSLO").click();


				cy.get('.stats-wrapper').should('be.visible')
				cy.get('.MuiBadge-badge').should('not.be.visible')
				cy.get('#streetNameResult').should('have.text', 'Gate navn: KNUD ØYENS VEI')

			})

			it('should show nr 12 as an options for street nr', () => {
				const streetNrInputField = cy.get('#streetNrSearchInput')
				streetNrInputField.should('have.value', '')
				streetNrInputField.type('12')

				const streetNrOptions = cy.get('.MuiAutocomplete-popper li');
				streetNrOptions.contains("12 A").should('be.visible');
				streetNrOptions.contains("12 A").click();


				cy.get('.stats-wrapper').should('be.visible')
				cy.get('.MuiBadge-badge').should('be.visible')
				cy.get('#streetNameResult').should('have.text', 'Gate navn: KNUD ØYENS VEI')
				cy.get('#cityResult').should('have.text', 'Poststed: OSLO')
				cy.get('#postalCodeResult').should('have.text', 'Post nr: 1166')
				cy.get('#streetNumberResult').should('have.text', 'Gate nr: 12')
				cy.get('#entranceResult').should('have.text', 'Inngang: A')

			});

		})

		describe('Search for Knud Oyens vei 13 C', () => {
			before(() => {
				cy.visit('http://localhost:3000/')
			})

			it('should should Knud Oyens vei as option when search', () => {
				const streetNameInput = cy.get('#streetNameSearchInput')
				streetNameInput.should('have.value', '')
				streetNameInput.type('Knud Øyens vei')

				const streetNameOptions = cy.get('.MuiAutocomplete-popper li');
				streetNameOptions.contains("KNUD ØYENS VEI, OSLO").should('be.visible');
				streetNameOptions.contains("KNUD ØYENS VEI, OSLO").click();


				cy.get('.stats-wrapper').should('be.visible')
				cy.get('.MuiBadge-badge').should('not.be.visible')
				cy.get('#streetNameResult').should('have.text', 'Gate navn: KNUD ØYENS VEI')

			})

			it('should show nr 13 as an options for street nr', () => {
				const streetNrInputField = cy.get('#streetNrSearchInput')
				streetNrInputField.should('have.value', '')
				streetNrInputField.type('13')

				const streetNrOptions = cy.get('.MuiAutocomplete-popper li');
				streetNrOptions.contains("13 C").should('be.visible');
				streetNrOptions.contains("13 C").click();


				cy.get('.stats-wrapper').should('be.visible')
				cy.get('.MuiBadge-badge').should('not.be.visible')
				cy.get('#streetNameResult').should('have.text', 'Gate navn: KNUD ØYENS VEI')
				cy.get('#cityResult').should('have.text', 'Poststed: OSLO')
				cy.get('#postalCodeResult').should('have.text', 'Post nr: 1166')
				cy.get('#streetNumberResult').should('have.text', 'Gate nr: 13')
				cy.get('#entranceResult').should('have.text', 'Inngang: C')


			});

			it('should show input field for floor and flat', () => {
				const floorInputField = cy.get('#floorSearchInput')
				floorInputField.should('have.value', '')
				floorInputField.type('1')
				const floorOptions = cy.get('.MuiAutocomplete-popper li');
				floorOptions.contains("Etasje 1").should('be.visible');
				floorOptions.contains("Etasje 1").click();


				const flatInputField = cy.get('#flatSearchInput')
				flatInputField.should('have.value', '')
				flatInputField.type('1')

				const flatOptions = cy.get('.MuiAutocomplete-popper li');
				flatOptions.contains("1. dør fra venstre (H0101)").should('be.visible');
				flatOptions.contains("1. dør fra venstre (H0101)").click();

				cy.get('#householdResult').should('have.text', '1. dør fra venstre (H0101)')
				cy.get('#floorResult').should('have.text', 'Etasje 1')

				cy.get('.MuiBadge-badge').should('be.visible')
			});

		})

	})

})