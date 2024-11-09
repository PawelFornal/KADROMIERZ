const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path')

export default defineConfig({
	env: {
		Login: 'pawelfornal91@gmail.com',
		Password: 'LaBm)}C^MMq6DhB',
		hideXHR: true,
		deleteConfirm: 'POTWIERDZAM',
	},
	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				// służy do odczytywania plików Excela
				readExcel: filePath => {
					const XLSX = require('xlsx')
					try {
						const workbook = XLSX.readFile(filePath)
						return workbook
					} catch (error) {
						return null
					}
				},
				// służy do wyszukania pliku w cypress/downloads
				findFile: pattern => {
					const downloadsFolder = 'cypress/downloads'
					const files = fs.readdirSync(downloadsFolder)
					const matchingFile = files.find(file =>
						file.match(new RegExp(pattern.replace(/\*/g, '.*'))),
					)
					return matchingFile ? path.join(downloadsFolder, matchingFile) : null
				},
				// Dodaje nowy task do czyszczenia folderu
				deleteDownloads: () => {
					const downloadsFolder = 'cypress/downloads'
					if (fs.existsSync(downloadsFolder)) {
						fs.readdirSync(downloadsFolder).forEach(file => {
							const filePath = path.join(downloadsFolder, file)
							fs.unlinkSync(filePath)
						})
					}
					return null
				},
			})
		},
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
		video: false,
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
		downloadsFolder: 'cypress/downloads', // folder na pobrane pliki
	},
})
