import { useState } from "react";
import { MdOutlineQuiz } from 'react-icons/md';
import { Form } from 'react-bootstrap';

//componente - ícone
const QuizIcon = () => {
    return <MdOutlineQuiz size={15} />;
};

// formulário - perguntas do quiz
const QuizForm = () => {
    const [answers, setAnswers] = useState({});

    const handleQuizSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('#', {
                method: 'POST',
                body: JSON.stringify(answers),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form onSubmit={handleQuizSubmit}>
            <Form.Group controlId="question1">
                <Form.Label>Question 1</Form.Label>
                <Form.Check
                    type="radio"
                    name="question1"
                    label="Option 1"
                    onChange={() => setAnswers({ question1: 'Option 1' })}
                />
                <Form.Check
                    type="radio"
                    name="question1"
                    label="Option 2"
                    onChange={() => setAnswers({ question1: 'Option 2' })}
                />
                <Form.Check
                    type="radio"
                    name="question1"
                    label="Option 3"
                    onChange={() => setAnswers({ question1: 'Option 3' })}
                />
            </Form.Group>
            <button type="submit">Submit</button>
        </Form>
    );
};

return (
    <>
        <QuizForm onSubmit={handleQuizSubmit} />
    </>
)

export default { QuizIcon, QuizForm };