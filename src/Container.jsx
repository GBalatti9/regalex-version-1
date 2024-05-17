import { useEffect, useState } from "react"
import { options, questions } from "./db/data"
import { findIndex } from "./helpers/findIndex";
import { includesSection } from "./helpers/includesSection";
import { FinalMessage } from "./components/FinalMessage";
import { motion } from "framer-motion";
import { findQuestions } from "./helpers/findQuestions";
import { FirstForm } from "./components/firstForm";
import { Button } from "./components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./components/ui/input";
import { Calendar } from "./components/ui/calendar";
import { Card } from "./components/ui/card";
import { Checkbox } from "@radix-ui/react-checkbox";

// USERANSWERS es simplemente para almacenar TODAS las respuestas del usuario.
let userAnswers = [];
// userAnswersWithId es para poder decidir cómo va a ser el flujo de las preguntas.
let userAnswersWithId = [];

let pendingQuestions = [];

let end;

let inputValue = '';
let inputTextFormatted = {
  text: '',
  idNextQuestion: ''
};
export const Container = () => {

  // ID ACTUAL
  const [currentId, setcurrentId] = useState('Q1');
  // NEXT QUESTION ID
  const [selectedOption, setSelectedOption] = useState();
  // TODAS LAS RESPUESTAS DEL USUARIO
  const [answers, setAnswers] = useState([]);

  const [lastQuestion, setLastQuestion] = useState(false);

  const [hasImage, setHasImage] = useState(false);

  const [disabled, setDisabled] = useState(true);
  const [firstDisabled, setFirstDisabled] = useState(true);

  const [displayFirst, setDisplayFirst] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);

  // const currentQuestion = ( questions ) => {
  //   return questions.find((question) => question.id === currentId);
  // }
  // const currentQuestion = questions.find((question) => question.id === currentId);
  // const currentOptions = options.filter((option) => option.idQuestion === currentId);
  const optionsHaveImage = currentOptions.filter((option) => Object.keys(option).includes('img'));

  useEffect(() => {
    const currentQuestionFn = ( questions ) => {
      const questionsArr = questions.find(( question ) => question.id === currentId)
      setCurrentQuestion(questionsArr);
    }
    const currentOptionsFn = ( options ) => {
      const optionsArr = options.filter(( option ) => option.idQuestion === currentId);
      setCurrentOptions(optionsArr)
    }
    
    currentQuestionFn(questions);
    currentOptionsFn(options);

    console.log({ currentQuestion, currentOptions });
  }, [currentId])

  useEffect(() => {
    if (optionsHaveImage.length > 0) {
      setHasImage(true);
    } else {
      setHasImage(false);
    }

  }, [currentOptions])

  // CUANDO CAMBIA EL ID, SE VACÍA EL ARRAY PARA QUE SE VAYAN ALMACENANDO LAS RESPUESTAS POR CADA PREGUNTA.
  useEffect(() => {
    userAnswers = [];
    userAnswersWithId = [];
  }, [currentId])

  const handleInputChange = ({ target }, nextQuestionId, multipleChoice, endSection, endSubSection, idPrevQuestion) => {
    const { name, value, checked, type } = target;
    checked && setDisabled(false);
    console.log('Handle input change', { name, value, checked, type, nextQuestionId, endSection, endSubSection, idPrevQuestion });

    // ACA SE MANEJA EL CASO EN EL QUE EL USUARIO COMPLETA LA OPCIÓN "OTRO/A".
    if (type === 'text') {
      inputTextFormatted = { text: value, idNextQuestion: nextQuestionId }
      if (endSection !== undefined) { inputTextFormatted.endSection = endSection }
      if (endSubSection !== undefined) { inputTextFormatted.endSubSection = endSubSection }
      if (idPrevQuestion !== undefined) { inputTextFormatted.idPrevQuestion = idPrevQuestion }
      if (inputTextFormatted.text.length > 0) { setDisabled(false) } else { setDisabled(true) }
      console.log({ inputTextFormatted });
      document.querySelectorAll('input[type=radio], input[type=checkbox]').forEach(input => input.checked = false);
      inputValue = value;
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [name]: inputValue
      }))
      console.log({ answers });
      return;
    }
    console.log({ inputTextFormatted });
    inputTextFormatted = { text: '', idNextQuestion: '' }
    const objectValue = JSON.parse(value);
    const textValue = objectValue.text;
    // console.log({textValue});
    // return console.log(JSON.parse(value));

    if (userAnswers.length > 0) {

      // Para el caso de radio. Los inputs de tipo radio tienen la propiedad checked también pero nunca llega en false ya que si una opción esta cliqueada y se la vuelve a cliquear, no se descliquea, la unica forma de descliquear es seleccionando otra opción. Lo que se hace con los radio es sobreescribir el array userAnswers. Es decir, como siempre se puede elegir una unica opcion, al utilizar el push se van acumulando esas opciones cuando en la pantalla el usuario ve que tiene seleccionada solo una. Por lo tanto, la manera de manejarlo es ir sobreescribiendo a medida que el usuario cambie de idea.

      // Se cargan los demás elementos
      if (checked) {

        if (multipleChoice === false) {
          userAnswers = [textValue];
          userAnswersWithId = [objectValue];
        } else {
          userAnswers.push(textValue);
          userAnswersWithId.push(objectValue)
        }

      } else {
        const index = findIndex(userAnswers, textValue);
        userAnswers.splice(index, 1);
        userAnswersWithId.splice(index, 1);

        // Si un elemento llega con checked === false, entonces hay que verificar que el nextQuestionId no sea igual al selectedOption que determina cuál va a ser la siguiente pregunta. En caso de que sea igual, hay que reemplazar el valor de selectedOption por el primero que se encuentre en el array de userAnswersWithId. 
        userAnswers.length === 0 && setDisabled(true);
        nextQuestionId === selectedOption ? setSelectedOption(userAnswersWithId[0].idNextQuestion) : '';
      }

    } else {
      // Se carga el primer elemento en el array userAnswers
      setSelectedOption(nextQuestionId);
      userAnswers.push(textValue);
      userAnswersWithId.push(objectValue)
      console.log('Primer elemento del array: ' + textValue);
    }

    // console.log( {userAnswers, userAnswersWithId} );

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: userAnswers
    }))

    // console.log({ answers });
    // console.log({ nextQuestionId });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.length > 0 ? userAnswers.push(inputValue) : ''
    console.log("INPUT TEXT FORMATTED", { inputTextFormatted });
    
    Object.values(inputTextFormatted).length > 0 ? userAnswersWithId.push(inputTextFormatted) : '';
    // userAnswersWithId.push(inputTextFormatted);
    if (userAnswers.length === 0) return;
    console.log({ userAnswers });
    console.log({ userAnswersWithId });
    inputValue = '';
    inputTextFormatted = '';
    // Primero se chequea que exista la propiedad endSubSection, luego lo que se va a verificar si en pendingQuestion hay mas de una opcion seleccionada de la pregunta que tiene el mismo id que idPrevQuestion porque si hay una sola no es necesario. Si hay una sola la constante hasEndSubSection va a dar -1 y se maneja en el else del if.
    const hasEndSubSection = includesSection(userAnswersWithId, 'endSubSection');
    const hasEndSection = includesSection(userAnswersWithId, 'endSection');
    console.log({ hasEndSection, hasEndSubSection });
    if (hasEndSubSection) {

      // Si hasEndSubSection es true, entonces se va a buscar el id del primer elemento en pendingQuestions que haya quedado pendiente para recorrer el bucle interno antes de seguir en el formulario. Se compara el idQuestion de el elemento en pendingQuestion con el idPrevQuestion del primer elemento de las respuestas que recién se seleccionaron. Ese idPrevQuestion hace referencia a la pregunta en donde se ramificó el cuestionario. Entonces, toma esa primera opción pendiente y se pasa a setcurrentId con el idNextQuestion que es la pregunta que le sigue a la opción seleccionada que estaba guardada en pendingQuestions. 
      const hasPendingQuestionsIndex = pendingQuestions.findIndex((element) => element.idQuestion === userAnswersWithId[0].idPrevQuestion);
      console.log({ hasPendingQuestionsIndex });
      if (hasPendingQuestionsIndex !== -1) {
        setcurrentId(pendingQuestions[hasPendingQuestionsIndex].idNextQuestion);
        pendingQuestions.splice(hasPendingQuestionsIndex, 1);
      } else {
        // Este if es para controlar el caso en el que un elemento tenga tanto endSubSection como endSection. Si el item tiene endSubSection pero despues de esa pregunta no viene ninguna, por ende va a tener endSection también y la idea es que finalice el questionario, no que vuelva al Q1.
        if (hasEndSection) {
          const end = findQuestions(answers);
          setCurrentQuestion(end);
          console.log({ currentQuestion });
          setLastQuestion(true);
        }
        setcurrentId(userAnswersWithId[0].idNextQuestion);
      }
      return;
    }

    // Esto se aplica si es la última pregunta de una categoria. Ej, la ultima pregunta de comer.

    if (hasEndSection) {
      // console.log('endSection perroooo');
      // if (pendingQuestions.length > 0) {
      //   // ACA HAY QUE ENCONTRAR LA OPCION QUE TENGA UN ID DISTINTO A LOS DEMÁS PARA GUITARRA
      //   setcurrentId(pendingQuestions[0].idNextQuestion);
      //   console.log({ pendingQuestions });
      //   return pendingQuestions.splice(0, 1);
      // } else {
      //   return setLastQuestion( true );
      // }
      console.log("HAS END SECTION", { userAnswersWithId });
      const pendingFirstQuestions = pendingQuestions.find((element) => element.idQuestion === 'Q1');
      const index = pendingQuestions.find((element) => element.idQuestion === 'Q1');
      pendingQuestions.splice(index, 1);
      if (pendingFirstQuestions) {
        return setcurrentId(pendingFirstQuestions.idNextQuestion)
      } else {
        console.log({ end });
        if (!currentQuestion.lastForm) {
          console.log('primera vez!!!!');
          end = findQuestions(answers);
        }
        // console.log("END 194",  end[0] );
        console.log({ end });
        if (end.length > 0) {
          setCurrentQuestion(() => end[0].Q);
          setCurrentOptions(end[0].O);
          end.shift();
          console.log("END 222", { end });
          console.log("CURRENT QUESTION: ",{ currentQuestion });
          return 
        }
        return setLastQuestion(true);
      }
    }
    // Acá se chequea si el usuario seleccionó más de una opción y en caso de haber seleccionado más de una va a tomar la primera opción seleccionada y comenzar su ciclo de preguntas. FALTA VER: como hacer para que el usuario vuelva a las preguntas que le quedan pendiente. Ver como hacer para utilizar el endSubSection y el endSection.

    if (userAnswersWithId.length > 1) {
      console.log({ userAnswersWithId });
      // Antes de guardar en pendingQuestions hay que chequear que nextQuestionId sea diferente entre los objetos.
      const allIdsEqual = userAnswersWithId.every((answer, index, array) => {
        return index === 0 || answer.idNextQuestion === array[0].idNextQuestion;
      });

      if (allIdsEqual) {
        // Si todos los ids son iguales, simplemente agarra el nextId del primero y sigue
        setcurrentId(userAnswersWithId[0].idNextQuestion);
      } else {
        // Si todos los ids son distintos, agarra el primero y guarda los demás porque son preguntas pendientes.
        setcurrentId(userAnswersWithId[0].idNextQuestion);
        userAnswersWithId.shift();
        pendingQuestions.push(...userAnswersWithId);
        console.log({ pendingQuestions });
      }
    } else {
      if (selectedOption === undefined) {
        // console.log('Estoy en selecetedOption === undefined');
        setcurrentId(userAnswersWithId[0].idNextQuestion);
      } else {
        // setcurrentId( selectedOption );
        setcurrentId(userAnswersWithId[0].idNextQuestion);
      }
    }
    // console.log({ selectedOption });
    // console.log( answers );
    // Este setDisabled cambia el estado luego de enviar la respuesta para que la siguiente pregunta arranque con el boton deshabilitado.
    setDisabled(true);
  }

  const [userInfo, setUserInfo] = useState({
    email: '',
    date: ''
  });

  const handleInputChangeFirstForm = ({ target }) => {
    const { name, value } = target;
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      [name]: value,
    }));
  }

  useEffect(() => {
    userInfo.email.length !== 0 && userInfo.date.length !== 0 ? setFirstDisabled(false) : setFirstDisabled(true);
  }, [userInfo])

  const handleSubmitFirstForm = (e) => {
    e.preventDefault();
    setDisplayFirst(false);
  }

  return (
    <div className="bg-amber-300 min-h-screen pb-12">
      <h1 className="font-bold text-center text-2xl py-4">Regalex</h1>
      <Card className="flex w-4/12 mx-auto p-4 bg-white shadow-2xl">
        {
          displayFirst &&
          <div className="w-full text-center">
            <form onSubmit={handleSubmitFirstForm} className="w-full mx-auto">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Label htmlFor="email" className="font-bold pb-2">Mail</Label>
                <Input type="email" name="email" id="email" onChange={handleInputChangeFirstForm} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Label htmlFor="date" className="font-bold py-2">Fecha de nacimiento</Label>
                <div className="flex justify-center">
                <input type="date" name="date" id="date" onChange={handleInputChangeFirstForm} />
                  {/* <Calendar mode="single" onChange={ handleInputChangeFirstForm }/> */}
                </div>
                {/* <Input type="date" name="date" id="date" onChange={handleInputChangeFirstForm} /> */}
              </div>
              <div className="flex justify-end pt-2">
                <Button variants="default" disabled={firstDisabled}>Empezar</Button>
              </div>
            </form>
          </div>
        }
        {
          lastQuestion
            ? <FinalMessage />
            :
            !displayFirst &&
            <div className="mx-auto">
              <h4 className="font-bold"> {currentQuestion?.category?.toUpperCase()} </h4>
              <h3 className="text-center pt-2 pb-3"> {currentQuestion?.text} </h3>
              <form onSubmit={handleSubmit}>
                <div 
                style={{
                  display: `${hasImage || currentOptions.length > 10 ? 'grid' : ''}`,
                  gridTemplateColumns: `${(hasImage || currentOptions.length > 10) && '1fr 1fr'}`,
                  // gap: `${hasImage && '10px'}`, 
                  alignItems: 'center',
                }}>
                  {
                    currentOptions.map((option) => (
                      <motion.div key={option.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                      >
                        {option.img && <div style={{ display: 'flex', justifyContent: 'center' }}><img src={option.img} style={{ width: '100px' }}></img></div>}
                        <div className="mx-auto w-11/12 text-center">
                          <Label htmlFor={option.id} className="pr-2"> {option.text} </Label>
                          {
                            option.write
                              ? <Input type="text" onChange={(e) => handleInputChange(e, option.idNextQuestion, option.multipleChoice, option.endSection, option.endSubSection, option.idPrevQuestion)} name={currentQuestion.text} value={inputTextFormatted.text}/>
                              :
                              option.multipleChoice === false
                                ? <input type="radio" id={option.id} value={JSON.stringify(option)} onChange={(e) => handleInputChange(e, option.idNextQuestion, option.multipleChoice)} name={currentQuestion?.text} />
                                : 
                                <input type="checkbox" id={option.id} value={JSON.stringify(option)} onChange={(e) => handleInputChange(e, option.idNextQuestion, option.multipleChoice)} name={currentQuestion?.text} />
                          }
                        </div>
                      </motion.div>
                    ))
                  }
                </div>
                <div className="flex justify-end my-4">
                  <Button variants="default" disabled={disabled}>Siguiente</Button>
                </div>
              </form>
            </div>
        }
      </Card>
    </div>
  )
}
