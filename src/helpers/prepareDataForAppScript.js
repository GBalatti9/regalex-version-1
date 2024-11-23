export const prepareDataForAppScript = (answers) => {
    const transformedAnswers = Object.keys(answers).reduce((acc, key) => {
        const value = answers[key];
        acc[key] = Array.isArray(value) ? value.join(', ') : value; // Convert arrays to comma-separated strings
        return acc;
    }, {});

    return transformedAnswers;
};