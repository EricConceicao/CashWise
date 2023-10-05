import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Contato() {
    return (
        <>
            <Card className="Feedback bg-dark text-white">
                <Card.Img src="https://img.freepik.com/vetores-gratis/autor-minusculo-com-escrita-a-lapis-editando-informacoes-mao-segurando-o-livro-de-papel-aberto-para-ilustracao-vetorial-plana-de-estudo-orientacao-conceito-de-educacao-para-banner-design-de-site-ou-pagina-da-web-de-destino_74855-25322.jpg?w=996&t=st=1696529841~exp=1696530441~hmac=798e77c24139dea608735475f9821d63999873f78ae68956b207cdbe5e662050" alt="feedback" />
                <Card.ImgOverlay>
                    <Card.Title>Envie um Feedback</Card.Title>

                </Card.ImgOverlay>
            </Card>

            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            Username
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control id="inlineFormInputGroup" placeholder="Username" />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Form.Check
                            type="checkbox"
                            id="autoSizingCheck"
                            className="mb-2"
                            label="Remember me"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

        </>
    );
}

export default Contato;