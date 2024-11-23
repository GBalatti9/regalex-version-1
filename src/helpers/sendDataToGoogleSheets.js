export const sendDataToGoogleSheets = async (data) => {
    try {
        const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzNwBsE-Ci48t0X9aubgWvP4iX2EU-ewvfj91mw9xC_66EJ7zi25Hms89KMJoxZAJjP/exec';
        
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ answers: data }),
        });

        const result = await response.json();
        console.log('Datos guardados en Google Sheets:', result);
        return result;
    } catch (error) {
        console.error('Error al guardar en Google Sheets:', error);
        throw error;
    }
};