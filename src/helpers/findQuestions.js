// esta es una funcion para verificar si el usuario completó las categorías 'Comer', 'Música' y 'Deportes'

export const findQuestions = (answers) => {
    console.log({ answers });
    const categories = answers['¿Qué categorías/s disfrutás más?'];
    const findCategory = categories.filter((element) => ['Comer', 'Música', 'Deportes'].includes(element));

    if (findCategory.includes('Comer') && findCategory.includes('Música') && findCategory.includes('Deportes')) {
        console.log('incluye las tres');
        return;
    }

    let foodQ = {};
    let foodO = [];

    let musicQ = {};
    let musicO = [];

    let sportsQ = {};
    let sportsO = [];

    if (!findCategory.includes('Comer')) {
        foodQ = {
            id: 'Q8',
            type: 'question',
            text: '¿Te gustaría ir a alguno de estos lugares?',
            category: 'Preguntas random',
            lastForm: true,
        }
        foodO.push(
            { id: '47', idQuestion: 'Q8', text: 'Uptown BA', idNextQuestion: 'Q54', endSection: true, img: './uptown-bar.JPG' },
            { id: '48', idQuestion: 'Q8', text: 'Airport Palermo', idNextQuestion: 'Q54', endSection: true, img: './airport-bar.jpg' },
            { id: '49', idQuestion: 'Q8', text: 'The Hole Bar', idNextQuestion: 'Q54', endSection: true, img: './hole-bar.jpg' },
            { id: '50', idQuestion: 'Q8', text: 'Kenya Rooftop', idNextQuestion: 'Q54', endSection: true, img: './kenia-rooftop.jpg' },
            { id: '51', idQuestion: 'Q8', text: 'Victoria Brown Bar', idNextQuestion: 'Q54', endSection: true, img: './victoria-brown-bar.jpg' },
            { id: '52', idQuestion: 'Q8', text: 'No', idNextQuestion: 'Q54', endSection: true, img: './comer-ninguno-lugares.jpg' },
        )
    }

    if (!findCategory.includes('Música')) {
        musicQ = {
            id: 'Q54',
            type: 'question',
            text: '¿Hay algúno de estos artistas que sea tu favorito?',
            category: 'Preguntas random',
            lastForm: true,
        }

        musicO.push(
            { id: '271', idQuestion: 'Q54', text: 'Miranda', idNextQuestion: 'Q59', endSection: true },
            { id: '272', idQuestion: 'Q54', text: 'Emilia Mernes', idNextQuestion: 'Q59', endSection: true },
            { id: '273', idQuestion: 'Q54', text: 'David Lebón', idNextQuestion: 'Q59', endSection: true },
            { id: '274', idQuestion: 'Q54', text: 'Luciano Pereyra', idNextQuestion: 'Q59', endSection: true },
            { id: '275', idQuestion: 'Q54', text: 'Dread Mar I', idNextQuestion: 'Q59', endSection: true },
            { id: '276', idQuestion: 'Q54', text: 'La Konga', idNextQuestion: 'Q59', endSection: true },
            { id: '277', idQuestion: 'Q54', text: 'Luck Ra', idNextQuestion: 'Q59', endSection: true },
            { id: '278', idQuestion: 'Q54', text: 'La Beriso', idNextQuestion: 'Q59', endSection: true },
            { id: '279', idQuestion: 'Q54', text: 'La Vela Puerca', idNextQuestion: 'Q59', endSection: true },
            { id: '280', idQuestion: 'Q54', text: 'Babásonicos', idNextQuestion: 'Q59', endSection: true },
            { id: '281', idQuestion: 'Q54', text: 'El Mató a un Policía Motorizado', idNextQuestion: 'Q59', endSection: true },
            { id: '282', idQuestion: 'Q54', text: 'Ciro y Los Persas', idNextQuestion: 'Q59', endSection: true },
            { id: '283', idQuestion: 'Q54', text: 'El Kuelgue', idNextQuestion: 'Q59', endSection: true },
            { id: '284', idQuestion: 'Q54', text: 'El Cuarteto de Nos', idNextQuestion: 'Q59', endSection: true },
            { id: '285', idQuestion: 'Q54', text: 'Airbag', idNextQuestion: 'Q59', endSection: true },
            { id: '286', idQuestion: 'Q54', text: 'Palito Ortega', idNextQuestion: 'Q59', endSection: true },
            { id: '287', idQuestion: 'Q54', text: 'Fabiana Cantilo', idNextQuestion: 'Q59', endSection: true },
            { id: '288', idQuestion: 'Q54', text: 'Rubén Rada', idNextQuestion: 'Q59', endSection: true },
            { id: '289', idQuestion: 'Q54', text: 'No, ninguno', idNextQuestion: 'Q59', endSection: true },
        )
    }

    if (!findCategory.includes('Deportes')) {
        sportsQ = {
            id: 'Q59',
            type: 'question',
            text: '¿Te gustaria intentar alguna de estas opciones?',
            category: 'Preguntas random',
            lastForm: true,
        }
        sportsO.push(
            { id: '339', idQuestion: 'Q59', text: 'Túnel del viento', idNextQuestion: 'Q1', endSection: true, img: './tunel-viento.jpg' },
            { id: '340', idQuestion: 'Q59', text: 'Wakeboard', idNextQuestion: 'Q1', endSection: true, img: './wakeboard.jpg' },
            { id: '341', idQuestion: 'Q59', text: 'Paracaídas', idNextQuestion: 'Q1', endSection: true, img: './paracaidas.jpg' },
            { id: '342', idQuestion: 'Q59', text: 'Escalada', idNextQuestion: 'Q1', endSection: true, img: './escalada.jpg' },
            { id: '343', idQuestion: 'Q59', text: 'Kayak', idNextQuestion: 'Q1', endSection: true, img: './kayak.jpg' },
            { id: '344', idQuestion: 'Q59', text: 'Buceo', idNextQuestion: 'Q1', endSection: true, img: './buceo.jpg' },
            { id: '345', idQuestion: 'Q59', text: 'Arco y flecha', idNextQuestion: 'Q1', endSection: true, img: './arco-flecha.jpg' },
            { id: '346', idQuestion: 'Q59', text: 'Cabalgata', idNextQuestion: 'Q1', endSection: true, img: './cabalgata.jpg' },
            { id: '347', idQuestion: 'Q59', text: 'Navegar', idNextQuestion: 'Q1', endSection: true, img: './navegar.jpg' },
            { id: '348', idQuestion: 'Q59', text: 'Bungee Jumping', idNextQuestion: 'Q1', endSection: true, img: './bungee-jumping.jpg' },
            { id: '349', idQuestion: 'Q59', text: 'No', idNextQuestion: 'Q1', endSection: true, img: './conejo-no.png' },
        )
    }

    return [{ Q: foodQ, O: foodO, }, { Q: musicQ, O: musicO,}, { Q: sportsQ, O: sportsO }]
}