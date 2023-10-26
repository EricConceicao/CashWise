import { useState } from "react";
import { MdOutlineQuiz } from 'react-icons/md';
import { Form } from 'react-bootstrap';

//componente - ícone
function Quiz() {
    const [show, setShow] = useState(false);

    return (
        <>
            { show === false && <MdOutlineQuiz size={200} onClick={() => setShow(!show)} />}

            <div>
                {
                    show ?
                    <Form>
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
                    <button onClick={() => setShow(!show)} type="submit">Submit</button>
                </Form>
                :
                <h1></h1>
                }
            </div>

        </>
    )
}



export default Quiz