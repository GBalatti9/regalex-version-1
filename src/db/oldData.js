export const questions = [
    { id: 'Q1', type: 'question', text: 'Qué actividad disfrutás más' },

    { id: 'Q2', type: 'question', text: 'Qué tipo de comida te gusta' },
    { id: 'Q3', type: 'question', text: 'Con qué ingredientes te gusta la pizza' },
    { id: 'Q4', type: 'question', text: 'Con qué ingredientes te gusta la hamburguesa' },
    { id: 'Q5', type: 'question', text: 'Qué tipo de empanada te gusta' },
    { id: 'Q6', type: 'question', text: 'Con quién compartirías ese momento' },

    { id: 'Q7',  type: 'question', text: 'Que bebida/s te gustan más' },
    { id: 'Q8',  type: 'question', text: 'Que tipo de cerveza te gusta más' },
    { id: 'Q9',  type: 'question', text: 'Que tipo de vino te gusta más' },
    { id: 'Q10', type: 'question', text: 'Que tipo de fernet te gusta más' },
    { id: 'Q11', type: 'question', text: 'Que tipo de cerveza artesanal te gusta más' },
    { id: 'Q12', type: 'question', text: 'Que tipo de cerveza industrial te gusta más' },
    { id: 'Q13', type: 'question', text: 'Que tipo de vino tinto te gusta más' },
    { id: 'Q14', type: 'question', text: 'Que tipo de vino blanco te gusta más' },
    { id: 'Q15', type: 'question', text: 'Te interesa saber más sobre bebidas alcohólicas' },
    
    { id: 'Q16', type: 'question', text: 'Sabés cocinar' },
    { id: 'Q17', type: 'question', text: 'Te gustaría aprender a cocinar' },
    { id: 'Q18', type: 'question', text: 'Necesitás alguno de estos elementos de cocina' },
    { id: 'Q19', type: 'question', text: 'Te interesa saber más sobre cocina' },
]

export const options = [

    // --QUESTION 1--
    { id: 'O1', idQuestion: 'Q1', text: 'Comer',   idNextQuestion: 'Q2' },
    { id: 'O2', idQuestion: 'Q1', text: 'Tomar',   idNextQuestion: 'Q7' },
    { id: 'O3', idQuestion: 'Q1', text: 'Cocinar', idNextQuestion: 'Q16' },

    // --> COMER <--
    // --QUESTION 2--
    { id: 'O4', idQuestion: 'Q2', text: 'Pizza',       idNextQuestion: 'Q3' },
    { id: 'O5', idQuestion: 'Q2', text: 'Hamburguesa', idNextQuestion: 'Q4' },
    { id: 'O6', idQuestion: 'Q2', text: 'Empanadas',   idNextQuestion: 'Q5' },

    // --QUESTION 3--
    { id: 'O7', idQuestion: 'Q3', text: 'Queso',  idNextQuestion: 'Q6', idPrevQuestion: 'Q2', subSection: true, endSubSection: true },
    { id: 'O8', idQuestion: 'Q3', text: 'Jamón',  idNextQuestion: 'Q6', idPrevQuestion: 'Q2', subSection: true, endSubSection: true },
    { id: 'O9', idQuestion: 'Q3', text: 'Tomate', idNextQuestion: 'Q6', idPrevQuestion: 'Q2', subSection: true, endSubSection: true },

    // --QUESTION 4--
    { id: '10', idQuestion: 'Q4', text: 'Cheddar', idNextQuestion: 'Q6', idPrevQuestion: 'Q2', subSection: true, endSubSection: true },
    { id: '11', idQuestion: 'Q4', text: 'Panceta', idNextQuestion: 'Q6', idPrevQuestion: 'Q2', subSection: true, endSubSection: true },
    { id: '12', idQuestion: 'Q4', text: 'Tomate',  idNextQuestion: 'Q6', idPrevQuestion: 'Q2', subSection: true, endSubSection: true },

    // --QUESTION 5--
    { id: '13', idQuestion: 'Q5', text: 'Frita',    idNextQuestion: 'Q6', idPrevQuestion: 'Q2', subSection: true, endSubSection: true },
    { id: '14', idQuestion: 'Q5', text: 'Al horno', idNextQuestion: 'Q6', idPrevQuestion: 'Q2', subSection: true, endSubSection: true },

    // --QUESTION 6--
    { id: '16', idQuestion: 'Q6', text: 'Familia', idNextQuestion: 'Q1', endSection: true },
    { id: '17', idQuestion: 'Q6', text: 'Amigos',  idNextQuestion: 'Q1', endSection: true },
    { id: '18', idQuestion: 'Q6', text: 'Pareja',  idNextQuestion: 'Q1', endSection: true },

    // --> TOMAR <--
    // --QUESTION 7--
    { id: '19', idQuestion: 'Q7', text: 'Cerveza', idNextQuestion: 'Q8'  },
    { id: '20', idQuestion: 'Q7', text: 'Vino',    idNextQuestion: 'Q9'  },
    { id: '21', idQuestion: 'Q7', text: 'Fernet',  idNextQuestion: 'Q10' },

    // --QUESTION 8--
    { id: '22', idQuestion: 'Q8', text: 'Artesanal',  idNextQuestion: 'Q11', subSection: true },
    { id: '23', idQuestion: 'Q8', text: 'Industrial', idNextQuestion: 'Q12', subSection: true },

    // --QUESTION 9--
    { id: '24', idQuestion: 'Q9', text: 'Tinto',  idNextQuestion: 'Q13', subSection: true  },
    { id: '25', idQuestion: 'Q9', text: 'Blanco', idNextQuestion: 'Q14', subSection: true  },

    // --QUESTION 10--
    { id: '26', idQuestion: 'Q10', text: 'De autor',   idNextQuestion: 'Q15', subSection: true, endSubSection: true  },
    { id: '27', idQuestion: 'Q10', text: 'Industrial', idNextQuestion: 'Q15', subSection: true, endSubSection: true  },

    // --QUESTION 11--
    { id: '28', idQuestion: 'Q11', text: 'IPA',   idNextQuestion: 'Q15', subSection: true, endSubSection: true  },
    { id: '29', idQuestion: 'Q11', text: 'APA',   idNextQuestion: 'Q15', subSection: true, endSubSection: true  },
    { id: '30', idQuestion: 'Q11', text: 'Amber', idNextQuestion: 'Q15', subSection: true, endSubSection: true  },

    // --QUESTION 12--
    { id: '31', idQuestion: 'Q12', text: 'Quilmes', idNextQuestion: 'Q15', subSection: true, endSubSection: true   },
    { id: '32', idQuestion: 'Q12', text: 'Brahama', idNextQuestion: 'Q15', subSection: true, endSubSection: true   },
    { id: '33', idQuestion: 'Q12', text: 'Corona',  idNextQuestion: 'Q15', subSection: true, endSubSection: true   },

    // --QUESTION 13--
    { id: '34', idQuestion: 'Q13', text: 'Malbec',    idNextQuestion: 'Q15', subSection: true, endSubSection: true  },
    { id: '35', idQuestion: 'Q13', text: 'Carbenet',  idNextQuestion: 'Q15', subSection: true, endSubSection: true  },
    { id: '36', idQuestion: 'Q13', text: 'Pino Noir', idNextQuestion: 'Q15', subSection: true, endSubSection: true  },

    // --QUESTION 14--
    { id: '37', idQuestion: 'Q14', text: 'Dulce', idNextQuestion: 'Q15', subSection: true, endSubSection: true  },
    { id: '38', idQuestion: 'Q14', text: 'Seco',  idNextQuestion: 'Q15', subSection: true, endSubSection: true  },

    // --QUESTION 15--
    { id: '39', idQuestion: 'Q15', text: 'Sí', idNextQuestion: 'Q1', endSection: true, multipleChoice: false },
    { id: '40', idQuestion: 'Q15', text: 'No', idNextQuestion: 'Q1', endSection: true, multipleChoice: false },    

    // --> COCINAR <--
    // --QUESTION 16--
    { id: '41', idQuestion: 'Q16', text: 'Sí', idNextQuestion: 'Q18', multipleChoice: false },
    { id: '42', idQuestion: 'Q16', text: 'No', idNextQuestion: 'Q17', multipleChoice: false },

    // --QUESTION 17--
    { id: '43', idQuestion: 'Q17', text: 'Sí', idNextQuestion: 'Q18', multipleChoice: false },
    { id: '44', idQuestion: 'Q17', text: 'No', idNextQuestion: 'Q19', multipleChoice: false },

    // --QUESTION 18--
    { id: '45', idQuestion: 'Q18', text: 'Elemento 1', idNextQuestion: 'Q19' },
    { id: '46', idQuestion: 'Q18', text: 'Elemento 2', idNextQuestion: 'Q19' },
    { id: '47', idQuestion: 'Q18', text: 'Elemento 3', idNextQuestion: 'Q19' },

    // --QUESTION 19--
    { id: '48', idQuestion: 'Q19', text: 'Sí', idNextQuestion: 'Q1', multipleChoice: false, endSection: true },
    { id: '49', idQuestion: 'Q19', text: 'No', idNextQuestion: 'Q1', multipleChoice: false, endSection: true },
]

// { id: 'Q2', type: 'question', text: '¿Qué te gusta más?' },
// { id: 'Q3', type: 'question', text: '¿En qué momento lo disfrutás más?' },
// { id: 'Q4', type: 'question', text: '¿Qué tipo de comida te gusta más?' },
// { id: 'Q5', type: 'question', text: '¿Te gustan las experiencias gastronómicas?' },
// { id: 'Q6', type: 'question', text: 'Con quién compartirías ese momento' },
// { id: 'Q7',  type: 'question', text: '¿Tenés alguna bebida preferida?' },
// { id: 'Q8',  type: 'question', text: '¿Que tipo de cerveza te gusta más?' },

// { id: 'O4', idQuestion: 'Q2', text: 'Dulce',  idNextQuestion: 'Q3' },
// { id: 'O5', idQuestion: 'Q2', text: 'Salado', idNextQuestion: 'Q3' },
// { id: 'O7', idQuestion: 'Q3', text: 'Desayuno', idNextQuestion: 'Q4' },
// { id: 'O8', idQuestion: 'Q3', text: 'Almuerzo', idNextQuestion: 'Q4' },
// { id: 'O9', idQuestion: 'Q3', text: 'Merienda', idNextQuestion: 'Q4' },
// { id: '10', idQuestion: 'Q3', text: 'Cena',     idNextQuestion: 'Q4' },
// { id: '11', idQuestion: 'Q4', text: 'Italiana',    idNextQuestion: 'Q5'},
// { id: '12', idQuestion: 'Q4', text: 'Española',    idNextQuestion: 'Q5'},
// { id: '13', idQuestion: 'Q4', text: 'Parrillada',  idNextQuestion: 'Q5'},
// { id: '14', idQuestion: 'Q4', text: 'Oriental',    idNextQuestion: 'Q5'},
// { id: '15', idQuestion: 'Q4', text: 'Peruana',     idNextQuestion: 'Q5'},
// { id: '16', idQuestion: 'Q4', text: 'Vegetariana', idNextQuestion: 'Q5'},
// { id: '17', idQuestion: 'Q4', text: 'Vegana',      idNextQuestion: 'Q5'},
// { id: '18', idQuestion: 'Q5', text: 'Opción 1', idNextQuestion: 'Q6' },
// { id: '19', idQuestion: 'Q5', text: 'Opción 2', idNextQuestion: 'Q6' },
// { id: '20', idQuestion: 'Q5', text: 'Opción 3', idNextQuestion: 'Q6' },
// { id: '21', idQuestion: 'Q5', text: 'Opción 4', idNextQuestion: 'Q6' },
// { id: '22', idQuestion: 'Q5', text: 'Otra',     idNextQuestion: 'Q6' },
// { id: '23', idQuestion: 'Q6', text: 'Familia', idNextQuestion: 'Q1', endSection: true },
// { id: '24', idQuestion: 'Q6', text: 'Amigos',  idNextQuestion: 'Q1', endSection: true },
// { id: '25', idQuestion: 'Q6', text: 'Pareja',  idNextQuestion: 'Q1', endSection: true },
// { id: '26', idQuestion: 'Q6', text: 'Solo',    idNextQuestion: 'Q1', endSection: true },
// { id: '27', idQuestion: 'Q7', text: 'Cerveza', idNextQuestion: 'Q8'  },
// { id: '28', idQuestion: 'Q7', text: 'Vino',    idNextQuestion: 'Q9'  },
// { id: '29', idQuestion: 'Q7', text: 'Fernet',  idNextQuestion: 'Q10' },
// { id: '30', idQuestion: 'Q7', text: 'Whisky',  idNextQuestion: 'Q11' },
// { id: '31', idQuestion: 'Q7', text: 'Gin',     idNextQuestion: 'Q12' },
// { id: '32', idQuestion: 'Q7', text: 'Café',    idNextQuestion: 'Q13' },
// { id: '33', idQuestion: 'Q7', text: 'Té',      idNextQuestion: 'Q14' },
// { id: '34', idQuestion: 'Q7', text: 'Mate',    idNextQuestion: 'Q15' },
// { id: '35', idQuestion: 'Q8', text: 'Artesanal',  idNextQuestion: 'Q16', subSection: true },
// { id: '36', idQuestion: 'Q8', text: 'Industrial', idNextQuestion: 'Q17', subSection: true },