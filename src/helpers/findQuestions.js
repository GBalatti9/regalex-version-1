// esta es una funcion para verificar si el usuario completó las categorías 'Comer', 'Música' y 'Deportes'

export const findQuestions = ( answers ) => {
    const categories = answers['¿Qué categorías/s disfrutás más?'];
    const findCategory = categories.filter(( element ) => ['Comer', 'Música', 'Deportes'].includes(element));

    if (!findCategory.includes('Comer')) {
        console.log();
    }
}