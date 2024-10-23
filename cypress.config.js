const { defineConfig } = require('cypress')

export default defineConfig({
	env: {
		Login: 'pawelfornal91@gmail.com',
		Password: 'LaBm)}C^MMq6DhB',
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
	},
})
