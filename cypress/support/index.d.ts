declare namespace Cypress {
    interface Chainable<Subject> {
        login(Login: string, Password: string): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable {
        acceptCookies(): Chainable<void>
    }
}

declare namespace Cypress {
    interface Chainable<Subject> {
        selectDropdownElement(options: DropdownSelectOptions): Chainable<Element>
    }
}

declare namespace Cypress {
    interface Chainable {
        generateReport(reportName: ReportName): Chainable<void>
    }
}

namespace Cypress {
    interface Chainable {
        compareExcelFiles(templatePath: string, downloadedFilePattern: string): void;
    }
}


