export const sendDataToGoogleSheets = async (data) => {
    try {
        const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbziFK66QG9OsHzkrf_f-MjC_awbZj6pdUcXG3EL5Ab8KZMEyEAU1BlVDOYoS25fojmz/exec';
        
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