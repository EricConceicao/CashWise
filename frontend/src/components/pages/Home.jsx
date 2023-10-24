import Header from '../layouts/Header';
import Content from "../layouts/Content"
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Footer from '../layouts/Footer';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineAlert } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';




const Home = () => {

    const [users, setUsers] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showModal1, setShowModal1] = useState(false)

    useEffect(() => {

        const getUsers = async () => {
            const response = await fetch('http://localhost:3300/user/list')
            const data = await response.json()
            console.log(data.success)
            console.log(data.users)
            setUsers(data.users)
        }

        getUsers()

    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            pass: event.target.pass.value,
            photo: event.target.photo.value
        }

        const response = await fetch('http://localhost:3300/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        if (response.ok) {
            const data = await response.json()
            alert(data.success)
            setShowModal(false)
            setUsers([...users, data.user])
        }
    }

    return (
        <>
            <Header />
            <div id="principal">
                <Content>
                    <Container fluid className="conteudo bg-secondary">



                        <div className="perfil">

                            <div className="botoes">
                                <Button as="button" className="editar fw-bold" title='Editar perfil' variant="primary" onClick={() => setShowModal(true)}><FiEdit />
                                </Button>
                                <Button as="button" className='editar fw-bold' title='Avisos' variant="danger" onClick={() => setShowModal(true)}><AiOutlineAlert className='alerta' /></Button>
                            </div>

                            <img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-cofrinho_114360-5512.jpg?w=826&t=st=1696537956~exp=1696538556~hmac=8fd397ae9a6edbfd847c56551426e904080d6e1aefb5e36a08a0868a70fcd314" alt="Foto de perfil" />

                            <h1>Renato Venícius</h1>

                            {/*
                            <div className="dados">
                                

                                <div className="pontuacao">

                                    <div className="dado">
                                        <p>Anos</p>
                                        <p className='dado-valor text-warning'>30</p>
                                    </div>

                                    <div className="dado">
                                        <p>Perfil</p>
                                        <p className='dado-valor text-warning'>Investidor de alto risco</p>
                                    </div>

                                    <div className="dado">
                                        <p>WiseCoins</p>
                                        <p className='dado-valor text-warning'>1.700</p>
                                    </div>

                                    <div className="dado">
                                        <p>Nível</p>
                                        <p className='dado-valor text-warning'>01</p>
                                    </div>

                                    <div className="dado">
                                        <p>Experiência</p>
                                        <p className='dado-valor text-warning'>Assaltante</p>
                                    </div>

                                </div>


    </div>*/}
                        </div>

                        <Row>
                            <div className="cartoes">

                                <div className="cartao-perfil1">
                                    <div className="item">
                                        <h3 className='text-secondary'>Nível</h3>
                                        <span className='bg-secondary'>1</span>
                                    </div>
                                </div>

                                <div className="cartao-perfil1">
                                    <div className="item">
                                        <h3 className='text-secondary'>Perfil</h3>
                                        <span className='bg-secondary'>Investidor de alto risco</span>
                                    </div>
                                </div>

                                <div className="cartao-perfil1">
                                    <div className="item">
                                        <h3 className='text-secondary'>WiseCoins</h3>
                                        <span className='bg-secondary'>1.700</span>
                                    </div>
                                </div>

                                <div className="cartao-perfil1">
                                    <div className="item">
                                        <h3 className='text-secondary'>Experiência</h3>
                                        <span className='bg-secondary'>Empresário</span>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            <div className="cartoes">

                                <div className="cartao-perfil">
                                    <div className='item'>
                                        <h3>Mês / Ano</h3>
                                        <span className='bg-secondary'>dez / 2023</span>
                                    </div>
                                </div>

                                <div className="cartao-perfil">
                                    <div className="item">
                                        <h3>Valor Recebido</h3>
                                        <span className='bg-secondary'>R$</span>
                                    </div>

                                    <div className="botao">
                                        <Button as="button" variant="secondary" onClick={() => setShowModal(true)}>Novo</Button>
                                    </div>

                                </div>

                                <Modal
                                    show={showModal}
                                    onHide={() => setShowModal(false)}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            Adicionar Ganho
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Descrição</Form.Label>
                                                <Form.Control type="text" name="name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Categoria</Form.Label>
                                                <Form.Select name="categoria">
                                                    <option value="selecione">Selecione</option>
                                                    <option value="alimentacao">Alimentação</option>
                                                    <option value="saude">Saúde</option>
                                                    <option value="lazer">Lazer</option>
                                                    <option value="impostos">Impostos</option>
                                                    <option value="investimentos">Investimentos</option>
                                                    <option value="previdencia">Previdência</option>
                                                    <option value="compras">Compras</option>
                                                    <option value="contas">Contas</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Data</Form.Label>
                                                <Form.Control type="date" name="email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Valor</Form.Label>
                                                <Form.Control type="number" name="pass" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">Adicionar</Button>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() => setShowModal(false)}>Fechar</Button>
                                    </Modal.Footer>
                                </Modal>

                                <div className="cartao-perfil">
                                    <div className="item">
                                        <h3>Valor Gasto</h3>
                                        <span className='bg-secondary'>R$</span>
                                    </div>

                                    <div className="botao">
                                        <Button as="button" variant="secondary" onClick={() => setShowModal1(true)}>Novo</Button>
                                    </div>
                                </div>

                                <Modal
                                    show={showModal1}
                                    onHide={() => setShowModal1(false)}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            Adicionar Gasto
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Descrição</Form.Label>
                                                <Form.Control type="text" name="name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Categoria</Form.Label>
                                                <Form.Select name="categoria">
                                                    <option value="selecione">Selecione</option>
                                                    <option value="alimentacao">Alimentação</option>
                                                    <option value="saude">Saúde</option>
                                                    <option value="lazer">Lazer</option>
                                                    <option value="impostos">Impostos</option>
                                                    <option value="investimentos">Investimentos</option>
                                                    <option value="previdencia">Previdência</option>
                                                    <option value="compras">Compras</option>
                                                    <option value="contas">Contas</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Data</Form.Label>
                                                <Form.Control type="date" name="email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Valor</Form.Label>
                                                <Form.Control type="number" name="pass" />
                                            </Form.Group>
                                            <Button variant="danger" type="submit">Adicionar</Button>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() => setShowModal1(false)}>Fechar</Button>
                                    </Modal.Footer>
                                </Modal>


                                <div className="cartao-perfil">
                                    <div className='item'>
                                        <h3>Saldo Atual</h3>
                                        <span className='bg-secondary'>R$</span>
                                    </div>
                                </div>

                            </div>
                        </Row>
                    </Container>

                    <Container fluid className='painel bg-primary text-secondary p-5'>
                        <h1>CashWise</h1>
                    </Container>

                    <Container fluid className='controle bg-info p-5'>
                        <h1 className='m-5'>Minhas despesas</h1>
                        <div className='row'>
                            <div className='etiqueta vermelha text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Alimentos</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                            <div className='etiqueta laranja text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Sáude</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                            <div className='etiqueta amarela text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Lazer</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                            <div className='etiqueta verde text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Impostos</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='etiqueta azul text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Investimentos</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                            <div className='etiqueta violeta text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Previdência</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                            <div className='etiqueta rosa text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Compras</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                            <div className='etiqueta marron text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Contas</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='etiqueta cinza text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Financiamento</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                            <div className='etiqueta prata text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Aluguel</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                            <div className='etiqueta ouro text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Seguro</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                            <div className='etiqueta ciano text-dark'>
                                <div className="gasto">
                                    <p className='fw-bold fs-5'>Outros gastos</p>
                                    <p>R$</p>
                                    <hr />
                                </div>
                                <span>Detalhar</span>
                            </div>
                        </div>

                    </Container>

                    <Container fluid className='investimentos bg-warning text-light p-5'>
                        <h1>Meus investimentos</h1>
                    </Container>

                </Content>
            </div>
            <Footer />

        </>
    );
}

export default Home;