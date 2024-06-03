import { motion } from "framer-motion";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const personalizationQuestion = [
    { id: 'Q1', text: 'Si luego de llenar el cuestionario, se te ocurrió algo que te gustaría que te regalen, escribilo acá abajo!' },
    { id: 'Q2', text: 'Querés...' },
    { id: 'Q3', text: '¿Queres que Regalex le envié estas recomendación a algún familiar o amigo?' },
    { id: 'Q4', text: 'Ingresar mail o ig de las personas a las que le tenemos que mandar las recomendaciones!' },
]

const personalizationOptions = [
    { id: '1', text: '', idQuestion: 'Q1', write: true, idNextQuestion: 'Q2' },

    { id: '2', text: 'Ver las recomendaciones', idQuestion: 'Q2', multipleChoice: false, idNextQuestion: 'Q3' },
    { id: '3', text: 'Que sea sorpresa', idQuestion: 'Q2', multipleChoice: false, idNextQuestion: 'Q3' },

    { id: '4', text: 'Sí', idQuestion: 'Q3', multipleChoice: false, idNextQuestion: 'Q4' },
    { id: '5', text: 'No', idQuestion: 'Q3', multipleChoice: false, endSection: true },

    { id: '6', text: '', idQuestion: 'Q4', write: true, endSection: true },
]



export const PersonalizationForm = () => {
    const [index, setIndex] = useState(0);
    const [lastMessage, setLastMessage] = useState(false)

    const handleInputChange = ({ target }, endSection) => {
        console.log(target.name, target.value);
        console.log({ endSection });
        if (endSection) {
            setLastMessage(true);
        }
    }

    const handleSubmit = (e, endSection) => {
        e.preventDefault();
        setIndex(index + 1);
    }

    useEffect(() => {
        console.log(personalizationQuestion[index]);
    }, [index])

    return (
        <>
            {!lastMessage ?
                <div className="mx-auto">
                    <h4 className="font-bold"> {personalizationQuestion[index]?.category?.toUpperCase()} </h4>
                    <h3 className="text-center pt-2 pb-3"> {personalizationQuestion[index]?.text} </h3>
                    <form onSubmit={handleSubmit}>
                        <div
                            style={{
                                // display: `${currentOptions.length > 10 ? 'grid' : ''}`,
                                // gridTemplateColumns: `${(currentOptions.length > 10) && '1fr 1fr'}`,
                                // gap: `${hasImage && '10px'}`, 
                                alignItems: 'center',
                            }}>
                            {
                                personalizationOptions.map((option) => (
                                    <motion.div key={option.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        {
                                            option.idQuestion === personalizationQuestion[index].id &&
                                            <div className="mx-auto w-11/12 text-center">
                                                <Label htmlFor={option.id} className="pr-2"> {option.text} </Label>
                                                {
                                                    option.write
                                                        ? <Input type="text" onChange={(e) => handleInputChange(e, option.endSection)} name={personalizationQuestion[index]?.text} />
                                                        :
                                                        option.multipleChoice === false
                                                            ? <input type="radio" id={option.id} value={JSON.stringify(option)} onChange={(e) => handleInputChange(e, option.endSection)} name={personalizationQuestion[index]?.text} />
                                                            :
                                                            <input type="checkbox" id={option.id} value={JSON.stringify(option)} onChange={(e) => handleInputChange(e, option.endSection)} name={personalizationQuestion[index]?.text} />
                                                }
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
                : <p>Gracias por contestar</p>
            }
        </>
    )
}
