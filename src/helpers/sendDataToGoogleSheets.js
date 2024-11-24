export const sendDataToGoogleSheets = async (data) => {
    try {
        const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9hZ7JpL95852hkUdqZiE6KtBRW1lTkhMjNsNuwVjuhp2i7NKpKrdF0oulFdYf9A_f/exec';
        
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