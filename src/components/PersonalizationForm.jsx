import { motion } from "framer-motion";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import emailjs from 'emailjs-com';


const personalizationQuestion = [
    { id: 'Q1000', idQuestion: 'Q1000', text: '¿Te gusta algo de esto?', category: 'Preguntas random', lastForm: true },
    { id: 'Q1', text: 'Si luego de llenar el cuestionario, se te ocurrió algo que te gustaría que te regalen, escribilo acá abajo!' },
    { id: 'Q2', text: 'Querés...' },
    { id: 'Q3', text: '¿Queres que Regalex le envié estas recomendación a algún familiar o amigo?' },
    { id: 'Q4', text: 'Ingresar mail o ig de las personas a las que le tenemos que mandar las recomendaciones!', lastQuestionAllForm: true },
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
    { id: '6', text: '', idQuestion: 'Q4', write: true, endSection: true, grid: false, lastQuestionAllForm: true },
]



export const PersonalizationForm = ({ answers }) => {
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const [answersPersonalizationForm, setAnswersPersonalizationForm] = useState({})

    const handleInputChange = ({ target }, id) => {
        const { name, value } = target;

        setAnswersPersonalizationForm((prevForm) => {
            return {
                ...prevForm,
                [name]: value
            }
        })

    }
    // service_vta4w9c

    const handleSubmit = async (e, options) => {
        e.preventDefault();
        console.log("ACA!!", { answersPersonalizationForm });
        const allAnswers = { ...answers.data, ...answersPersonalizationForm }
        console.log({ allAnswers })
        if (options === "Q3") {
            setMessage('Gracias por confiarnos tu regalo ¡Estamos listos para que te regalen algo que te guste!');
            const isNo = answersPersonalizationForm["¿Queres que Regalex le envié estas recomendación a algún familiar o amigo?"];
            if (isNo === 'No') {
                emailjs.send(
                    'service_4de7s4s',
                    'template_jfawhus',
                    {
                        to_email: 'regalexbeta@gmail.com',
                        message: JSON.stringify(allAnswers, null, 2) // Aquí envías el contenido del objeto
                    },
                    '24L6pzMzinjY7EPY9'
                ).then(response => {
                    console.log('Correo enviado exitosamente', response.status, response.text);
                }).catch(err => console.error('Error al enviar el correo:', err));
            }
            return;
        }
        console.log({ options });

        if (!personalizationQuestion[index].lastQuestionAllForm) {
            console.log("no es la ultima");
            
            setIndex(index + 1);
        }

        console.log("HANDLE SUBMIT:", personalizationQuestion[index]);




        if (personalizationQuestion[index].lastQuestionAllForm) {

            emailjs.send(
                'service_4de7s4s',
                'template_jfawhus',
                {
                    to_email: 'regalexbeta@gmail.com',
                    message: JSON.stringify(allAnswers, null, 2) // Aquí envías el contenido del objeto
                },
                '24L6pzMzinjY7EPY9'
            ).then(response => {
                console.log('Correo enviado exitosamente', response.status, response.text);
                setMessage('Gracias por confiarnos tu regalo !Estamos listos para que te regalen algo que te guste!')
            }).catch(err => console.error('Error al enviar el correo:', err));
            return;
            try {
                const response = await fetch("https://sheetdb.io/api/v1/55c8yhgkm2d5q", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: allAnswers }), // Asegúrate de enviar `data` correctamente
                })
                console.log({ response });
                setMessage('Gracias por confiarnos tu regalo !Estamos listos para que te regalen algo que te guste!')
            } catch (error) {
                console.log({ error });
            }
        }
    }

    return (
        <>
            {!message ?
                personalizationQuestion[index].id === "Q2" ?
                    <div>
                        <h3 className="text-center pt-2 pb-3"> {personalizationQuestion[index]?.text} </h3>
                        <form onSubmit={(e) => handleSubmit(e, personalizationOptions[index])} >
                            <div className="flex flex-col sm:flex-row justify-around mx-auto py-5 items-center">
                                {[personalizationOptions[10], personalizationOptions[11]].map((option) => (
                                    <div key={option.id}>
                                        <div className='mx-auto'>
                                            {option.img && <div className="h-[450px] w-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${option.img})` }}> </div>}
                                        </div>
                                        {
                                            option.multipleChoice === false
                                                ? <input type="radio" id={option.id} value={(option.text)} onChange={(e) => handleInputChange(e, option.text)} name={personalizationQuestion[index]?.text} />
                                                :
                                                <input type="checkbox" id={option.id} value={(option.text)} onChange={handleInputChange} name={personalizationQuestion[index]?.text} />
                                        }
                                        <Label htmlFor={option.id} className="pr-2"> {option.text} </Label>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end my-4">
                                <Button variants="default">Siguiente</Button>
                            </div>
                        </form>
                    </div>
                    :
                    personalizationQuestion[index].id === "Q3" ?
                        <div>
                            <h3 className="text-center pt-2 pb-3"> {personalizationQuestion[index]?.text} </h3>
                            <form onSubmit={(e) => handleSubmit(e, personalizationQuestion[index].id)} >
                                <div className="flex w-10/12 justify-around mx-auto py-5">
                                    {[personalizationOptions[12], personalizationOptions[13]].map((option) => (
                                        <div key={option.id}>
                                            <input type="radio" id={option.id} value={(option.text)} onChange={(e) => handleInputChange(e, personalizationQuestion[index].id)} name={personalizationQuestion[index]?.text} />
                                            <Label htmlFor={option.id} className="pr-2"> {option.text} </Label>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end my-4">
                                    <Button variants="default">Siguiente</Button>
                                </div>
                            </form>
                        </div>
                        :
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
                                                className={`${option.grid ? 'col-span-2' : "col-span-6 w-11/12 mx-auto"}`}
                                            // className={`${option.img ? '' : ''}`}
                                            >
                                                {
                                                    option.idQuestion === personalizationQuestion[index].id &&
                                                    <div className="w-full col-span-3">
                                                        <div className='mx-auto'>
                                                            {option.img && <div className="h-28 w-10/12 mx-auto bg-center bg-cover border rounded-md shadow-sm" style={{ backgroundImage: `url(${option.img})` }}> </div>}
                                                        </div>
                                                        <div>
                                                            {
                                                                option.write
                                                                    ? <Input type="text" className="border rounded grid-cols-3" onChange={(e) => handleInputChange(e, option.endSection)} name={personalizationQuestion[index]?.text} />
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

                    <p>{message}</p>
                    {/* <Button onClick={() => location.reload()}>Volver a empezar</Button> */}
                </div>
            }
        </>
    )
}
