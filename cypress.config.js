const { defineConfig } = require('cypress')

export default defineConfig({
	env: {
		Login: 'pawelfornal91@gmail.com',
		Password: 'LaBm)}C^MMq6DhB',
		hideXHR: true,
	},
	reporter: 'mochawesome',
	reporterOptions: {
		reportDir: 'cypress/results/json_reports',
		overwrite: false,
		html: false,
		json: true,
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
		baseUrl: 'https://app.kadromierz.pl/',
		supportFile: 'cypress/support/e2e.ts',
		defaultCommandTimeout: 10000, // domyślny timeout dla komend
		pageLoadTimeout: 30000, // timeout ładowania strony
		requestTimeout: 10000, // timeout dla requestów
		responseTimeout: 30000, // timeout dla odpowiedzi
		execTimeout: 60000, // timeout dla exec komend
		taskTimeout: 60000, // timeout dla task
	},
})
