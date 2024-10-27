export const randomString = (noOfCharacters: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let generatedRandomString = '';

    // Pierwsza litera - zawsze wielka
    const firstChar = characters.substring(0, 26); // Tylko wielkie litery
    generatedRandomString += firstChar.charAt(Math.floor(Math.random() * firstChar.length));

    // Pozostałe znaki
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

// export const formatDateRange = (startDate: string, endDate: string) => {
//     const formatSingleDate = (date: string) => {
//         return date.split('.').slice(0, 2).join('.');
//     };

//     return `${formatSingleDate(startDate)} - ${formatSingleDate(endDate)}`;
// };