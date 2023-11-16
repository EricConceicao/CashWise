import { useState } from "react";
import { GiNotebook } from 'react-icons/gi';
import { MdOutlineQuiz } from 'react-icons/md';
import { Form } from 'react-bootstrap';
import Content from '../layouts/Content';

//componente - ícone
function Quiz() {
    const [show, setShow] = useState(false);
    const [questions, setQuestions] = useState([
        { id: 1, text: 'Qual é a sua renda mensal?', answer: '', type: 'number' },
        { id: 2, text: 'Valor gasto com moradia?', answer: '', type: 'number' },
        { id: 3, text: 'Valor gasto com alimentação?', answer: '', type: 'number' },
        { id: 4, text: 'Valor gasto com transporte?', answer: '', type: 'number' },
        { id: 5, text: 'Valor gasto com lazer?', answer: '', type: 'number' },
        { id: 6, text: 'Valor gasto com saúde?', answer: '', type: 'number' },
        { id: 7, text: 'Valor gasto com educação?', answer: '', type: 'number' },
        { id: 8, text: 'Valor gasto com dívidas ?', answer: '', type: 'number' },
        { id: 9, text: 'Valor que pretende investir por mês?', answer: '', type: 'number' },
        { id: 10, text: 'Qual é o seu objetivo financeiro de longo prazo?', answer: '', type: 'text' },
        { id: 11, text: 'Tem algum objetivo financeiro de médio prazo?', answer: '', type: 'text' },
    ]);

    const handleAnswerChange = (e, questionId) => {
        const updatedQuestions = questions.map((q) =>
            q.id === questionId ? { ...q, answer: e.target.value } : q
        );
        setQuestions(updatedQuestions);
    };
    //Aqui precisa modificar para enviar as respostas para o banco se quizermos usar a informação depois
    const handleQuizSubmit = () => {
        // colocar aqui para enviá-las para um servidor, agora só mostra
        console.log('Respostas:', questions);
    };

    const QuizContainer = {

        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
        background: '#213740',
        padding: '20px',
        border: '1px solid #ccc',
        bordeRadius: '5px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
        MaxWidth: '400px', 
    }

    const buttonStyle = {
        margin: '2px',
        borderRadius: '8px',

    }

    return (
        <>
            {show === false && <GiNotebook size={200} onClick={() => setShow(!show)} />}

            {show ? (

                <Content>
                    <div className="container-fluid" style={QuizContainer} >
                        <Form>
                            <div className="jumbotron text-center" id='title' >
                                <h1 className="p-2">Quizz</h1>
                            </div>
                            {questions.map((question) => (
                                <Form.Group key={question.id} controlId={`question${question.id}`}>
                                    <Form.Label>{question.text}</Form.Label>
                                    <Form.Control
                                        type={question.type}
                                        placeholder="Digite sua resposta"
                                        value={question.answer}
                                        onChange={(e) => handleAnswerChange(e, question.id)}
                                    />
                                </Form.Group>
                            ))}
                            <button onClick={handleQuizSubmit} type="button" style={buttonStyle}>
                                ENVIAR
                            </button>
                            <button onClick={() => setShow(false)} type="button" style={buttonStyle}>
                                DESISTIR
                            </button>
                        </Form>
                    </div>
                </Content>
            ) : (
                <h1></h1>
            )}

        </>
    );
}

export default Quiz;