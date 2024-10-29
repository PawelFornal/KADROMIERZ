export const AUTH_TOKEN = '000034f3-kd01-4f08-a8d2-f52c3a6c';
export const API_URL = 'https://api.kadromierz.pl/v2/';

export const randomString = (noOfCharacters: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let generatedRandomString = '';

    const firstChar = characters.substring(0, 26); // Tylko wielkie litery
    generatedRandomString += firstChar.charAt(Math.floor(Math.random() * firstChar.length));

    for (let i = 1; i < noOfCharacters; i += 1) {
        const randomNo = Math.floor(Math.random() * characters.length);
        generatedRandomString += characters.substring(randomNo, randomNo + 1);
    }

    return generatedRandomString;
};

export const POLISH_MONTHS = [
    'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec',
    'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'
];

export const REPORTS = {
    // Ewidencja czasu pracy
    DETAILED_TIME_REPORT: 'Szczegółowy raport czasu pracy',
    SUMMARY_TIME_REPORT: 'Sumaryczny raport czasu pracy',
    TIME_SHEET_CARD: 'Karta ewidencji czasu pracy',
    SUMMARY_TIME_SHEET: 'Sumaryczne zestawienie czasu pracy',
    MONTHLY_TIME_SHEET: 'Miesięczna karta ewidencji czasu pracy',
    ABSENCES: 'Nieobecności',
    ATTENDANCE_REPORT: 'Raport obecności',

    // Systemy kadrowo-płacowe
    COMARCH_EXPORT: 'Eksport do systemu kadrowo-płacowego Comarch Optima',
    R2PLATNIK_ATTENDANCE_EXPORT: 'Eksport obecności do systemu R2Płatnik',
    ENOVA_EXPORT: 'Eksport do systemu kadrowo-płacowego Enova',
    ADP_EXPORT: 'Eksport do systemu kadrowo-płacowego ADP',
    R2PLATNIK_ABSENCE_EXPORT: 'Eksport nieobecności do systemu R2Płatnik',
    R2PLATNIK_SCHEDULE_EXPORT: 'Eksport harmonogramu do systemu R2Płatnik',
    SAGE_EXPORT: 'Eksport do systemu kadrowo-płacowego Sage',

    // Raporty operacyjne
    SCHEDULE_VS_EXECUTION: 'Plan vs wykonanie',
    OVERTIME_REPORT: 'Nadgodziny dobowe i średniotygodniowe',

    // Efektywność i sprzedaż
    SUMMARY_SPMH: 'Sumaryczne zestawienie SPMH',
    DAILY_SPMH: 'Dzienne zestawienie SPMH',
    WORKING_TIME_BY_CONDITIONS: 'Czas pracy z podziałem na warunki zatrudnienia i stanowiska',
    DAILY_SALES: 'Dzienne zestawienie sprzedaży'
} as const
export type ReportName = typeof REPORTS[keyof typeof REPORTS]