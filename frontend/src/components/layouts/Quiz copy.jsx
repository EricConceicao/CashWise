import { useState } from "react";
import { GiNotebook } from 'react-icons/gi';
import { MdOutlineQuiz } from 'react-icons/md';
import { Form } from 'react-bootstrap';
import Content from '../layouts/Content';

//componente - ícone
function Quiz2() {
    const [show, setShow] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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
    
    //controla perguntas
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            // colocar aqui para enviá-las para um servidor, agora só mostra
        } else {
            console.log('Respostas:', questions);
            restartQuiz();
            setShow(false);
        }
    };
    //
    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        // Limpar respostas se necessário
        const resetQuestions = questions.map(q => ({ ...q, answer: '' }));
        setQuestions(resetQuestions);
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
        maxWidth: '500px',
        minHeight: '250px',
    }

    const buttonStyle = {
        margin: '10px',
        borderRadius: '8px',
        background: '#AEF2C6',
        display: 'flex-row',
        justifyContent: 'space-between',
    }

    return (
        <>
            
            {!show && <GiNotebook size={200} onClick={() => setShow(!show)} />}

            {show ? (
                <Content>
                    <div className="container-fluid" style={QuizContainer} >
                        <Form>
                            <div className="jumbotron text-center" id='title' >
                                <h1 className="p-2">Quizz</h1>
                            </div>
                            <Form.Group key={questions[currentQuestionIndex].id} controlId={`question${questions[currentQuestionIndex].id}`}>
                                <Form.Label>{questions[currentQuestionIndex].text}</Form.Label>
                                <Form.Control
                                    type={questions[currentQuestionIndex].type}
                                    placeholder="Digite sua resposta"
                                    value={questions[currentQuestionIndex].answer}
                                    onChange={(e) => handleAnswerChange(e, questions[currentQuestionIndex].id)}
                                />
                            </Form.Group>
                            <button onClick={handleNextQuestion} type="button" style={buttonStyle}>
                                {currentQuestionIndex === questions.length - 1 ? 'ENVIAR' : 'PRÓXIMA PERGUNTA'}
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

export default Quiz2;