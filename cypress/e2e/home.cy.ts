export {}

describe('Home', () => {
	function selectStreetName(streetName: string) {
		const streetNameOptions = cy.get('.MuiAutocomplete-popper li');
		streetNameOptions.contains(streetName).should('be.visible');
		streetNameOptions.contains(streetName).click();
	}

	function selectStreetNr(streetNr: string) {
		const streetNrOptions = cy.get('.MuiAutocomplete-popper li');
		streetNrOptions.contains(streetNr).should('be.visible');
		streetNrOptions.contains(streetNr).click();
	}

	it('should show initial content', () => {
		cy.visit('http://localhost:3000/')
		cy.get('.App > :nth-child(1) > :nth-child(1)').should('have.text', 'DI Tech Case')
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

				selectStreetName("KNUD ØYENS VEI, OSLO")


				cy.get('.stats-wrapper').should('be.visible')
				cy.get('.MuiBadge-badge').should('not.be.visible')
				cy.get('#streetNameResult').should('have.text', 'Gate navn: KNUD ØYENS VEI')

			})

			it('should show nr 12 as an options for street nr', () => {
				const streetNrInputField = cy.get('#streetNrSearchInput')
				streetNrInputField.should('have.value', '')
				streetNrInputField.type('12')

				selectStreetNr("12 A")


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

				selectStreetName("KNUD ØYENS VEI, OSLO")


				cy.get('.stats-wrapper').should('be.visible')
				cy.get('.MuiBadge-badge').should('not.be.visible')
				cy.get('#streetNameResult').should('have.text', 'Gate navn: KNUD ØYENS VEI')

			})

			it('should show nr 13 as an options for street nr', () => {
				const streetNrInputField = cy.get('#streetNrSearchInput')
				streetNrInputField.should('have.value', '')
				streetNrInputField.type('13')

				selectStreetNr("13 C")


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

				cy.get('#householdResult').should('have.text', 'Leilighet: 1. dør fra venstre (H0101)')
				cy.get('#floorResult').should('have.text', 'Etasje: 1')

				cy.get('.MuiBadge-badge').should('be.visible')
			});

		})

	})

	describe('Multiple searches', () => {
		const randomNr = Math.floor(Math.random() * 5) + 1

		before(() => {
			cy.visit('http://localhost:3000/')
		})

		it('should show button for add search', () => {
			cy.get('#addSearchButton').should('be.visible')
		})

		it('should add a new search when clicking add search button', () => {
			for (let i = 0; i < randomNr; i++) {
				cy.get('#addSearchButton').click()
			}

			cy.get('.search-wrapper').should('have.length', randomNr + 1)
		})

		it('should search for Knud Oyens vei and Testveien', () => {
			cy.get('.search-wrapper').each((searchWrapper, index) => {
				if (index % 2 === 0) {
					cy.wrap(searchWrapper).find('#streetNameSearchInput').type('Knud Øyens vei')
					selectStreetName("KNUD ØYENS VEI, OSLO");

					cy.wrap(searchWrapper).find('#streetNrSearchInput').type('12')

					selectStreetNr("12 A");

					cy.wrap(searchWrapper).find('.MuiBadge-badge').should('be.visible')

				} else {
					cy.wrap(searchWrapper).find('#streetNameSearchInput').type('Testveien')
					selectStreetName("TESTVEIEN, Dummy");

					cy.wrap(searchWrapper).find('#streetNrSearchInput').type('1')
					selectStreetNr("1");
					cy.wrap(searchWrapper).find('.MuiBadge-badge').should('be.visible')

				}
			})
		})
	})

	describe('Removed search', () => {
		before(() => {
			cy.visit('http://localhost:3000/')
		})

		it('should show button for add search', () => {
			cy.get('#addSearchButton').should('be.visible')
		})

		it('should add a new search when clicking add search button', () => {
			cy.get('#addSearchButton').click()
			cy.get('.search-wrapper').should('have.length', 2)
		})

		it('should remvoe the first when clicking remove button', () => {
			cy.get('.search-wrapper').first().find('#removeSearchButton').click()
			cy.get('.search-wrapper').should('have.length', 1)
		});

	})
})