const { defineConfig } = require('cypress')

export default defineConfig({
	env: {
		Login: 'pawelfornal91@gmail.com',
		Password: 'LaBm)}C^MMq6DhB',
		hideXHR: true,
		deleteConfirm: 'POTWIERDZAM',
	},
	e2e: {
		reporter: 'mochawesome',
		reporterOptions: {
			reportDir: 'cypress/results/json_reports',
			overwrite: false,
			html: false,
			json: true,
			screenshotsFolder: 'cypress/results/screenshots',
			attachments: true,
		},
		screenshotOnRunFailure: true,
		video: false, // wyłączenie nagrywania video
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
		baseUrl: 'https://app.kadromierz.pl/',
		supportFile: 'cypress/support/e2e.ts',
		defaultCommandTimeout: 15000,
		pageLoadTimeout: 30000,
		requestTimeout: 10000,
		responseTimeout: 30000,
		execTimeout: 60000,
		taskTimeout: 60000,
		retries: {
			runMode: 2,
			openMode: 1,
		},
	},
})
