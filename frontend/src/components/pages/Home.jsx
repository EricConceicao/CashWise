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

    // Obter a data atual
    const currentDate = new Date();

    // Mapear o número do mês para o nome do mês
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
    const [showModal6, setShowModal6] = useState(false);
    const [novoValor, setNovoValor] = useState(0);
    const [novoValor1, setNovoValor1] = useState(0);

    const handleValorRecebidoChange = (event) => {
        setValorRecebido(parseFloat(event.target.value));
    }

    const handleAdicionarNovoGanho = () => {
        if (selectedCategoria) {
            // Adicione o novo ganho com a selectedCategoria
            // Você pode usar a selectedCategoria para categorizar o ganho.
            // Exemplo: setValorRecebido(valorRecebido + novoValor, selectedCategoria);
            setValorRecebido(valorRecebido + novoValor);

            showConfirmationMessage("Novo ganho adicionado com sucesso!");
        }
        
    };


    const handleValorGastoChange = (event) => {
        setValorGasto(parseFloat(event.target.value));
    }

    const handleAdicionarNovoGasto = () => {
        if (selectedCategoria) {
            // Adicione o novo gasto com a categoria correspondente
            const novoGasto = {
                descricao: "Descrição do gasto", // Substitua pela descrição real do gasto
                valor: novoValor1,
            };

            // Crie uma cópia do objeto gastosPorCategoria
            const novosGastosPorCategoria = { ...gastosPorCategoria };

            // Verifique se já existe um array de gastos para a categoria
            if (!novosGastosPorCategoria[selectedCategoria]) {
                novosGastosPorCategoria[selectedCategoria] = [];
            }

            // Adicione o novo gasto ao array de gastos da categoria
            novosGastosPorCategoria[selectedCategoria].push(novoGasto);

            // Atualize o estado com os novos gastos por categoria
            setGastosPorCategoria(novosGastosPorCategoria);

            // Atualize o valor total de gastos (opcional)
            setValorGasto(valorGasto + novoValor1);

            showConfirmationMessage("Novo gasto adicionado com sucesso!");
        }
    };



    const [showModal7, setShowModal7] = useState(false);

    const [categorias, setCategorias] = useState([
        "Alimentação",
        "Saúde",
        "Lazer",
        "Impostos",
        "Investimentos",
        "Previdência",
        "Compras",
        "Contas",
        "Financiamento",
        "Aluguel",
        "Seguro"]);

    const adicionarCategoria = (novaCategoria) => {
        setCategorias([...categorias, novaCategoria]);
    };

    const [novaCategoria, setNovaCategoria] = useState('');

    const handleAdicionarNovaCategoria = () => {
        if (novaCategoria) {
            adicionarCategoria(novaCategoria);
            showConfirmationMessage("Nova categoria criada com sucesso!");
            setNovaCategoria(''); // Limpar o campo de entrada
        }
    };

    const handleExcluirCategoria = (index) => {
        const novasCategorias = [...categorias];
        novasCategorias.splice(index, 1);
        setCategorias(novasCategorias);
    };

    const [selectedCategoria, setSelectedCategoria] = useState("");

    const [gastosPorCategoria, setGastosPorCategoria] = useState({});

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState("");

    const showConfirmationMessage = (message) => {
        setConfirmationMessage(message);
        setShowConfirmation(true);

        // Defina um temporizador para ocultar a mensagem após alguns segundos (opcional)
        setTimeout(() => {
            setShowConfirmation(false);
        }, 3000); // A mensagem será ocultada após 3 segundos
    };








    const [users, setUsers] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)


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

                        <h1 title='Consulte seu perfil'>Meu perfil</h1>
                        <div className='perfil'>

                            <div className="perfil1">

                                <img className='mb-5' src="https://avatars.githubusercontent.com/u/4259630?v=4" alt="Foto de perfil" />

                                <h1 className='mb-5 text-primary'><i>Renan Cavichi</i></h1>

                                <div className="botoes">


                                    {/* Início do botão de Editar perfil */}
                                    <Button as="button" className="editar fw-bold" title='Editar perfil' variant="outline-primary" onClick={() => setShowModal1(true)}><FiEdit />
                                    </Button>

                                    <Modal
                                        show={showModal1}
                                        onHide={() => setShowModal1(false)}
                                        size="md"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">Editar perfil</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Nome</Form.Label>
                                                    <Form.Control type="text" name="name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Sobrenome</Form.Label>
                                                    <Form.Control type="text" name="sname" />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>E-mail</Form.Label>
                                                    <Form.Control type="text" name="email" />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Data de nascimento</Form.Label>
                                                    <Form.Control type="date" name="email" />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Foto</Form.Label>
                                                    <Form.Control type="file" name="foto" />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button as='button' variant="secondary" onClick={handleAdicionarNovoGanho}>
                                                Salvar
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* Fim do botão de Editar perfil */}


                                    {/* Início do botão de Alerta */}
                                    <Button as="button" className='editar fw-bold' title='Avisos' variant="outline-danger" onClick={() => setShowModal2(true)}><AiOutlineAlert className='alerta' /></Button>

                                    <Modal
                                        show={showModal2}
                                        onHide={() => setShowModal2(false)}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">Avisos</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        </Modal.Body>
                                    </Modal>
                                    {/* Fim do botão de Alerta */}

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
                                    <Modal.Title id="contained-modal-title-vcenter">Adicionar Novo Ganho</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Descrição</Form.Label>
                                            <Form.Control type="text" name="name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Categoria</Form.Label>
                                            <Form.Select
                                                name="categoria"
                                                value={selectedCategoria}
                                                onChange={(e) => setSelectedCategoria(e.target.value)}
                                            >
                                                <option value="">Selecione</option>
                                                {categorias.map((categoria, index) => (
                                                    <option key={index} value={categoria}>
                                                        {categoria}
                                                    </option>
                                                ))}
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
                                    <Button as='button' variant="secondary" onClick={handleAdicionarNovoGanho}>
                                        Adicionar
                                    </Button>
                                </Modal.Footer>
                                {showConfirmation && (
                                    <div className="alert alert-success alert-custom" role="alert">
                                        {confirmationMessage}
                                    </div>
                                )}
                            </Modal>



                            <div className="cartao-perfil col">
                                <div className="item">
                                    <h3>Valor Gasto</h3>
                                    <span className='bg-secondary'>{Gasto}</span>
                                </div>

                                <div className="botao">
                                    <Button as="button" variant="outline-primary" onClick={() => setShowModal6(true)}>Novo</Button>
                                </div>
                            </div>

                            <Modal
                                show={showModal6}
                                onHide={() => setShowModal6(false)}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">Adicionar Novo Gasto</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Descrição</Form.Label>
                                            <Form.Control type="text" name="name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Categoria</Form.Label>
                                            <Form.Select
                                                name="categoria"
                                                value={selectedCategoria}
                                                onChange={(e) => setSelectedCategoria(e.target.value)}
                                            >
                                                <option value="">Selecione</option>
                                                {categorias.map((categoria, index) => (
                                                    <option key={index} value={categoria}>
                                                        {categoria}
                                                    </option>
                                                ))}
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
                                                    value={novoValor1}
                                                    onChange={(event) => setNovoValor1(parseFloat(event.target.value))}
                                                />
                                            </div>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button as='button' variant="secondary" onClick={handleAdicionarNovoGasto}>
                                        Adicionar
                                    </Button>
                                </Modal.Footer>
                                {showConfirmation && (
                                    <div className="alert alert-danger alert-custom" role="alert">
                                        {confirmationMessage}
                                    </div>
                                )}
                            </Modal>


                            <div className="cartao-perfil col">
                                <div className='item'>
                                    <h3>Saldo Atual</h3>
                                    <span className='bg-secondary'>{saldoAtual}</span>
                                </div>
                            </div>


                        </Row>

                    </Container>

                    <div className='container painel text-secondary mt-5 mb-5 p-5'>
                        <h1 className='mb-5'>Agenda Financeira {/*<AiOutlineSchedule />*/}</h1>

                        <Button as="button" variant="primary" onClick={() => setShowModal7(true)}>Criar uma nova categoria</Button>
                        <Modal
                            show={showModal7}
                            onHide={() => setShowModal7(false)}
                            size="md"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">Nova categoria</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Escolher uma categoria ou adicionar uma nova</Form.Label>
                                        <Form.Control as="select" name="categoria" value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)}>
                                            <option value="">Escolha uma categoria</option>
                                            {categorias.map((categoria, index) => (
                                                <option key={index} value={categoria}>
                                                    {categoria}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ou adicione uma nova categoria</Form.Label>
                                        <Form.Control type="text" name="novaCategoria" value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button as='button' variant="secondary" onClick={handleAdicionarNovaCategoria}>
                                    Criar
                                </Button>
                            </Modal.Footer>
                            {showConfirmation && (
                                    <div className="alert alert-danger alert-custom" role="alert">
                                        {confirmationMessage}
                                    </div>
                                )}
                        </Modal>

                        <div className="tabela p-4">
                            <div className="titulo row mb-5">
                                <div className="col"></div>
                                <div className="linha col mb-4">Data</div>
                                <div className="linha col mb-4">Descrição</div>
                                <div className="linha col mb-4">Ação</div>
                                <div className="linha col mb-4">Valor</div>
                                <div className="linha col mb-4">Status</div>
                                <div className="col mb-4"></div>

                            </div>

                            <div className="pagar row mb-5 pt-1 pb-1">
                                <div className="col"><BsArrowUpLeft className='seta text-danger' /></div>
                                <div className="col">08/11/23</div>
                                <div className="col fw-bold"><i>Financiamento</i></div>
                                <div className="col">Pagar</div>
                                <div className="col">R$ 1200,00</div>
                                <div className="col">Valor</div>
                                <div className="col text-danger">Excluir</div>

                            </div>

                            <div className="receber row mb-5 pt-1 pb-1">
                                <div className="col"><BsArrowDownRight className='seta text-primary' /></div>
                                <div className="col">10/11/23</div>
                                <div className="col fw-bold"><i>Salário</i></div>
                                <div className="col">Receber</div>
                                <div className="col">R$ 5000,00</div>
                                <div className="col">Valor</div>
                                <div className="col text-danger">Excluir</div>

                            </div>

                            <div className="pagar row mb-5 pt-1 pb-1">
                                <div className="col"><BsArrowUpLeft className='seta text-danger' /></div>
                                <div className="col">11/11/23</div>
                                <div className="col fw-bold"><i>Cartão de crédito</i></div>
                                <div className="col">Pagar</div>
                                <div className="col">R$ 1200,00</div>
                                <div className="col">Valor</div>
                                <div className="col text-danger">Excluir</div>

                            </div>
                        </div>

                    </div>

                    <Container className='controle p-5 mb-5'>
                        <h1 className='m-5'>Minhas despesas</h1>

                        <Row md={4}>
                            {categorias.map((categoria, index) => (
                                <div className={`etiqueta text-dark col-md-3`} key={index}>
                                    <div className="gasto">
                                        <p className="fw-bold fs-5">{categoria}</p>
                                        <p>
                                            {" "}
                                            {gastosPorCategoria[categoria]
                                                ? gastosPorCategoria[categoria].reduce(
                                                    (total, gasto) => total + gasto.valor,
                                                    0
                                                ).toLocaleString('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                })
                                                : 0}
                                        </p>

                                        <hr />
                                    </div>
                                    <div className="botoes">
                                        <Button as='button' size='sm' variant='primary' className='botao'>Detalhar</Button>
                                        <Button as='button' size='sm' variant='secondary' className='botao' onClick={() => handleExcluirCategoria(index)}>Excluir</Button>
                                    </div>
                                </div>

                            ))}
                        </Row>

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