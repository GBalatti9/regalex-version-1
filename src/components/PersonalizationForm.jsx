import { motion } from "framer-motion";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const personalizationQuestion = [
    { id: 'Q1000', idQuestion: 'Q1000', text: '¿Te gusta algo de esto?', category: 'Preguntas random', lastForm: true },
    { id: 'Q1', text: 'Si luego de llenar el cuestionario, se te ocurrió algo que te gustaría que te regalen, escribilo acá abajo!' },
    { id: 'Q2', text: 'Querés...' },
    { id: 'Q3', text: '¿Queres que Regalex le envié estas recomendación a algún familiar o amigo?' },
    { id: 'Q4', text: 'Ingresar mail o ig de las personas a las que le tenemos que mandar las recomendaciones!', lastQuestion: true },
]

const personalizationOptions = [

    { id: 'O1', idQuestion: 'Q1000', idNextQuestion: 'Q1', text: 'Perfumes', img: '../../../random-perfumes.jpg', write: false, grid: true },
    { id: 'O2', idQuestion: 'Q1000', idNextQuestion: 'Q1', text: 'Accesorios/Bijuterie', img: '../../random-bijuterie.jpg', write: false, grid: true },
    { id: 'O3', idQuestion: 'Q1000', idNextQuestion: 'Q1', text: 'Juegos de mesa', img: '../../random-juego.jpg', write: false, grid: true },
    { id: 'O4', idQuestion: 'Q1000', idNextQuestion: 'Q1', text: 'Decoración', img: '../../random-decoracion.jpg', write: false, grid: true },
    { id: 'O5', idQuestion: 'Q1000', idNextQuestion: 'Q1', text: 'Set de resaltadores', img: '../../random-resaltadores.jpg', write: false, grid: true },
    { id: 'O6', idQuestion: 'Q1000', idNextQuestion: 'Q1', text: 'Glamping', img: '../../random-gampling.jpg', write: false, grid: true },
    { id: 'O7', idQuestion: 'Q1000', idNextQuestion: 'Q1', text: 'Stand notebook', img: '../../random-notebook.jpg', write: false, grid: true },
    { id: 'O8', idQuestion: 'Q1000', idNextQuestion: 'Q1', text: 'Set de mate', img: '../../random-set-mate.jpg', write: false, grid: true },
    { id: 'O9', idQuestion: 'Q1000', idNextQuestion: 'Q1', text: 'No', img: '../../conejo-no.png', write: false, grid: true },

    { id: '1', text: '', idQuestion: 'Q1', write: true, idNextQuestion: 'Q2', grid: false },

    { id: '2', text: 'Ver las recomendaciones', idQuestion: 'Q2', multipleChoice: false, img: '../../../recomendacion.png', idNextQuestion: 'Q3', write: false },
    { id: '3', text: 'Que sea sorpresa', idQuestion: 'Q2', multipleChoice: false, img: '../../../seguimiento.png', idNextQuestion: 'Q3', write: false },

    { id: '4', text: 'Sí', idQuestion: 'Q3', multipleChoice: false, idNextQuestion: 'Q4', write: false, grid: true },
    { id: '5', text: 'No', idQuestion: 'Q3', multipleChoice: false, endSection: true, write: false, grid: true, lastQuestionAllForm: true },
    { id: '6', text: 'Paso', idQuestion: 'Q3', multipleChoice: false, endSection: true, write: false, grid: true, lastQuestionAllForm: true },

    { id: '7', text: '', idQuestion: 'Q4', write: true, endSection: true, grid: false, lastQuestionAllForm: true },
]



export const PersonalizationForm = ({ answers }) => {
    const [index, setIndex] = useState(0);
    const [lastMessage, setLastMessage] = useState(false);

    const [answersPersonalizationForm, setAnswersPersonalizationForm] = useState({})

    const handleInputChange = ({ target }) => {
        const { name, value } = target;

        setAnswersPersonalizationForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }))

    }

    const handleSubmit = async (e, options) => {
        e.preventDefault();
        // console.log("ACA!!", { options });
        setIndex(index + 1);
        console.log(personalizationQuestion[index]);
        if (personalizationQuestion[index].lastQuestion) {
            setLastMessage(true);
        }

        if (personalizationQuestion[index].lastQuestionAllForm) {
            try {
                const response = await fetch("https://sheetdb.io/api/v1/55c8yhgkm2d5q", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: answers.data }), // Asegúrate de enviar `data` correctamente
                })
                console.log({ response });
            } catch (error) {
                console.log({ error });
            }
        }
    }

    return (
        <>
            {!lastMessage ?
                <div className="mx-auto w-full" >
                    <h4 className="font-bold"> {personalizationQuestion[index]?.category?.toUpperCase()} </h4>
                    <h3 className="text-center pt-2 pb-3"> {personalizationQuestion[index]?.text} </h3>
                    <form onSubmit={(e) => handleSubmit(e, personalizationOptions[index])}>
                        {/* <div className="grid grid-cols-3 text-center"> */}
                        {/* <div className={`${typeof(personalizationQuestion[index].img === 'string') ? 'grid grid-cols-3 text-center' : 'border flex justify-center items-center'}`} > */}
                        {/* <div className={`${personalizationOptions[index].img ? 'grid grid-cols-6 text-center' : 'border border-red-500'}`}> */}
                        <div className={`${personalizationOptions[index].img ? 'grid grid-cols-6 text-center' : 'border border-red-500'}`}>
                            {
                                personalizationOptions.map((option) => (
                                    <motion.div key={option.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className={`${option.grid ? 'col-span-2' : "border col-span-6 w-11/12 mx-auto"}`}
                                    // className={`${option.img ? '' : ''}`}
                                    >
                                        {
                                            option.idQuestion === personalizationQuestion[index].id &&
                                            <div className="w-full col-span-3">
                                                <div className='mx-auto'>
                                                    {option.img && <div className="h-28 w-6/12 mx-auto bg-center bg-cover" style={{ backgroundImage: `url(${option.img})` }}> </div>}
                                                </div>
                                                <div>
                                                    {
                                                        option.write
                                                            ? <Input type="text" className="border border-black grid-cols-3" onChange={(e) => handleInputChange(e, option.endSection)} name={personalizationQuestion[index]?.text} />
                                                            :
                                                            option.multipleChoice === false
                                                                ? <input type="radio" id={option.id} value={(option.text)} onChange={(e) => handleInputChange(e, option.text)} name={personalizationQuestion[index]?.text} />
                                                                :
                                                                <input type="checkbox" id={option.id} value={(option.text)} onChange={handleInputChange} name={personalizationQuestion[index]?.text} />
                                                    }
                                                    <Label htmlFor={option.id} className="pr-2"> {option.text} </Label>
                                                </div>
                                            </div>
                                        }
                                    </motion.div>
                                ))}
                        </div>
                        <div className="flex justify-end my-4">
                            <Button variants="default">Siguiente</Button>
                        </div>
                    </form>
                </div>
                :
                <div>

                    <p>Gracias por contestar</p>
                    <Button onClick={() => location.reload()}>Volver a empezar</Button>
                </div>
            }
        </>
    )
}
