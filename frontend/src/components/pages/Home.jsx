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
import useUserStore from '../store/UserStore';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { GiClick } from 'react-icons/gi'

ChartJS.register(ArcElement, Tooltip, Legend);

import IconShop from '../utils/IconShop';


const Home = () => {


	//Perfil do usuário

	const [showModalEditarPerfil, setShowModalEditarPerfil] = useState(false)
	const [showModalAlerta, setShowModalAlerta] = useState(false)


	// Dados do store após o login do usuário //
	const name = useUserStore(state => state.name);
	const sname = useUserStore(state => state.sname);
	const photo = useUserStore(state => state.photo);
	const exp = useUserStore(state => state.exp);
	const level = useUserStore(state => state.level);
	const wiseCoins = useUserStore(state => state.wiseCoins);

	// Obter a data atual
	const currentDate = new Date();

	// Mapear o número do mês para o nome do mês
	const months = [
		'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
		'jul', 'ago', 'set', 'Out', 'nov', 'dez'
	];

	const currentMonth = months[currentDate.getMonth()];

	// Obter o ano atual
	const currentYear = currentDate.getFullYear();


	// Controle mensal

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


	// Novo ganho

	const [showModalNovoGanho, setShowModalNovoGanho] = useState(false);

	const [novaDescricaoGanho, setNovaDescricaoGanho] = useState('');
	const [selectedFonte, setSelectedFonte] = useState("");
	const [novaDataGanho, setNovaDataGanho] = useState("");
	const [novoValorGanho, setNovoValorGanho] = useState(0);
	const [ganhosPorFonte, setGanhosPorFonte] = useState({});


	const handleAdicionarNovoGanho = () => {
		if (selectedFonte && novaDescricaoGanho && novoValorGanho) {

			const novoGanho = {
				descricao: novaDescricaoGanho,
				fonte: selectedFonte,
				valor: novoValorGanho,
				data: novaDataGanho,
			};

			// Cria uma cópia do objeto gastosPorCategoria
			const novosGanhosPorFonte = { ...ganhosPorFonte };

			// Verifica se já existe um array de gastos para a categoria
			if (!novosGanhosPorFonte[selectedFonte]) {
				novosGanhosPorFonte[selectedFonte] = [];
			}

			// Adiciona o novo gasto ao array de gastos da categoria
			novosGanhosPorFonte[selectedFonte].push(novoGanho);

			// Atualiza o estado com os novos gastos por categoria
			setGanhosPorFonte(novosGanhosPorFonte);

			setValorRecebido(valorRecebido + novoValorGanho);

			showConfirmationMessage("Novo ganho adicionado com sucesso!");
		}
	};


	const [ganhos, setganhos] = useState([])
	const [totalGanhosMes, setTotalGanhosMes] = useState(0);

	useEffect(() => {

		const getganhos = async () => {
			const response = await fetch('http://localhost:3000/ganhos/listar')
			const data = await response.json()
			/*console.log(data.success)
			console.log(data.ganhos)*/
			console.log(data)
			setganhos(data.ganhos)

		}

		getganhos()

	}, [])


	useEffect(() => {

		const getGanhosTotais = async () => {
			const response = await fetch('http://localhost:3000/ganhos/listar')
			const data = await response.json()

			// Filtrar os dados para incluir apenas aqueles do mês corrente
			const ganhosPorData = data.filter(ganho => {
				const dataGanho = new Date(ganho.data);
				const dataAtual = new Date();

				dataGanho.setMonth(dataGanho.getMonth() + 1);
				dataAtual.setMonth(dataAtual.getMonth() + 1);

				/*console.log(dataGanho.getMonth(), dataGanho.getFullYear())
				console.log(dataAtual.getMonth(), dataAtual.getFullYear())*/


				return (
					dataGanho.getMonth() === dataAtual.getMonth() &&
					dataGanho.getFullYear() === dataAtual.getFullYear()
				);
			});

			// Extrair os valores correspondentes
			const valoresDoMesCorrente = ganhosPorData.map(ganho => parseFloat(ganho.valor));
			console.log(valoresDoMesCorrente)

			// Somar os valores
			const totalGanhosMes = valoresDoMesCorrente.reduce((total, valor) => total + valor, 0);
			console.log(totalGanhosMes)

			setTotalGanhosMes(totalGanhosMes);
		};

		getGanhosTotais();

	}, []);


	const handleSubmitNovoGanho = async (event) => {
		event.preventDefault()
		const novoGanho = {
			descricao: event.target.descricao.value,
			fonte: event.target.fonte.value,
			data: event.target.data.value,
			valor: event.target.valor.value
		}
		console.log(novoGanho);

		const response = await fetch('http://localhost:3000/ganhos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(novoGanho)
		})

		if (response.ok) {
			const data = await response.json()

			const dataGanho = new Date(data.ganho.data);
			const dataAtual = new Date();

			dataGanho.setMonth(dataGanho.getMonth() + 1);
			dataAtual.setMonth(dataAtual.getMonth() + 1);

			/*console.log(dataGanho.getMonth(), dataGanho.getFullYear())
			console.log(dataAtual.getMonth(), dataAtual.getFullYear())*/

			if (dataGanho.getMonth() === dataAtual.getMonth() &&
				dataGanho.getFullYear() === dataAtual.getFullYear()) {

				setTotalGanhosMes(totalGanhosMes + parseInt(data.ganho.valor));
			}
		}

	}

	const GanhosMes = totalGanhosMes.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});






	// Novo gasto

	const [showModal6, setShowModal6] = useState(false);

	const [novoDescricao, setNovoDescricao] = useState('');
	const [selectedCategoria, setSelectedCategoria] = useState("");
	const [novaData, setNovaData] = useState("");
	const [novoValor1, setNovoValor1] = useState(0);
	const [gastosPorCategoria, setGastosPorCategoria] = useState({});


	const handleAdicionarNovoGasto = () => {
		if (selectedCategoria && novoDescricao && novoValor1) {

			// Adiciona o novo gasto com a categoria correspondente
			const novoGasto = {
				descricao: novoDescricao,
				categoria: selectedCategoria,
				valor: novoValor1,
				data: novaData,
			};

			// Cria uma cópia do objeto gastosPorCategoria
			const novosGastosPorCategoria = { ...gastosPorCategoria };

			// Verifica se já existe um array de gastos para a categoria
			if (!novosGastosPorCategoria[selectedCategoria]) {
				novosGastosPorCategoria[selectedCategoria] = [];
			}

			// Adiciona o novo gasto ao array de gastos da categoria
			novosGastosPorCategoria[selectedCategoria].push(novoGasto);

			// Atualiza o estado com os novos gastos por categoria
			setGastosPorCategoria(novosGastosPorCategoria);

			// Atualiza o valor total de gastos
			setValorGasto(valorGasto + novoValor1);

			const percentuaisPorCategoria = {};
			for (const categoria in novosGastosPorCategoria) {
				const gastosCategoria = novosGastosPorCategoria[categoria];
				const totalCategoria = gastosCategoria.reduce(
					(total, gasto) => total + gasto.valor,
					0
				);
				const percentual = (totalCategoria / valorGasto) * 100;
				percentuaisPorCategoria[categoria] = percentual;
			}

			showConfirmationMessage("Novo gasto adicionado com sucesso!");
		}
	};


	const [gastos, setgastos] = useState([])
	const [totalGastosMes, setTotalGastosMes] = useState(0);

	useEffect(() => {

		const getgastos = async () => {
			const response = await fetch('http://localhost:3000/gastos/listar')
			const data = await response.json()
			/*console.log(data.success)
			console.log(data.gastos)*/
			console.log(data)
			setgastos(data.gastos)


		}

		getgastos()

	}, [])

	useEffect(() => {

		const getGastosTotais = async () => {
			const response = await fetch('http://localhost:3000/gastos/listar')
			const data = await response.json()

			// Filtrar os dados para incluir apenas aqueles do mês corrente
			const dataDoMesCorrente = data.filter(gasto => {
				const dataGasto = new Date(gasto.data);
				const dataAtual = new Date();

				dataGasto.setMonth(dataGasto.getMonth() + 1);
				dataAtual.setMonth(dataAtual.getMonth() + 1);

				/*console.log(dataGasto.getMonth(), dataGasto.getFullYear())
				console.log(dataAtual.getMonth(), dataAtual.getFullYear())*/


				return (
					dataGasto.getMonth() === dataAtual.getMonth() &&
					dataGasto.getFullYear() === dataAtual.getFullYear()
				);
			});

			// Extrair os valores correspondentes
			const valoresDoMesCorrente = dataDoMesCorrente.map(gasto => parseFloat(gasto.valor));

			// Somar os valores
			const totalGastosMes = valoresDoMesCorrente.reduce((total, valor) => total + valor, 0);

			setTotalGastosMes(totalGastosMes);
		};

		getGastosTotais();

	}, []);

	const handleSubmitNovoGasto = async (event) => {
		event.preventDefault()
		const novoGasto = {
			descricao: event.target.descricao.value,
			categoria: event.target.categoria.value,
			data: event.target.data.value,
			valor: event.target.valor.value
		}
		console.log(novoGasto);

		const response = await fetch('http://localhost:3000/gastos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(novoGasto)
		})

		if (response.ok) {
			const data = await response.json()

			const dataGasto = new Date(data.gasto.data);
			const dataAtual = new Date();

			dataGasto.setMonth(dataGasto.getMonth() + 1);
			dataAtual.setMonth(dataAtual.getMonth() + 1);

			console.log(dataGasto.getMonth(), dataGasto.getFullYear())
			console.log(dataAtual.getMonth(), dataAtual.getFullYear())

			if (dataGasto.getMonth() === dataAtual.getMonth() &&
				dataGasto.getFullYear() === dataAtual.getFullYear()) {

				setTotalGastosMes(totalGastosMes + parseInt(data.gasto.valor));
			}

		}

	}

	const GastosMes = totalGastosMes.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	const saldoMes = (totalGanhosMes - totalGastosMes).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});



	// Fontes de receita

	const [showModalNovaFonte, setShowModalNovaFonte] = useState(false);

	const [fontesdeReceita, setFontesdeReceita] = useState([
		"Salário",
		"Décimo Terceiro",
		"Férias",
		"Bônus",
		"Transferência",
		"PIX",
		"Aluguel",
		"Rendimentos",
		"Doação",
		"Patrocínio"]);

	const adicionarFonte = (novaFonte) => {
		setFontesdeReceita([...fontesdeReceita, novaFonte]);
	};

	const [novaFonte, setNovaFonte] = useState('');

	const handleAdicionarNovaFonte = () => {
		if (novaFonte) {
			adicionarFonte(novaFonte);
			showConfirmationMessage("Nova fonte de receita criada com sucesso!");
			setNovaFonte('');
		}
	};

	const handleExcluirFonte = (index) => {
		const novasFontes = [...fontesdeReceita];
		novasFontes.splice(index, 1);
		setCategorias(novasFontes);
	};

	const [fonteSelecionada, setFonteSelecionada] = useState("");
	const [showModalDetalhesFontes, setShowModalDetalhesFontes] = useState(false);

	const mostrarDetalhesFonte = (fonte) => {
		setFonteSelecionada(fonte);
		setShowModalDetalhesFontes(true);
	};



	// Categorias

	const [showModalCategorias, setShowModalCategorias] = useState(false);

	const [categorias, setCategorias] = useState([
		"Alimentação",
		"Saúde",
		"Lazer",
		"Impostos",
		"Investimentos",
		"Compras",
		"Contas",
		"Financiamento",
		"Aluguel"]);


	const adicionarCategoria = (novaCategoria) => {
		setCategorias([...categorias, novaCategoria]);
	};

	const [novaCategoria, setNovaCategoria] = useState('');

	const handleAdicionarNovaCategoria = () => {
		if (novaCategoria) {
			adicionarCategoria(novaCategoria);
			showConfirmationMessage("Nova categoria criada com sucesso!");
			setNovaCategoria('');
		}
	};

	const handleExcluirCategoria = (index) => {
		const novasCategorias = [...categorias];
		novasCategorias.splice(index, 1);
		setCategorias(novasCategorias);
	};


	const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
	const [showModalDetalhes, setShowModalDetalhes] = useState(false);

	const mostrarDetalhesCategoria = (categoria) => {
		setCategoriaSelecionada(categoria);
		setShowModalDetalhes(true);
	};




	// Gráfico

	const colors = [
		'#FF0000',
		'#FFA500',
		'#DAA520',
		'#008000',
		'#000080',
		'#9400D3',
		'#FF69B4',
		'#A52A2A',
		'#808080',
		'#C0C0C0',
		'#FFD700',
		'#00FFFF',
		'#800080',
		'#FFFF00',
		'#00FF00',
		'#FF6347',
		'#6A5ACD',
		'#4B0082',
		'#7CFC00',
		'#FF4500'
	];

	const labelsColors = []
	const valorCategorias = []
	const categoriasLegenda = []

	categorias.map((categoria, index) => {
		if (gastosPorCategoria[categoria]) {
			categoriasLegenda.push(categoria)
			labelsColors.push(colors[index])
			valorCategorias.push(gastosPorCategoria[categoria].reduce((total, gasto) => total + gasto.valor, 0))
		}
	})

	const dataMyChart = {
		labels: categoriasLegenda,
		datasets: [{
			label: ' Gastos (R$)',
			data: valorCategorias,
			backgroundColor: labelsColors,
			borderWidth: 2,
			hoverOffset: 4
		}]
	}

	const options = {

		plugins: {
			legend: {
				labels: {
					color: 'white',
				},
				position:
					'left',
			}
		}
	};








	// Contas

	const [showModalContas, setShowModalContas] = useState(false);

	const [contas, setContas] = useState([
		"Luz",
		"Água",
		"Telefone",
		"Internet",
		"Aluguel",
		"Condomínio",
		"Gás",
		"TV por assinatura",
		"Seguro",
		"Mensalidade escolar",
		"Academia",
		"Plano de Saúde"]);

	const [descricaoConta, setDescricaoConta] = useState("");
	const [valorConta, setValorConta] = useState("");
	const [vencimentoConta, setVencimentoConta] = useState("");
	const [recorrenciaConta, setRecorrenciaConta] = useState("Mensal");
	const [inicioPeriodoConta, setInicioPeriodoConta] = useState("");
	const [fimPeriodoConta, setFimPeriodoConta] = useState("");



	useEffect(() => {

		const getcontas = async () => {
			const response = await fetch('http://localhost:3000/contas/listar')
			const data = await response.json()
			/*console.log(data.success)
			console.log(data.gastos)*/
			console.log(data)
			setContas(data)


		}

		getcontas()

	}, [])

	const handleAdicionarNovaConta = () => {

		const novaConta = {
			descricao: descricaoConta,
			valor: valorConta,
			vencimento: vencimentoConta,
			recorrencia: recorrenciaConta,
			periodo: {
				inicio: inicioPeriodoConta,
				fim: fimPeriodoConta,
			}
		}

		setContas([...contas, novaConta]);
		showConfirmationMessage("Nova conta criada com sucesso!");
	};


	const handleSubmitNovaConta = async (event) => {
		event.preventDefault()

		let novoPeriodo;
		event.target.recorrencia.value === 'MENSAL' ? (novoPeriodo = null) : (
			novoPeriodo = {
				inicio: event.target.inicioPeriodo.value,
				fim: event.target.fimPeriodo.value,
			})


		const novaConta = {
			descricao: event.target.descricao.value,
			valor: event.target.valor.value,
			diaVencimento: parseInt(event.target.vencimento.value, 10),
			recorrencia: event.target.recorrencia.value,
			periodo: novoPeriodo,
		};

		const response = await fetch('http://localhost:3000/contas', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(novaConta)
		})

		if (response.ok) {
			const data = await response.json()
			alert(data.success)
			setContas([...contas, data.conta])
		}
	}



	// Exibir div ao clicar no menu

	const [agendaVisivel, setAgendaVisivel] = useState(false);

	const abrirdivAgendaFinanceira = () => {

		setAgendaVisivel(!agendaVisivel);
	}

	const [contasVisivel, setContasVisivel] = useState(false);

	const abrirdivContas = () => {

		setContasVisivel(!contasVisivel);
	}

	const [categoriasVisivel, setCategoriasVisivel] = useState(false);

	const abrirdivCategorias = () => {

		setCategoriasVisivel(!categoriasVisivel);
	}

	const [fontesVisivel, setFontesVisivel] = useState(false);

	const abrirdivFontes = () => {

		setFontesVisivel(!fontesVisivel);
	}

	const [relatorioVisivel, setRelatorioVisivel] = useState(false);

	const abrirdivRelatorio = () => {
		setRelatorioVisivel(!relatorioVisivel);
	}




	// Mensagem de sucesso

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








	/*
		const [users, setUsers] = useState([])
		const [showModal, setShowModal] = useState(false)
	
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
	*/

	return (
		<>
			<Header />

			<div id="principal">

				<Content>

					<Container fluid className="conteudo bg-secondary p-5">

						<h1 title='Consulte seu perfil'>Seu perfil</h1>

						<div className='perfil'>

							<div className="perfil1">

								<IconShop className="mb-5" />

								<h1 className='text-primary'><i>{name} {sname}</i></h1>

								<div className="botoes">


									{/* Início do botão de Editar perfil */}
									<Button as="button" className="editar fw-bold" title='Editar perfil' variant="outline-primary" onClick={() => setShowModalEditarPerfil(true)}><FiEdit />
									</Button>

									<Modal
										show={showModalEditarPerfil}
										onHide={() => setShowModalEditarPerfil(false)}
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
									<Button as="button" className='editar fw-bold' title='Avisos' variant="outline-danger" onClick={() => setShowModalAlerta(true)}><AiOutlineAlert className='alerta' /></Button>

									<Modal
										show={showModalAlerta}
										onHide={() => setShowModalAlerta(false)}
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
										<h4 className=''>Idade</h4>
										<span className='bg-secondary'>30 anos</span>
									</div>
									<HiOutlineCake className='moeda' />
								</div>

								<div className="cartao-perfil1">
									<div className="item">
										<h4 className=''>Perfil</h4>
										<span className='bg-secondary'>{level}</span>
									</div>
									<MdOutlineEmojiPeople className='moeda' />
								</div>

								<div className="cartao-perfil1">
									<div className="item">
										<h4 className=''>WiseCoins</h4>
										<span className='bg-secondary'>{wiseCoins}</span>
									</div>
									<BsCoin className='moeda' />
								</div>

								<div className="cartao-perfil1">
									<div className="item">
										<h4 className=''>Experiência</h4>
										<span className='bg-secondary'>Empresário</span>
									</div>
									<BsStars className='moeda' />
								</div>

							</Row>

						</div>

						<br />

						<h1>Seu controle mensal</h1>
						<Row>

							<div className="cartao-perfil col">
								<div className='item'>
									<h4>Mês e Ano</h4>
									<span className='bg-secondary text-success'>{currentMonth} de {currentYear}</span>
								</div>
							</div>

							<div className="cartao-perfil col">
								<div className="item">
									<h4>Valor Recebido</h4>
									<span className='bg-secondary text-success'>{GanhosMes}</span>
									{/*<span>{Recebido}</span>*/}
								</div>

								<div className="botao">
									<Button as="button" variant="outline-success" onClick={() => setShowModalNovoGanho(true)}>Novo</Button>
								</div>

							</div>

							<Modal
								show={showModalNovoGanho}
								onHide={() => setShowModalNovoGanho(false)}
								size="md"
								aria-labelledby="contained-modal-title-vcenter"
								centered
							>
								<Modal.Header closeButton>
									<Modal.Title id="contained-modal-title-vcenter">Novo Ganho</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form onSubmit={handleSubmitNovoGanho}>
										<Form.Group className="campo mb-4">
											<Form.Label>Fonte de Receita</Form.Label>
											<Form.Select
												className='caixa'
												name='fonte'
												value={selectedFonte}
												onChange={(e) => setSelectedFonte(e.target.value)}
											>
												<option value="">Selecione</option>
												{fontesdeReceita.map((fonte, index) => (
													<option key={index} value={fonte}>
														{fonte}
													</option>
												))}
											</Form.Select>
										</Form.Group>
										<Form.Group className="campo mb-4">
											<Form.Label>Descrição</Form.Label>
											<Form.Control
												className='caixa'
												type="text"
												name="descricao"
												value={novaDescricaoGanho}
												onChange={(e) => setNovaDescricaoGanho(e.target.value)}
											/>
										</Form.Group>
										<Form.Group className="campo mb-4">
											<Form.Label>Data</Form.Label>
											<Form.Control
												className='caixa'
												type="date"
												name="data"
												value={novaDataGanho}
												onChange={(e) => setNovaDataGanho(e.target.value)}
											/>
										</Form.Group>
										<Form.Group className='campo mb-4'>
											<Form.Label>Valor a ser adicionado</Form.Label>
											<div className="input-group caixa">
												<span className="input-group-text">R$</span>
												<Form.Control
													type="number"
													step="0.01"  // Permita valores fracionados com duas casas decimais
													name='valor'
													value={novoValorGanho}
													onChange={(event) => setNovoValorGanho(parseFloat(event.target.value))}
												/>
											</div>
										</Form.Group>
										<Button as='button' variant="secondary" type='submit' onClick={handleAdicionarNovoGanho}>
											Adicionar
										</Button>
									</Form>
								</Modal.Body>
								{showConfirmation && (
									<div className="alert alert-success alert-custom" role="alert">
										{confirmationMessage}
									</div>
								)}
							</Modal>



							<div className="cartao-perfil col">
								<div className="item">
									<h4>Valor Gasto</h4>
									<span className='bg-secondary text-success'>{GastosMes}</span>
									{/*<span>{Gasto}</span>*/}
								</div>

								<div className="botao">
									<Button as="button" variant="outline-success" onClick={() => setShowModal6(true)}>Novo</Button>
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
									<Modal.Title id="contained-modal-title-vcenter">Novo Gasto</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form onSubmit={handleSubmitNovoGasto}>
										<Form.Group className="mb-3">
											<Form.Label>Categoria</Form.Label>
											<Form.Select
												name='categoria'
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
											<Form.Label>Descrição</Form.Label>
											<Form.Control
												type="text"
												name='descricao'
												value={novoDescricao}
												onChange={(e) => setNovoDescricao(e.target.value)} />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Data</Form.Label>
											<Form.Control
												type="date"
												name='data'
												value={novaData}
												onChange={(e) => setNovaData(e.target.value)}
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Valor a ser adicionado</Form.Label>
											<div className="input-group">
												<span className="input-group-text">R$</span>
												<Form.Control
													type="number"
													step="0.01"  // Permita valores fracionados com duas casas decimais
													name='valor'
													value={novoValor1}
													onChange={(event) => setNovoValor1(parseFloat(event.target.value))}
												/>
											</div>
										</Form.Group>
										<Button as='button' variant="secondary" type='submit' onClick={handleAdicionarNovoGasto}>
											Adicionar
										</Button>
									</Form>
								</Modal.Body>

								{showConfirmation && (
									<div className="alert alert-success alert-custom" role="alert">
										{confirmationMessage}
									</div>
								)}
							</Modal>


							<div className="cartao-perfil col">
								<div className='item'>
									<h4>Saldo Atual</h4>
									<span className='bg-secondary text-success'>{saldoMes}</span>
									{/*<span>{saldoAtual}</span>*/}
								</div>
							</div>


						</Row>

						<br />

						<Container className='menu'>
							<h1 className='mb-5'>Seu menu</h1>
							<div className="row cartoes-menu">
								<div className="col text-info">
									<Button as='button' variant='secondary' className='botao-menu' onClick={abrirdivAgendaFinanceira}>
										<h4>Agenda Financeira</h4>
										<div className='bg-secondary'><GiClick className='menu-icone' /></div>
									</Button>
								</div>
								<div className="col text-info">
									<Button as='button' variant='secondary' className='botao-menu' onClick={abrirdivContas}>
										<h4>Contas</h4>
										<div className='bg-secondary'><GiClick className='menu-icone' /></div>
									</Button>
								</div>
								<div className="col text-info">
									<Button as='button' variant='secondary' className='botao-menu'>
										<h4>Ganhos</h4>
										<div className='bg-secondary'><GiClick className='menu-icone' /></div>
									</Button>
								</div>
								<div className="col text-info">
									<Button as='button' variant='secondary' className='botao-menu' onClick={abrirdivCategorias}>
										<h4>Gastos por Categoria</h4>
										<div className='bg-secondary'><GiClick className='menu-icone' /></div>
									</Button>
								</div>
							</div>

							<div className='row cartoes-menu'>
								<div className="col text-info">
									<Button as='button' variant='secondary' className='botao-menu' onClick={abrirdivFontes}>
										<h4>Fontes de Receita</h4>
										<div className='bg-secondary'><GiClick className='menu-icone' /></div>
									</Button>
								</div>
								<div className="col text-info">
									<Button as='button' variant='secondary' className='botao-menu' onClick={abrirdivRelatorio}>
										<h4>Relatório</h4>
										<div className='bg-secondary'><GiClick className='menu-icone' /></div>
									</Button>
								</div>
							</div>

						</Container>

						<br />


						<Container className={`painel mt-5 mb-5 ${agendaVisivel ? 'visivel' : 'oculto'}`}>
							<h1 className='mb-5'>Agenda Financeira </h1>

							<div className="tabela p-4">
								<div className="bg-secondary titulo row mb-5">
									<div className="col">{<AiOutlineSchedule className='fs-lg' />}</div>
									<div className="linha col mb-4">Data</div>
									<div className="linha col mb-4">Descrição</div>
									<div className="linha col mb-4">Ação</div>
									<div className="linha col mb-4">Valor</div>
									<div className="linha col mb-4">Status</div>
									<div className="col mb-4"></div>

								</div>

								<div className="bg-secondary pagar row mb-5 pt-1 pb-1">
									<div className="col"><BsArrowUpLeft className='seta text-danger' /></div>
									<div className="col">08/11/23</div>
									<div className="col fw-bold"><i>Financiamento</i></div>
									<div className="col">Pagar</div>
									<div className="col">R$ 1200,00</div>
									<div className="col">Valor</div>
									<div className="col text-danger">Excluir</div>

								</div>

								<div className="bg-secondary receber row mb-5 pt-1 pb-1">
									<div className="col"><BsArrowDownRight className='seta text-primary' /></div>
									<div className="col">10/11/23</div>
									<div className="col fw-bold"><i>Salário</i></div>
									<div className="col">Receber</div>
									<div className="col">R$ 5000,00</div>
									<div className="col">Valor</div>
									<div className="col text-danger">Excluir</div>

								</div>

								<div className="bg-secondary pagar row mb-5 pt-1 pb-1">
									<div className="col"><BsArrowUpLeft className='seta text-danger' /></div>
									<div className="col">11/11/23</div>
									<div className="col fw-bold"><i>Cartão de crédito</i></div>
									<div className="col">Pagar</div>
									<div className="col">R$ 1200,00</div>
									<div className="col">Valor</div>
									<div className="col text-danger">Excluir</div>

								</div>
							</div>

						</Container>

						<br />

						<div className={`contas ${contasVisivel ? 'visivel' : 'oculto'}`}>

							<div className="contas-titulo">
								<h1>Suas contas</h1>
								<div><Button as="button" variant="outline-danger" onClick={() => setShowModalContas(true)}>Cadastrar nova conta</Button>
									<Modal
										show={showModalContas}
										onHide={() => setShowModalContas(false)}
										size="md"
										aria-labelledby="contained-modal-title-vcenter"
										centered
									>
										<Modal.Header closeButton>
											<Modal.Title id="contained-modal-title-vcenter">Nova conta</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Form onSubmit={handleSubmitNovaConta}>

												<Form.Group className="mb-3">
													<Form.Label>Descrição</Form.Label>
													<Form.Control
														type="text"
														name='descricao'
														value={descricaoConta}
														onChange={(e) => setDescricaoConta(e.target.value)}

													/>
												</Form.Group>

												<Form.Group className="mb-3">
													<Form.Label>Valor</Form.Label>
													<div className="input-group">
														<span className="input-group-text">R$</span>
														<Form.Control
															type="number"
															step="0.01"  // Permita valores fracionados com duas casas decimais
															name='valor'
															value={valorConta}
															onChange={(e) => setValorConta(e.target.value)}
														/>
													</div>
												</Form.Group>

												<Form.Group className="mb-3">
													<Form.Label>Dia de vencimento</Form.Label>
													<Form.Control
														type="number"
														name='vencimento'
														value={vencimentoConta}
														onChange={(e) => setVencimentoConta(e.target.value)}
													/>
												</Form.Group>

												<Form.Group className="mb-3">
													<Form.Label>Recorrência</Form.Label>
													<Form.Select
														name='recorrencia'
														value={recorrenciaConta}
														onChange={(e) => setRecorrenciaConta(e.target.value)}
													>
														<option value="MENSAL">Mensal</option>
														<option value="POR_PERIODO">Por Período</option>
													</Form.Select>
												</Form.Group>

												{recorrenciaConta === 'POR_PERIODO' && (
													<>
														<Form.Group className="mb-3">
															<Form.Label>Início do Período</Form.Label>
															<Form.Control
																type="month"
																name='inicioPeriodo'
																value={inicioPeriodoConta}
																onChange={(e) => setInicioPeriodoConta(e.target.value)}
															/>
														</Form.Group>

														<Form.Group className="mb-3">
															<Form.Label>Fim do Período</Form.Label>
															<Form.Control
																type="month"
																name='fimPeriodo'
																value={fimPeriodoConta}
																onChange={(e) => setFimPeriodoConta(e.target.value)}
															/>
														</Form.Group>
													</>
												)}
												<Button as='button' type='submit' variant="secondary" onClick={handleAdicionarNovaConta}>
													Criar
												</Button>
											</Form>
										</Modal.Body>
										{showConfirmation && (
											<div className="alert alert-success alert-custom" role="alert">
												{confirmationMessage}
											</div>
										)}
									</Modal>
								</div>
							</div>

							<div className='conta row'>
												<p className="col text-primary fs-5">Conta</p>
												<p className='col fs-5' >Valor</p>
												<p className='col fs-5'>Vencimento</p>
											</div>
											<br />

								{contas.map((conta, index) => (
									<div className="" key={index}>
										
											<div className='conta row' style={{ backgroundColor: index % 2 === 0 ? 'red' : 'green' }}>
												<p className="col text-primary fs-5">{conta.descricao}</p>
												<p className='col fs-5'>R$ {conta.valor}</p>
												<p className='col fs-5'>{conta.diaVencimento}</p>
											</div>
											<hr />
										<br />
									</div>
								))}

						</div>

						<br />

						<div className={`${categoriasVisivel ? 'visivel' : 'oculto'}`}>

							<Container className="categorias p-5 mb-5">
								<div className="categorias-titulo">
									<h1>Seus gastos por categoria</h1>
									<div><Button as="button" variant="outline-primary" onClick={() => setShowModalCategorias(true)}>Criar nova categoria</Button>
										<Modal
											show={showModalCategorias}
											onHide={() => setShowModalCategorias(false)}
											size="md"
											aria-labelledby="contained-modal-title-vcenter"
											centered
										>
											<Modal.Header className='bg-primary' closeButton>
												<Modal.Title id="contained-modal-title-vcenter">Nova categoria</Modal.Title>
											</Modal.Header>
											<Modal.Body className='bg-secondary text-light'>
												<Form>

													<Form.Group className="mb-3">
														<Form.Label>Veja alguns exemplos de categorias</Form.Label>
														<Form.Control as="select" name="categoria" className='bg-secondary text-light'>
															<option value="">Lista de categorias</option>
															{categorias.map((categoria, index) => (
																<option key={index} value={categoria}>
																	{categoria}
																</option>
															))}
														</Form.Control>
													</Form.Group>

													<Form.Group className="mb-3">
														<Form.Label>Adicione uma nova categoria</Form.Label>
														<Form.Control
															type="text"
															name="novaCategoria"
															value={novaCategoria}
															onChange={(e) => setNovaCategoria(e.target.value)} className='bg-secondary text-light' />
													</Form.Group>

												</Form>
											</Modal.Body>

											<Modal.Footer className='bg-primary'>
												<Button as='button' variant="outline-secondary" onClick={handleAdicionarNovaCategoria} className='fw-bold'>
													Criar
												</Button>
											</Modal.Footer>

											{showConfirmation && (
												<div className="alert alert-success alert-custom" role="alert">
													{confirmationMessage}
												</div>
											)}
										</Modal>
									</div>
								</div>

								<div className='cartoes-categoria'>
									{categorias.map((categoria, index) => (
										<div className="cartao-categoria" key={index}>
											<div className="categoria">
												<p className="fw-bold fs-5">{categoria}</p>
												<p className='valor-categoria bg-secondary'>
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

												{valorGasto > 0 && (
													<p className='percentual-categoria'>
														{gastosPorCategoria[categoria]
															? (
																(gastosPorCategoria[categoria].reduce(
																	(total, gasto) => total + gasto.valor,
																	0
																) / valorGasto) * 100
															).toFixed(2) + "%"
															: "0.00%"}
													</p>
												)}

											</div>

											<hr />

											<div className="botoes">
												<Button
													as="button"
													size="sm"
													variant="outline-primary"
													className="botao"
													onClick={() => mostrarDetalhesCategoria(categoria)
													}
												>
													Detalhar
												</Button>


												<Button
													as="button"
													size="sm"
													variant="outline-danger"
													className="botao"
													onClick={() => handleExcluirCategoria(index)}
												>
													Excluir
												</Button>
											</div>

										</div>
									))}

								</div>


								<Modal
									show={showModalDetalhes}
									onHide={() => setShowModalDetalhes(false)}
									size="lg"
									aria-labelledby="contained-modal-title-vcenter"
									centered
								>
									<Modal.Header closeButton>
										<Modal.Title id="contained-modal-title-vcenter">
											Meus gastos com {categoriaSelecionada}
										</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<div className="row">
											<div className="col fw-bold">Descrição</div>
											<div className="col fw-bold">Data</div>
											<div className="col fw-bold">Valor</div>
										</div>
										<br />
										{categoriaSelecionada && (
											<ul>
												{gastosPorCategoria[categoriaSelecionada]?.map((gasto, index) => (
													<li key={index} className='row'>
														<p className='col'>{gasto.descricao}</p>
														<p className='col'>{gasto.data}</p>
														<p className='col'>{gasto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
														<br />
													</li>
												))}
											</ul>
										)}
									</Modal.Body>
									<Modal.Footer>
										<Button as="button" variant="secondary" onClick={() => setShowModalDetalhes(false)}>
											Fechar
										</Button>
									</Modal.Footer>
								</Modal>


							</Container>


							{categoriasLegenda.length > 0 ? (
								<Container className='grafico text-info'>
									<h1>Perfil de gastos</h1>
									<Pie className='grafico-torta'
										data={dataMyChart}
										options={options}
									/>
								</Container>
							) : null
							}
						</div>

						<div className={`${fontesVisivel ? 'visivel' : 'oculto'}`}>

							<Container className="categorias p-5 mb-5">
								<div className="categorias-titulo">
									<h1>Seus ganhos por fonte de receita</h1>
									<div><Button as="button" variant="outline-primary" onClick={() => setShowModalNovaFonte(true)}>Criar nova fonte de receita</Button>
										<Modal
											show={showModalNovaFonte}
											onHide={() => setShowModalNovaFonte(false)}
											size="md"
											aria-labelledby="contained-modal-title-vcenter"
											centered
										>
											<Modal.Header className='bg-primary' closeButton>
												<Modal.Title id="contained-modal-title-vcenter">Nova fonte de receita</Modal.Title>
											</Modal.Header>
											<Modal.Body className='bg-secondary text-light'>
												<Form>
													<Form.Group className="mb-3">
														<Form.Label>Veja alguns exemplos de fontes de receita</Form.Label>
														<Form.Control as="select" name="categoria" className='bg-secondary text-light'>
															<option value="">Lista de categorias</option>
															{fontesdeReceita.map((fonte, index) => (
																<option key={index} value={fonte}>
																	{fonte}
																</option>
															))}
														</Form.Control>
													</Form.Group>
													<Form.Group className="mb-3">
														<Form.Label>Adicione uma nova fonte de receita</Form.Label>
														<Form.Control type="text" name="novaFonte" value={novaFonte} onChange={(e) => setNovaFonte(e.target.value)} className='bg-secondary text-light' />
													</Form.Group>
												</Form>
											</Modal.Body>
											<Modal.Footer className='bg-primary'>
												<Button as='button' variant="outline-secondary" onClick={handleAdicionarNovaFonte} className='fw-bold'>
													Criar
												</Button>
											</Modal.Footer>
											{showConfirmation && (
												<div className="alert alert-success alert-custom" role="alert">
													{confirmationMessage}
												</div>
											)}
										</Modal>
									</div>
								</div>

								<div className='cartoes-categoria'>
									{fontesdeReceita.map((fonte, index) => (
										<div className="cartao-categoria" key={index}>
											<div className="categoria">
												<p className="fw-bold fs-5">{fonte}</p>
												<p className='valor-categoria bg-secondary'>
													{" "}
													{ganhosPorFonte[fonte]
														? ganhosPorFonte[fonte].reduce(
															(total, ganho) => total + ganho.valor,
															0
														).toLocaleString('pt-BR', {
															style: 'currency',
															currency: 'BRL'
														})
														: 0}
												</p>
												{/*
												{valorGasto > 0 && (
													<p className='percentual-categoria'>
														{gastosPorCategoria[categoria]
															? (
																(gastosPorCategoria[categoria].reduce(
																	(total, gasto) => total + gasto.valor,
																	0
																) / valorGasto) * 100
															).toFixed(2) + "%"
															: "0.00%"}
													</p>
												)}
																*/}

											</div>

											<hr />

											<div className="botoes">
												<Button
													as="button"
													size="sm"
													variant="outline-primary"
													className="botao"
													onClick={() => mostrarDetalhesFonte(fonte)
													}
												>
													Detalhar
												</Button>


												<Button
													as="button"
													size="sm"
													variant="outline-danger"
													className="botao"
													onClick={() => handleExcluirFonte(index)}
												>
													Excluir
												</Button>
											</div>

										</div>
									))}

								</div>


								<Modal
									show={showModalDetalhesFontes}
									onHide={() => setShowModalDetalhesFontes(false)}
									size="lg"
									aria-labelledby="contained-modal-title-vcenter"
									centered
								>
									<Modal.Header closeButton>
										<Modal.Title id="contained-modal-title-vcenter">
											Meus gastos com {fonteSelecionada}
										</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<div className="row">
											<div className="col fw-bold">Descrição</div>
											<div className="col fw-bold">Data</div>
											<div className="col fw-bold">Valor</div>
										</div>
										<br />
										{fonteSelecionada && (
											<ul>
												{ganhosPorFonte[fonteSelecionada]?.map((ganho, index) => (
													<li key={index} className='row'>
														<p className='col'>{ganho.descricao}</p>
														<p className='col'>{ganho.data}</p>
														<p className='col'>{ganho.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
														<br />
													</li>
												))}
											</ul>
										)}
									</Modal.Body>
									<Modal.Footer>
										<Button as="button" variant="secondary" onClick={() => setShowModalDetalhesFontes(false)}>
											Fechar
										</Button>
									</Modal.Footer>
								</Modal>


							</Container>

						</div>
						{/* Fim de Fontes de Receita */}

						{/* Início de Relatório*/}
						{/*
						<div className={`${relatorioVisivel ? 'visivel' : 'oculto'}`}>
							<Container className='relatorio'>
								<h1>Relatório</h1>
								<p className='text-primary'><i>Selecione o mês e o ano para obter um resumo dos valores totais dos seus gastos e ganhos no período escolhido.</i></p>
								<Form>
									<Form.Group className="mb-3">
										<Form.Label>Mês/Ano</Form.Label>
										<Form.Control
											type="month"
											name="mes"
											value={descricao}
											onChange={(e) => setDescricao(e.target.value)}
											className="border border-primary"
										/>
									</Form.Group>
								</Form>
							</Container>
						</div>
												*/}
						{/* Fim de Relatório*/}

					</Container>



				</Content >
			</div >
			<Footer />

		</>
	);
}

export default Home;