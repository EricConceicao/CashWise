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
import { BsCoin } from 'react-icons/bs';
import { HiOutlineCake } from 'react-icons/hi';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { AiOutlineSchedule } from 'react-icons/ai';
import { BsArrowUpLeft } from 'react-icons/bs'
import { BsArrowDownRight } from 'react-icons/bs'

const Home = () => {

    // Obtenha a data atual
    const currentDate = new Date();

    // Mapeie o número do mês para o nome do mês
    const months = [
        'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
        'jul', 'ago', 'set', 'Out', 'nov', 'dez'
    ];

    const currentMonth = months[currentDate.getMonth()];

    // Obtenha o ano atual
    const currentYear = currentDate.getFullYear();

    const [valorRecebido, setValorRecebido] = useState(0);
    const [valorGasto, setValorGasto] = useState(0);

    const saldoAtual = (valorRecebido - valorGasto).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const Recebido = valorRecebido.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const Gasto = valorGasto.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const [showModal5, setShowModal5] = useState(false);

    const handleValorRecebidoChange = (event) => {
        setValorRecebido(parseFloat(event.target.value));
    }

    const handleAdicionarNovoValor = () => {
        setValorRecebido(valorRecebido + novoValor); // Incrementa o valor recebido
    };



    const handleValorGastoChange = (event) => {
        setValorGasto(parseFloat(event.target.value));
    }

    const [novoValor, setNovoValor] = useState(0);


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
                    <Container fluid className="conteudo bg-secondary p-5">

                        <h1>Meu perfil</h1>
                        <div className='perfil'>

                            <div className="perfil1">

                                <img className='mb-5' src="https://avatars.githubusercontent.com/u/4259630?v=4" alt="Foto de perfil" />

                                <h1 className='mb-5 text-primary'><i>Renan Cavichi</i></h1>


                                <div className="botoes">
                                    <Button as="button" className="editar fw-bold" title='Editar perfil' variant="outline-primary" onClick={() => setShowModal(true)}><FiEdit />
                                    </Button>
                                    <Button as="button" className='editar fw-bold' title='Avisos' variant="outline-danger" onClick={() => setShowModal(true)}><AiOutlineAlert className='alerta' /></Button>
                                </div>

                            </div>


                            
                                
                                <Row>
                                    <div className="cartao-perfil1">
                                        <div className="item">
                                            <h3 className=''>Idade</h3>
                                            <span className='bg-secondary'>30 anos</span>
                                        </div>
                                        <HiOutlineCake className='moeda' />
                                    </div>

                                    <div className="cartao-perfil1">
                                        <div className="item">
                                            <h3 className=''>Perfil</h3>
                                            <span className='bg-secondary'>Investidor de alto risco</span>
                                        </div>
                                        <MdOutlineEmojiPeople className='moeda' />
                                    </div>

                                    <div className="cartao-perfil1">
                                        <div className="item">
                                            <h3 className=''> WiseCoins</h3>
                                            <span className='bg-secondary'>1.700</span>
                                        </div>
                                        <BsCoin className='moeda' />
                                    </div>

                                    <div className="cartao-perfil1">
                                        <div className="item">
                                            <h3 className=''>Experiência</h3>
                                            <span className='bg-secondary'>Empresário</span>
                                        </div>
                                        <BsStars className='moeda' />
                                    </div>

                                    </Row>
                                
                            

                        </div>

                        <hr />

                        <h1>Controle financeiro mensal</h1>
                        <Row>

                            <div className="cartao-perfil col">
                                <div className='item'>
                                    <h3>Mês / Ano</h3>
                                    <span className='bg-secondary'>{currentMonth} / {currentYear}</span>
                                </div>
                            </div>

                            <div className="cartao-perfil col">
                                <div className="item">
                                    <h3>Valor Recebido</h3>
                                    <span className='bg-secondary'>{Recebido}</span>
                                </div>

                                <div className="botao">
                                    <Button as="button" variant="outline-primary" onClick={() => setShowModal5(true)}>Novo</Button>
                                </div>

                            </div>

                            <Modal
                                show={showModal5}
                                onHide={() => setShowModal5(false)}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">Adicionar Novo Valor</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
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
                                        <Form.Group>
                                            <Form.Label>Valor a ser adicionado</Form.Label>
                                            <div className="input-group">
                                                <span className="input-group-text">R$</span>
                                                <Form.Control
                                                    type="number"
                                                    step="0.01"  // Permita valores fracionados com duas casas decimais
                                                    value={novoValor}
                                                    onChange={(event) => setNovoValor(parseFloat(event.target.value))}
                                                />
                                            </div>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button as='button' variant="outline-secondary" onClick={handleAdicionarNovoValor}>
                                        Adicionar
                                    </Button>

                                    <Button variant='outline-secondary' onClick={() => setShowModal5(false)}>Fechar</Button>
                                </Modal.Footer>
                            </Modal>



                            <div className="cartao-perfil col">
                                <div className="item">
                                    <h3>Valor Gasto</h3>
                                    <span className='bg-secondary'>{Gasto}</span>
                                </div>

                                <div className="botao">
                                    <Button as="button" variant="outline-primary" onClick={() => setShowModal1(true)}>Novo</Button>
                                </div>
                            </div>

                            <Modal
                                show={showModal1}
                                onHide={() => setShowModal1(false)}
                                size="md"
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


                            <div className="cartao-perfil col">
                                <div className='item'>
                                    <h3>Saldo Atual</h3>
                                    <span className='bg-secondary'>{saldoAtual}</span>
                                </div>
                            </div>


                        </Row>

                    </Container>

                    <div className='container painel bg-light text-secondary mt-5 mb-5 p-5 border'>
                        <h1 className='mb-5'>Agenda Financeira {/*<AiOutlineSchedule />*/}</h1>

                        <div className="row mb-4">
                            <div className="col"></div>
                            <div className="linha col mb-4">Data</div>
                            <div className="linha col mb-4">Descrição</div>
                            <div className="linha col mb-4">Ação</div>
                            <div className="linha col mb-4">Valor</div>
                            <div className="col mb-4"></div>

                        </div>

                        <div className="row mb-5 pt-1 pb-1 border">
                            <div className="col"><BsArrowUpLeft className='text-danger' /></div>
                            <div className="col">08/11/23</div>
                            <div className="col fw-bold">Financiamento</div>
                            <div className="col">Pagar</div>
                            <div className="col">R$ 1200,00</div>
                            <div className="col excluir bg-danger text-light">Excluir</div>

                        </div>

                        <div className="row mb-5 pt-1 pb-1 border">
                            <div className="col"><BsArrowDownRight className='text-primary' /></div>
                            <div className="col">10/11/23</div>
                            <div className="col fw-bold">Salário</div>
                            <div className="col">Receber</div>
                            <div className="col">R$ 5000,00</div>
                            <div className="col excluir bg-danger text-light">Excluir</div>

                        </div>

                        <div className="row mb-5 pt-1 pb-1 border">
                            <div className="col"><BsArrowUpLeft className='text-danger' /></div>
                            <div className="col">11/11/23</div>
                            <div className="col fw-bold">Cartão de crédito</div>
                            <div className="col">Pagar</div>
                            <div className="col">R$ 1200,00</div>
                            <div className="col excluir bg-danger text-light">Excluir</div>

                        </div>

                    </div>

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

                </Content >
            </div >
            <Footer />

        </>
    );
}

export default Home;