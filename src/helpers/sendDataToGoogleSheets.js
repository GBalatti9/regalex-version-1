export const sendDataToGoogleSheets = async (data) => {
    try {
        const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwUANIc7Gpcfo9_huG76u7msQjnt4H1enu3KTriXhUCRM_Ara6sjADdoGY2CPPNZu8B/exec';
        
        // Send raw JSON instead of form data
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answers: data
            })
        });
        // if (!response.ok) {
        //     return response;
        // }
        // const dataResponse = await response.json();
        return {success: true};
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
    }
};