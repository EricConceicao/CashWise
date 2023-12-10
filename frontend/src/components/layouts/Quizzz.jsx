import { useState } from "react";
import { GiNotebook } from 'react-icons/gi';
import { MdOutlineQuiz } from 'react-icons/md';
import { Form, Modal } from 'react-bootstrap';
import useUserStore from '../store/UserStore';
import EmojiPicker from 'emoji-picker-react';

//componente - ícone
function Quiz() {
	const [show, setShow] = useState(false);
	const [showRes, setShowRes] = useState(false);
	const [quizRes, setQuizRes] = useState('');

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [questions, setQuestions] = useState([
		{ id: 1, tipo: 'Salário', text: 'Qual é a sua renda mensal', answer: '', type: 'number' },
		{ id: 2, tipo: 'Aluguél/Financiamento', text: 'Valor gasto com moradia', answer: '', type: 'number' },
		{ id: 3, tipo: 'alimentação', text: 'Valor gasto com alimentação', answer: '', type: 'number' },
		{ id: 4, tipo: 'Transporte', text: 'Valor gasto com transporte', answer: '', type: 'number' },
		{ id: 5, tipo: 'Lazer', text: 'Valor gasto com lazer', answer: '', type: 'number' },
		{ id: 6, tipo: 'Saúde', text: 'Valor gasto com saúde', answer: '', type: 'number' },
		{ id: 7, tipo: 'Educação', text: 'Valor gasto com educação', answer: '', type: 'number' },
		{ id: 8, tipo: 'Outros', text: 'Valor total gasto com outras dívidas ', answer: '', type: 'number' },
		{ id: 9, tipo: 'Investimento', text: 'Valor que pretende investir por mês', answer: '', type: 'number' },
	]);

	const handleAnswerChange = (e, questionId) => {
		const updatedQuestions = questions.map((q) =>
			q.id === questionId ? { ...q, answer: e.target.value } : q
		);
		setQuestions(updatedQuestions);
	};
	//controla perguntas
	const handleNextQuestion = (event) => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			// colocar aqui para enviá-las para um servidor
		} else {
			const sumAnswers = questions
				.slice(1, 8)
				.map(q => parseFloat(q.answer) || 0)
				.reduce((acc, val) => acc + val, 0);

			console.log('Respostas:', questions);
			handleQuizSubmit(event);
			restartQuiz();
			setShow(false);

			if (questions[0].answer > sumAnswers) {
				setShowRes(true);
				setQuizRes(' 😜 Parabéns! Você gasta menos que ganha, mas pode melhorar, conheça nossa agenda.')
			}

			if (questions[0].answer == sumAnswers) {
				setShowRes(true);
				setQuizRes(' 😲 Cuidado! Seus gastos batem com seu ganho, reavalie seus gastos, descarte ou diminua o dispensável. ')
			}

			if (questions[0].answer < sumAnswers) {
				setShowRes(true);
				setQuizRes(' 😰  Vamos reavaliar os gastos! Fazendo controle dos gastos, sobrará dinheiro para investir em algum projeto e no seu futuro.')
			}
		}
	};

	const restartQuiz = () => {
		setCurrentQuestionIndex(0);
		// Limpar respostas se necessário
		const resetQuestions = questions.map(q => ({ ...q, answer: '' }));
		setQuestions(resetQuestions);
	};

	function handleQuizSubmit(e) {
		e.preventDefault();

		console.log("questions: ",questions);
		const data = new Date();
		const dataFormatada = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;
		console.log(dataFormatada);

		questions.map(async question => {
			const valor = Number(question.answer).toFixed(2)
			console.log(valor)
			if (question.id > 1 ) {
				const questionData = {
					descricao: question.text,
					categoria: question.tipo,
					data: dataFormatada,
					valor
				}

				const res = await fetch('http://localhost:3000/gastos', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(questionData),
				});

			} else {
				const questionData = {
					descricao: question.text,
					fonte: question.tipo,
					data: dataFormatada,
					valor
				}

				const res = await fetch('http://localhost:3000/ganhos', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(questionData),
				});
			} 
		});
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
			<GiNotebook title="Como anda seu gastos? Faço um teste. 🤔" size={120} onClick={() => setShow(!show)} />

			<Modal show={show} onHide={() => setShow(false)} centered>
				<Modal.Header className="bg-primary " style={{ border: "none" }} closeButton>{`${(questions[currentQuestionIndex].id < 10 ? '0' : '') + questions[currentQuestionIndex].id} de ${questions.length}`}</Modal.Header>
				<Modal.Title className="text-center h1 ">Quizz</Modal.Title>


				<Modal.Body>
					<Form className="p-3 bg-info">
						<Form.Group key={questions[currentQuestionIndex].id} controlId={`question${questions[currentQuestionIndex].id}`}>
							<Form.Label>{`${questions[currentQuestionIndex].text}`}</Form.Label>
							<Form.Control
								type={questions[currentQuestionIndex].type}
								placeholder="Digite sua resposta"
								value={questions[currentQuestionIndex].answer}
								onChange={(e) => handleAnswerChange(e, questions[currentQuestionIndex].id)}
								onKeyPress={(e) => {
									if (e.key === 'Enter') {
										handleNextQuestion();
									}
								}}
								autoFocus
							/>
						</Form.Group>
						<button onClick={handleNextQuestion} type='button' style={buttonStyle} onKeyPress={(e) => {
							if (e.key === 'Enter') {
								handleNextQuestion();
							}
						}}>
							{currentQuestionIndex === questions.length - 1 ? 'ENVIAR' : 'PRÓXIMA'}
						</button>
					</Form>
				</Modal.Body>

			</Modal>

			<Modal show={showRes} onHide={() => setShowRes(false)} centered>
				{/* <Modal.Header closeButton>Tralálá</Modal.Header> */}
				<Modal.Body className="border-3 border-secondary bg-info p-5 fs-4">{
					quizRes
				}</Modal.Body>
			</Modal>

		</>
	);
}

export default Quiz;