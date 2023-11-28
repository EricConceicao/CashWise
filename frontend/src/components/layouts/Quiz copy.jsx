import { useState } from "react";
import { GiNotebook } from 'react-icons/gi';
import { MdOutlineQuiz } from 'react-icons/md';
import { Form, Modal} from 'react-bootstrap';

//componente - ícone
function Quiz2() {
	const [show, setShow] = useState(false);
	const [showRes, setShowRes] = useState(false);
	const [quizRes, setQuizRes] = useState('');

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [questions, setQuestions] = useState([
		{ id: 1, text: 'Qual é a sua renda mensal?', answer: '', type: 'number' },
		{ id: 2, text: 'Valor gasto com moradia?', answer: '', type: 'number' },
		{ id: 3, text: 'Valor gasto com alimentação?', answer: '', type: 'number' },
		{ id: 4, text: 'Valor gasto com transporte?', answer: '', type: 'number' },
		{ id: 5, text: 'Valor gasto com lazer?', answer: '', type: 'number' },
		{ id: 6, text: 'Valor gasto com saúde?', answer: '', type: 'number' },
		{ id: 7, text: 'Valor gasto com educação?', answer: '', type: 'number' },
		{ id: 8, text: 'Valor total gasto com outras dívidas ?', answer: '', type: 'number' },
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
			const sumAnswers = questions
				.slice(1, 8)
				.map(q => parseFloat(q.answer) || 0)
				.reduce((acc, val) => acc + val, 0);

			console.log('Respostas:', questions);
			restartQuiz();
			setShow(false);

			if (questions[0].answer > sumAnswers) {
				setShowRes(true);
				setQuizRes('parabéns')
			} else {
				window.alert('DEF');
			}
		}
	};
	//
	const restartQuiz = () => {
		setCurrentQuestionIndex(0);
		// Limpar respostas se necessário
		const resetQuestions = questions.map(q => ({ ...q, answer: '' }));
		setQuestions(resetQuestions);
	};

	const buttonStyle = {
		margin: '10px',
		borderRadius: '8px',
		background: '#AEF2C6',
		display: 'flex-row',
		justifyContent: 'space-between',
	}

	return (
		<>
			<GiNotebook size={120} onClick={() => setShow(!show)} />

			<Modal show={show} onHide={() => setShow(false)} centered>
				<Modal.Header className="bg-primary" style={{ border: "none" }} closeButton></Modal.Header>
				<Modal.Title className="text-center display-4">Quizz</Modal.Title>


				<Modal.Body>
					<Form className="p-2 bg-info">
						<Form.Group key={questions[currentQuestionIndex].id} controlId={`question${questions[currentQuestionIndex].id}`}>
							<Form.Label>{questions[currentQuestionIndex].text}</Form.Label>
							<Form.Control
								type={questions[currentQuestionIndex].type}
								placeholder="Digite sua resposta"
								value={questions[currentQuestionIndex].answer}
								onChange={(e) => handleAnswerChange(e, questions[currentQuestionIndex].id)}
								autoFocus
							/>
						</Form.Group>
						<button onClick={handleNextQuestion} type="button" style={buttonStyle}>
							{currentQuestionIndex === questions.length - 1 ? 'ENVIAR' : 'PRÓXIMA PERGUNTA'}
						</button>
						<button onClick={() => setShow(false)} type="button" style={buttonStyle}>
							DESISTIR
						</button>
					</Form>
				</Modal.Body>

			</Modal>

			<Modal show={showRes} onHide={() => setShowRes(false)} centered>
				<Modal.Header closeButton>Tralálá</Modal.Header>
				<Modal.Body>{
					quizRes
				}</Modal.Body>
			</Modal>

		</>
	);
}

export default Quiz2;