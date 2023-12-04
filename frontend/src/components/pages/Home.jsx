import Header from '../layouts/Header';
import Content from "../layouts/Content"
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Footer from '../layouts/Footer';
import { Container, ProgressBar } from 'react-bootstrap';
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
import useUserStore from '../store/UserStore';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from "react-chartjs-2";
import { FaTrashAlt } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');
import { IoMdAddCircle } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { CiBag1 } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
registerLocale('pt', pt);
import React, { useRef } from 'react';
import InputComIcone from '../utils/InputComIcone';
import IconShop from '../utils/IconShop';
import { GiClick } from "react-icons/gi";
import WithLabelExample from '../utils/ProgressBar';


const Home = () => {

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


	//Perfil do usuário

	const [showModalEditarPerfil, setShowModalEditarPerfil] = useState(false);
	const [showModalAlerta, setShowModalAlerta] = useState(false);

	// Dados do store após o login do usuário //
	const name = useUserStore(state => state.name);
	const sname = useUserStore(state => state.sname);
	const photo = useUserStore(state => state.photo);
	const exp = useUserStore(state => state.exp);
	const level = useUserStore(state => state.level);
	const wiseCoins = useUserStore(state => state.wiseCoins);


	// useStates
	const [valorRecebido, setValorRecebido] = useState(0);
	const [valorGasto, setValorGasto] = useState(0);
	const [ganhos, setganhos] = useState([])
	const [somatorioGanhos, setSomatorioGanhos] = useState(0);
	const [gastos, setgastos] = useState([])
	const [somatorioGastos, setSomatorioGastos] = useState(0);
	const [somatorioGanhosMensal, setSomatorioGanhosMensal] = useState(0);
	const [somatorioGastosMensal, setSomatorioGastosMensal] = useState(0);


	// Modais
	const [showModalNovoGanho, setShowModalNovoGanho] = useState(false);
	const [showModalNovoGasto, setShowModalNovoGasto] = useState(false);

	// Controle mensal	

	const MesAno = moment().format('MM/YYYY');

	// Novo ganho

	const [novaDescricaoGanho, setNovaDescricaoGanho] = useState('');
	const [selectedFonte, setSelectedFonte] = useState("");
	const [novaDataGanho, setNovaDataGanho] = useState("");
	const [novoValorGanho, setNovoValorGanho] = useState(0);
	const [ganhosPorFonte, setGanhosPorFonte] = useState({});


	// const handleAdicionarNovoGanho = () => {
	// 	if (selectedFonte && novaDescricaoGanho && novoValorGanho) {

	// 		const novoGanho = {
	// 			descricao: novaDescricaoGanho,
	// 			fonte: selectedFonte,
	// 			valor: novoValorGanho,
	// 			data: novaDataGanho,
	// 		};

	// 		// Cria uma cópia do objeto gastosPorCategoria
	// 		const novosGanhosPorFonte = { ...ganhosPorFonte };

	// 		// Verifica se já existe um array de gastos para a categoria
	// 		if (!novosGanhosPorFonte[selectedFonte]) {
	// 			novosGanhosPorFonte[selectedFonte] = [];
	// 		}

	// 		// Adiciona o novo gasto ao array de gastos da categoria
	// 		novosGanhosPorFonte[selectedFonte].push(novoGanho);

	// 		// Atualiza o estado com os novos gastos por categoria
	// 		setGanhosPorFonte(novosGanhosPorFonte);

	// 		setValorRecebido(valorRecebido + novoValorGanho);

	// 		showConfirmationMessage("Novo ganho adicionado com sucesso!");
	// 	}
	// };


	useEffect(() => {

		const getganhos = async () => {
			const response = await fetch('http://localhost:3000/ganhos/listar')
			const data = await response.json()
			/*console.log(data.success)
			console.log(data.ganhos)*/
			// console.log("ganhos", data)
			setganhos(data)

		}

		getganhos()

	}, [])

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

				setSomatorioGanhosMensal(somatorioGanhosMensal + parseInt(data.ganho.valor));
			}
		}
	}



	// Novo gasto


	const [novoDescricao, setNovoDescricao] = useState('');
	const [selectedCategoria, setSelectedCategoria] = useState("");
	const [novaData, setNovaData] = useState("");
	const [novoValor1, setNovoValor1] = useState(0);
	// const [gastosPorCategoria, setGastosPorCategoria] = useState({});


	// const handleAdicionarNovoGasto = () => {
	// 	if (selectedCategoria && novoDescricao && novoValor1) {

	// 		// Adiciona o novo gasto com a categoria correspondente
	// 		const novoGasto = {
	// 			descricao: novoDescricao,
	// 			categoria: selectedCategoria,
	// 			valor: novoValor1,
	// 			data: novaData,
	// 		};

	// 		// Cria uma cópia do objeto gastosPorCategoria
	// 		const novosGastosPorCategoria = { ...gastosPorCategoria };

	// 		// Verifica se já existe um array de gastos para a categoria
	// 		if (!novosGastosPorCategoria[selectedCategoria]) {
	// 			novosGastosPorCategoria[selectedCategoria] = [];
	// 		}

	// 		// Adiciona o novo gasto ao array de gastos da categoria
	// 		novosGastosPorCategoria[selectedCategoria].push(novoGasto);

	// 		// Atualiza o estado com os novos gastos por categoria
	// 		setGastosPorCategoria(novosGastosPorCategoria);

	// 		// Atualiza o valor total de gastos
	// 		setValorGasto(valorGasto + novoValor1);

	// 		const percentuaisPorCategoria = {};
	// 		for (const categoria in novosGastosPorCategoria) {
	// 			const gastosCategoria = novosGastosPorCategoria[categoria];
	// 			const totalCategoria = gastosCategoria.reduce(
	// 				(total, gasto) => total + gasto.valor,
	// 				0
	// 			);
	// 			const percentual = (totalCategoria / valorGasto) * 100;
	// 			percentuaisPorCategoria[categoria] = percentual;
	// 		}

	// 		showConfirmationMessage("Novo gasto adicionado com sucesso!");
	// 	}
	// };




	useEffect(() => {

		const getgastos = async () => {
			const response = await fetch('http://localhost:3000/gastos/listar')
			const data = await response.json()
			/*console.log(data.success)
			console.log(data.gastos)*/
			// console.log("todos os gastos", data)
			setgastos(data)
		}

		getgastos()

	}, [])


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
			showConfirmationMessage("Novo gasto adicionado com sucesso!");

			const dataGasto = new Date(data.gasto.data);
			const dataAtual = new Date();

			dataGasto.setMonth(dataGasto.getMonth() + 1);
			dataAtual.setMonth(dataAtual.getMonth() + 1);

			// console.log(dataGasto.getMonth(), dataGasto.getFullYear())
			// console.log(dataAtual.getMonth(), dataAtual.getFullYear())

			if (dataGasto.getMonth() === dataAtual.getMonth() &&
				dataGasto.getFullYear() === dataAtual.getFullYear()) {

				setSomatorioGastosMensal(somatorioGastosMensal + parseInt(data.gasto.valor));
			}
		}
	}



	// Fontes de receita

	const [showModalNovaFonte, setShowModalNovaFonte] = useState(false);
	const [fontesCadastradas, setFontesCadastradas] = useState([
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
	const [fontes, setFontes] = useState([]);
	const [novaFonte, setNovaFonte] = useState('');


	const adicionarFonte = (novaFonte) => {
		setFontesCadastradas([...fontesCadastradas, novaFonte]);
	};

	const handleAdicionarNovaFonte = () => {
		if (novaFonte) {
			adicionarFonte(novaFonte);
			showConfirmationMessage("Nova fonte de receita criada com sucesso!");
			setNovaFonte('');
		}
	};

	const handleExcluirFonte = (index) => {
		const novasFontes = [...fontesCadastradas];
		novasFontes.splice(index, 1);
		setFontes(novasFontes);
	};

	const [fonteSelecionada, setFonteSelecionada] = useState("");
	const [showModalDetalhesFontes, setShowModalDetalhesFontes] = useState(false);

	const mostrarDetalhesFonte = (fonte) => {
		setFonteSelecionada(fonte);
		setShowModalDetalhesFontes(true);
	};

	useEffect(() => {

		const getGanhosPorFonte = async () => {
			const response = await fetch('http://localhost:3000/ganhos/fontes')
			const data = await response.json()
			// console.log("data", data)
			setFontes(data);
		}

		getGanhosPorFonte()

	}, [])



	// Categorias

	const [showModalCategorias, setShowModalCategorias] = useState(false);
	const [categoriasCadastradas, setCategoriasCadastradas] = useState([
		"Alimentação",
		"Saúde",
		"Lazer",
		"Impostos",
		"Investimentos",
		"Compras",
		"Contas",
		"Financiamento",
		"Aluguel"]);
	const [categorias, setCategorias] = useState([]);
	const [novaCategoria, setNovaCategoria] = useState('');




	const adicionarCategoria = (novaCategoria) => {
		setCategorias([...categoriasCadastradas, novaCategoria]);
	};

	const handleAdicionarNovaCategoria = () => {
		if (novaCategoria) {
			adicionarCategoria(novaCategoria);
			showConfirmationMessage("Nova categoria criada com sucesso!");
			setNovaCategoria('');
		}
	};

	const handleExcluirCategoria = (index) => {
		const novasCategorias = [...categoriasCadastradas];
		novasCategorias.splice(index, 1);
		setCategoriasCadastradas(novasCategorias);
	};


	const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
	const [showModalDetalhes, setShowModalDetalhes] = useState(false);

	const mostrarDetalhesCategoria = (categoria) => {
		setCategoriaSelecionada(categoria);
		setShowModalDetalhes(true);
	};

	useEffect(() => {

		const getGastosPorCategoria = async () => {
			const response = await fetch('http://localhost:3000/gastos/categorias')
			const data = await response.json()
			// console.log("data", data)
			setCategorias(data);
		}

		getGastosPorCategoria()

	}, [])




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

		categoriasLegenda.push(categoria.categoria)
		labelsColors.push(colors[index])
		valorCategorias.push(categoria.totalGasto)

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

	const [contas, setContas] = useState([]);
	const [contasAgenda, setContasAgenda] = useState([]);

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
			// console.log(data)
			setContas(data)
		}

		getcontas()

	}, [])

	//Organizar as contas numa agenda
	useEffect(() => {
		const getContasAgenda = async () => {
			try {
				const response = await fetch('http://localhost:3000/contas/agenda');
				if (!response.ok) {
					throw new Error('Erro ao obter contas para a agenda');
				}
				const contas = await response.json();

				// Ordenar contas por dia de vencimento
				const contasOrdenadas = contas.sort((a, b) => a.diaVencimento - b.diaVencimento);

				// Filtrar contas válidas
				const contasFiltradas = contasOrdenadas.reduce((acc, conta) => {
					let vencimento;

					if (conta.recorrencia === 'MENSAL') {
						// Se a recorrência for "MENSAL", definir vencimento para o diaVencimento/mês corrente/ano corrente
						let dataAtual = new Date();
						vencimento = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), conta.diaVencimento);

						let diaDoMes = dataAtual.getDate();


						if ((vencimento < dataAtual) && (conta.diaVencimento != diaDoMes)) {
							/*console.log(`Ajustando data para o próximo mês para conta ${conta.id}`);*/
							vencimento.setMonth(vencimento.getMonth() + 1);
						}

						// console.log("eita", vencimento)

						const formatoData = moment(vencimento).format('DD-MM-YYYY');
						acc.push({
							...conta,
							vencimento: formatoData,
						});

						// console.log("vish", formatoData)

					} else if (conta.recorrencia === 'POR_PERIODO' && conta.periodo) {
						// Se a recorrência for "POR_PERIODO" e houver um período associado
						let dataAtual = new Date();
						let formatoDataAtual = `${dataAtual.getFullYear()}-${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}`;
						const dataMoment = moment(formatoDataAtual, 'YYYY-MM');


						// const inicioPeriodo = new Date(conta.periodo.inicio);
						// const fimPeriodo = new Date(conta.periodo.fim);

						const inicioPeriodo = moment(conta.periodo.inicio, 'YYYY-MM');
						const fimPeriodo = moment(conta.periodo.fim, 'YYYY-MM');


						let diaDoMes = dataAtual.getDate();
						if (dataMoment >= inicioPeriodo && dataMoment <= fimPeriodo) {
							// Se a data atual estiver dentro do período, definir vencimento
							vencimento = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), conta.diaVencimento);
							// console.log("aqui", vencimento)

							let hoje = new Date;
							if ((vencimento < hoje) && (conta.diaVencimento != diaDoMes)) {
								/*console.log(`Ajustando data para o próximo mês para conta ${conta.id}`);*/
								vencimento.setMonth(vencimento.getMonth() + 1);
							}

							const formatoData = moment(vencimento).format('DD-MM-YYYY');

							acc.push({
								...conta,
								vencimento: formatoData,
							});

						}

						else {
							console.log(`A conta ${conta.id} não está dentro do período e não será adicionada.`);
						}

					}

					return acc;
				}, []).filter(Boolean);

				// Ordenar contas filtradas
				// console.log("Contas Filtradas: ", contasFiltradas)
				const contasFiltradasOrdenadas = contasFiltradas.sort((a, b) => {
					const [diaA, mesA, anoA] = a.vencimento.split('-').map(Number);
					const [diaB, mesB, anoB] = b.vencimento.split('-').map(Number);

					// Criar objetos Date a partir dos valores extraídos
					const dataVencimentoA = new Date(anoA, mesA - 1, diaA); // O mês é base 0 no objeto Date
					const dataVencimentoB = new Date(anoB, mesB - 1, diaB);

					return dataVencimentoA - dataVencimentoB;
				});
				/*console.log(contasFiltradasOrdenadas);*/

				setContasAgenda(contasFiltradasOrdenadas);

			} catch (error) {
				console.error('Erro na requisição:', error);
			}
		};

		getContasAgenda();

	}, [contas]);


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
			/*alert(data.success)*/
			showConfirmationMessage("Nova conta criada com sucesso!");
			// console.log("veja", data.conta)
			setContas([...contas, data.conta])
			setContasAgenda([...contasAgenda, data.conta]);
		}
	}


	// Adicione esta função ao seu componente
	/*const calcularDiasRestantes = (dataVencimento) => {
		const dataAtual = moment();
		const dataVencimentoFormatada = moment(dataVencimento, 'DD-MM-YYYY');

		// Calcula a diferença em dias
		const diasRestantes = dataVencimentoFormatada.diff(dataAtual, 'days');
		console.log("faltam", diasRestantes)
		console.log("data atual",dataAtual)
		console.log("dataVencimentoFormatada",dataVencimentoFormatada)

		let mensagem = '';
		let corFundo = '';

		if (diasRestantes === 0) {
			mensagem = 'Vence hoje!';
			corFundo = 'red';
		} else if (diasRestantes === 1) {
			mensagem = 'Vence amanhã!';
			corFundo = 'red';
		}
		else if (diasRestantes >= 2 && diasRestantes <= 5) {
			mensagem = `Vence em ${diasRestantes} dias!`;
			corFundo = 'yellow';
		}
		else {
			mensagem = 'Fique tranquilo!';
			corFundo = 'green'
		}

		return { mensagem, corFundo };
	};*/

	const calcularDiasRestantes = (dataVencimento) => {
		const dataAtual = new Date();
		// console.log('dados:  ', dataVencimento)
		const partesDataVencimento = dataVencimento.split('-');
		// console.log(partesDataVencimento)
		const dataVencimentoFormatada = new Date(partesDataVencimento[2], partesDataVencimento[1] - 1, partesDataVencimento[0]);

		// Calcula a diferença em dias
		const umDiaEmMilissegundos = 24 * 60 * 60 * 1000; // Número de milissegundos em um dia
		const diferencaEmMilissegundos = dataVencimentoFormatada - dataAtual;
		const diasRestantes = Math.ceil(diferencaEmMilissegundos / umDiaEmMilissegundos);

		// console.log("faltam", diasRestantes);

		let mensagem = '';
		let corFundo = '';

		if (diasRestantes === 0) {
			mensagem = 'Vence hoje!';
			corFundo = 'bg-danger red';
		} else if (diasRestantes === 1) {
			mensagem = 'Vence amanhã!';
			corFundo = 'bg-danger red';
		} else if (diasRestantes >= 2 && diasRestantes <= 5) {
			mensagem = `Vence em ${diasRestantes} dias!`;
			corFundo = 'bg-danger red';
		} else {
			mensagem = 'Fique tranquilo!';
			corFundo = 'green';
		}

		return { mensagem, corFundo };
	};

	// const [showModalEditarConta, setShowModalEditarConta] = useState(false);
	// const [contaIdParaEditar, setContaIdParaEditar] = useState(null);

	// const handleEditarConta = (contaId) => {

	// 	setContaIdParaEditar(contaId);

	// 	setShowModalEditarConta(true);
	// }


	// const handleSubmitEditarConta = async (event) => {
	// 	event.preventDefault();

	// 	if (!contaIdParaEditar) {
	// 		console.error('ID da conta não definido.');
	// 		return;
	// 	}

	// 	try {

	// 		let novoPeriodo;
	// 		event.target.recorrencia.value === 'MENSAL' ? (novoPeriodo = null) : (
	// 			novoPeriodo = {
	// 				inicio: event.target.inicioPeriodo.value,
	// 				fim: event.target.fimPeriodo.value,
	// 			})


	// 		const contaEditada = {
	// 			descricao: event.target.descricao.value,
	// 			valor: event.target.valor.value,
	// 			diaVencimento: parseInt(event.target.vencimento.value, 10),
	// 			recorrencia: event.target.recorrencia.value,
	// 			periodo: novoPeriodo,
	// 		};

	// 		const response = await fetch(`http://localhost:3000/contas/editar/${contaIdParaEditar}`, {
	// 			method: 'PATCH',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			  },
	// 			  body: JSON.stringify(contaEditada),
	// 		});

	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			// Atualize o estado ou realize alguma ação após a exclusão bem-sucedida
	// 			showConfirmationMessage("Conta editada com sucesso!");
	// 			setTimeout(() => {
	// 				setShowModalEditarConta(false);
	// 			}, 2000);

	// 			setContasAgenda((prevContas) => prevContas.map((conta) => conta.id === contaIdParaEditar?
	// 			{
	// 				...conta,
	// 				// Adicione dados específicos da resposta, se necessário
	// 				dadosAdicionais: data.dadosAdicionais,
	// 			  }
	// 			: conta));
	// 		} else {
	// 			// Trate o caso em que a exclusão falhou
	// 			console.error('Erro ao editar conta:', response.statusText);
	// 			// Adicione lógica de tratamento de erro, se necessário
	// 		}
	// 	} catch (error) {
	// 		// Trate qualquer erro que possa ocorrer durante a exclusão
	// 		console.error('Erro ao editar conta:', error);
	// 		// Adicione lógica de tratamento de erro, se necessário
	// 	}
	// };


	const [showModalExcluirConta, setShowModalExcluirConta] = useState(false);
	const [contaIdParaExcluir, setContaIdParaExcluir] = useState(null);

	const handleExcluirConta = (contaId) => {
		// Define o ID da conta no estado ou em outro local, se necessário
		setContaIdParaExcluir(contaId);

		// Abre o modal de confirmação
		setShowModalExcluirConta(true);
	};



	const handleSubmitExcluirConta = async (event) => {
		event.preventDefault();

		if (!contaIdParaExcluir) {
			console.error('ID da conta não definido.');
			return;
		}

		try {
			const response = await fetch(`http://localhost:3000/contas/deletar/${contaIdParaExcluir}`, {
				method: 'DELETE',
			});

			if (response.ok) {
				// Atualize o estado ou realize alguma ação após a exclusão bem-sucedida
				showConfirmationMessage("Conta excluída com sucesso!");
				setTimeout(() => {
					setShowModalExcluirConta(false);
				}, 2000);

				setContasAgenda((prevContas) => prevContas.filter((conta) => conta.id !== contaIdParaExcluir));
			} else {
				// Trate o caso em que a exclusão falhou
				console.error('Erro ao excluir conta:', response.statusText);
				// Adicione lógica de tratamento de erro, se necessário
			}
		} catch (error) {
			// Trate qualquer erro que possa ocorrer durante a exclusão
			console.error('Erro ao excluir conta:', error);
			// Adicione lógica de tratamento de erro, se necessário
		}
	};






	// const [categoriasVisivel, setCategoriasVisivel] = useState(false);

	// const abrirdivCategorias = () => {

	// 	setCategoriasVisivel(!categoriasVisivel);
	// }

	// const [fontesVisivel, setFontesVisivel] = useState(false);

	// const abrirdivFontes = () => {

	// 	setFontesVisivel(!fontesVisivel);
	// }

	const [relatorioVisivel, setRelatorioVisivel] = useState(false);
	const [erroData, setErroData] = useState('');
	const [dataInput, setDataInput] = useState(null);
	const inputRef = useRef();

	const abrirdivRelatorio = () => {
		if (dataInput) {
			setRelatorioVisivel(true);
		} else {
			// Se a data não for válida, pode exibir uma mensagem de erro ou tomar outra ação necessária
			setErroData('Por favor, selecione uma data.');
		}
	}


	const handleSubmitRelatorio = async (event) => {
		event.preventDefault()

		setRelatorioVisivel(false);

		// Lógica de validação
		if (!dataInput) {
			console.log('Erro: Por favor, selecione uma data.');
			setErroData('Por favor, selecione uma data.');
			return;
		}

		// Validar se a data escolhida é maior que a data atual
		const dataAtual = new Date();

		if (dataInput > dataAtual) {
			console.log('Erro: Você não pode consultar datas futuras.');
			setErroData('Você não pode consultar datas futuras.');
			return;
		}

		// Se a data for válida, limpar qualquer mensagem de erro existente
		setErroData('');


		const dataRelatorio = {
			data: moment(dataInput).format('YYYY-MM'),
		};

		// console.log("dataInput:", dataRelatorio)

		const response = await fetch(`http://localhost:3000/relatorio?data=${dataRelatorio.data}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}

		})

		if (response.ok) {
			const data = await response.json()
			// alert(data.success)
			// console.log('Somatório de Gastos:', data.somatorioGastos);
			// console.log('Somatório de Ganhos:', data.somatorioGanhos);
			setSomatorioGanhos(data.somatorioGanhos);
			setSomatorioGastos(data.somatorioGastos);
			abrirdivRelatorio();
		}
		else {
			console.error('Erro ao obter relatório:', response.statusText);
			// Lógica de tratamento de erro, se necessário
			setRelatorioVisivel(false);
		}
	}

	const somaGanhos = somatorioGanhos.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	const somaGastos = somatorioGastos.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	const saldoTotal = (somatorioGanhos - somatorioGastos).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});




	useEffect(() => {

		const getControleMensal = async () => {

			const dataControle = {
				data: moment().format('YYYY-MM'),
			};


			const response = await fetch(`http://localhost:3000/relatorio?data=${dataControle.data}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}

			})

			if (response.ok) {
				const data = await response.json()
				// alert(data.success)
				// console.log('Somatório de Gastos Mensais:', data.somatorioGastos);
				// console.log('Somatório de Ganhos Mensais:', data.somatorioGanhos);
				setSomatorioGanhosMensal(data.somatorioGanhos);
				setSomatorioGastosMensal(data.somatorioGastos);
			}
			else {
				console.error('Erro ao obter relatório:', response.statusText);
			}
		}

		getControleMensal()

	}, [])

	const somaGanhosMensal = somatorioGanhosMensal.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	const somaGastosMensal = somatorioGastosMensal.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	const saldoTotalMensal = (somatorioGanhosMensal - somatorioGastosMensal).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});






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
											{/* onClick={handleAdicionarNovoGanho} */}
											<Button as='button' variant="secondary">
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
								<WithLabelExample />

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
						<Container className='controle border'>
							<h1>Controle Mensal</h1>
							<Row>

								<div className="cartao-perfil col">
									<div className='item'>
										<h4>Mês/Ano</h4>
										<span className='bg-secondary text-success'>{MesAno}</span>
									</div>
								</div>

								<div className="cartao-perfil col">
									<div className="item">
										<h4>Valor Recebido</h4>
										<span className='bg-secondary text-success'>{somaGanhosMensal}</span>
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
													{fontesCadastradas.map((fonte, index) => (
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
											{/* onClick={handleAdicionarNovoGanho} */}
											<Button as='button' variant="secondary" type='submit'>
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
										<span className='bg-secondary text-success'>{somaGastosMensal}</span>
										{/*<span>{Gasto}</span>*/}
									</div>

									<div className="botao">
										<Button as="button" variant="outline-success" onClick={() => setShowModalNovoGasto(true)}>Novo</Button>
									</div>
								</div>

								<Modal
									show={showModalNovoGasto}
									onHide={() => setShowModalNovoGasto(false)}
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
													{categoriasCadastradas.map((categoria, index) => (
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
											{/* onClick={handleAdicionarNovoGasto} */}
											<Button as='button' variant="secondary" type='submit'>
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
										<span className='bg-secondary text-success'>{saldoTotalMensal}</span>
										{/*<span>{saldoAtual}</span>*/}
									</div>
								</div>

							</Row>

							<div className='botoes'>
								<div className=''><Button className='click' as="button" variant="secondary" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#fff" }} onClick={() => setShowModalNovaFonte(true)}>Ver fontes de receita<GiClick className='icone-click' /></Button>
									<Modal
										show={showModalNovaFonte}
										onHide={() => setShowModalNovaFonte(false)}
										size="md"
										aria-labelledby="contained-modal-title-vcenter"
										centered
									>
										<Modal.Header closeButton>
											<Modal.Title id="contained-modal-title-vcenter">Nova fonte de receita</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Form>
												<Form.Group className="mb-3">
													<Form.Label>Veja alguns exemplos de fontes de receita</Form.Label>
													<Form.Control as="select" name="categoria">
														<option value="">Lista de fontes de receita</option>
														{fontesCadastradas.map((fonte, index) => (
															<option key={index} value={fonte}>
																{fonte}
															</option>
														))}
													</Form.Control>
												</Form.Group>
												<Form.Group className="mb-3">
													<Form.Label>Adicione uma nova fonte de receita</Form.Label>
													<Form.Control type="text" name="novaFonte" value={novaFonte} onChange={(e) => setNovaFonte(e.target.value)} />
												</Form.Group>
											</Form>
										</Modal.Body>
										<Modal.Footer>
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
								<div className=''><Button className='click' as="button" variant="secondary" style={{ display: "flex", alignItems: "center", gap: "5px", color: "#fff" }} onClick={() => setShowModalCategorias(true)}>Ver categorias de gastos<GiClick className='icone-click' /></Button>
									<Modal
										show={showModalCategorias}
										onHide={() => setShowModalCategorias(false)}
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
													<Form.Label>Veja alguns exemplos de categorias</Form.Label>
													<Form.Control as="select" name="categoria">
														<option value="">Lista de categorias</option>
														{categoriasCadastradas.map((categoria, index) => (
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
														onChange={(e) => setNovaCategoria(e.target.value)} />
												</Form.Group>

											</Form>
										</Modal.Body>

										<Modal.Footer>
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
						</Container>
						<br />

						{/* <Container className='menu'>
							<h1 className='mb-5'>Seu menu</h1>
							<div className="row cartoes-menu">

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

						</Container> */}


						<Container className='painel mt-5 mb-5 border'>
							<h1>Agenda Financeira</h1>

							<div className="tabela pt-5 pb-5">
								<div className="bg-secondary titulo row pt-4 pb-4">

									<div className="linha col">Descrição</div>
									<div className="linha col">Vencimento</div>
									<div className="linha col">Status</div>
									<div className="linha col">Valor</div>
									<div className="linha col-1">Ação</div>

								</div>

								<div>
									{contasAgenda.map((conta) => {
										const { mensagem, corFundo } = calcularDiasRestantes(conta.vencimento);

										return (
											<div key={conta.id} className='pagar row pt-3 pb-3'>

												<div className="descricao-conta col">
													<FaPiggyBank className='moeda' />
													{conta.descricao}
												</div>
												<div className="col">
													<CiCalendar className='icone-conta' />
													{conta.vencimento}
												</div>
												<div className="col"><span className={`${corFundo}`}>{mensagem}</span>

												</div>
												{/* <CiBullhorn className='icone-conta' /> */}
												<div className="col">
													<CiBag1 className='icone-conta' />
													{Number(conta.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
												</div>
												<div className="col-1">
													{/* <Button as='button' variant='outline-info' className='bg-transparent' title='Editar' onClick={handleEditarConta(conta.id)}><MdEdit /></Button> */}
													<Button as='button' variant='outline-info' className='bg-transparent' title='Excluir' onClick={() => handleExcluirConta(conta.id)}>
														<FaTrashAlt />
													</Button>
												</div>


												{/* <Modal
													show={showModalEditarConta}
													onHide={() => setShowModalEditarConta(false)}
													size="md"
													aria-labelledby="contained-modal-title-vcenter"
													centered
												>
													<Modal.Header closeButton>
														<Modal.Title id="contained-modal-title-vcenter">Editar despesa</Modal.Title>
													</Modal.Header>
													<Modal.Body>
														<Form onSubmit={handleSubmitEditarConta}>

															<Form.Group className="mb-3">
																<Form.Label>Descrição</Form.Label>
																<Form.Control
																	type="text"
																	name='descricao'
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
																	/>
																</div>
															</Form.Group>

															<Form.Group className="mb-3">
																<Form.Label>Dia de vencimento</Form.Label>
																<Form.Control
																	type="number"
																	name='vencimento'
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
																		/>
																	</Form.Group>

																	<Form.Group className="mb-3">
																		<Form.Label>Fim do Período</Form.Label>
																		<Form.Control
																			type="month"
																			name='fimPeriodo'
																		/>
																	</Form.Group>
																</>
															)}
															<Button as='button' type='submit' variant="secondary">
																Salvar
															</Button>
														</Form>
													</Modal.Body>
													{showConfirmation && (
														<div className="alert alert-success alert-custom" role="alert">
															{confirmationMessage}
														</div>
													)}
												</Modal> */}

												<Modal
													show={showModalExcluirConta}
													onHide={() => setShowModalExcluirConta(false)}
													size="md"
													aria-labelledby="contained-modal-title-vcenter"
													centered
												>
													<Modal.Header closeButton></Modal.Header>
													<Modal.Body>
														<Form onSubmit={handleSubmitExcluirConta}>
															Tem certeza que quer excluir essa despesa?
															<br />
															<br />
															<Button as='button' type='submit' variant="secondary">
																Excluir
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
										);
									})}
								</div>

								<br />

								<div className="botao-painel">
									<Button as="button" variant="secondary" onClick={() => setShowModalContas(true)} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#fff" }}>Nova despesa<GiClick className='icone-click' /></Button>

									<Modal
										show={showModalContas}
										onHide={() => setShowModalContas(false)}
										size="md"
										aria-labelledby="contained-modal-title-vcenter"
										centered
									>
										<Modal.Header closeButton>
											<Modal.Title id="contained-modal-title-vcenter">Nova despesa</Modal.Title>
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
												<Button as='button' type='submit' variant="secondary">
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


						</Container>

						{/*style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#D3D3D3' }}*/}
						{/* className={`${categoriasVisivel ? 'visivel' : 'oculto'}`} */}

						<div>

							<Container className="categorias p-5 mb-5">
								<div className="categorias-titulo">
									<h1>Gastos por Categoria</h1>
								</div>



								<div className='cartoes-categoria'>
									{categorias.map((categoria, index) => (
										<div className="cartao-categoria" key={index}>
											<div className="categoria">
												<h4 className="fs-5">{categoria.categoria}</h4>
												<p className='valor-categoria bg-secondary'>
													{parseFloat(categoria.totalGasto).toLocaleString('pt-BR', {
														style: 'currency',
														currency: 'BRL',
													})}
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

											<div>
												<Button
													as="button"
													size=""
													variant="outline-primary"
													className="botao"
													onClick={() => mostrarDetalhesCategoria(categoria)
													}
												>
													Listar
												</Button>

											</div>

										</div>
									))}

								</div>


								{/* <Modal
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
								</Modal> */}


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

						{/* className={`${fontesVisivel ? 'visivel' : 'oculto'}`} */}
						<div>

							<Container className="categorias p-5 mb-5">
								<div className="categorias-titulo">
									<h1>Ganhos por Fonte de Receita</h1>
								</div>

								<div className='cartoes-categoria'>
									{fontes.map((fonte, index) => (
										<div className="cartao-categoria" key={index}>
											<div className="categoria">
												<h4 className="fs-5">{fonte.fonte}</h4>
												<p className='valor-categoria bg-secondary'>
													{parseFloat(fonte.totalGanho).toLocaleString('pt-BR', {
														style: 'currency',
														currency: 'BRL',
													})}
												</p>
											</div>

											<hr />

											<div>
												<Button
													as="button"
													variant="outline-primary"
													className="botao"
													onClick={() => mostrarDetalhesFonte(fonte)
													}
												>
													Listar
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
						<Container className='relatorio'>
							<div >
								<h1>Relatório</h1>
								<hr className='text-info' />
								<p className='text-primary'><i>Selecione o mês e o ano e clique em "consultar" para obter um resumo dos valores totais dos seus gastos e ganhos.</i></p>
								<br />
								<Form onSubmit={handleSubmitRelatorio}>
									<div className="form-relatorio">
										<Form.Group className="mb-3 data-relatorio">
											<Form.Label><h4>Mês/Ano</h4></Form.Label>
											<DatePicker
												name='dataInput'
												selected={dataInput}
												onChange={(date) => {
													setDataInput(date);
													setErroData('');
												}}
												showMonthYearPicker
												dateFormat="MM/yyyy"
												customInput={<InputComIcone ref={inputRef} />}
												className={`form-control bg-secondary text-info ${erroData ? 'is-invalid' : ''}`}
												locale="pt"
											/>
										</Form.Group>

										<Button as='button' type='submit' variant='outline-primary'>Consultar</Button>

									</div>
								</Form>
								{erroData && <Form.Control.Feedback type="invalid">{erroData}</Form.Control.Feedback>}
								<div className={`${relatorioVisivel && somaGanhos && somaGastos && saldoTotal ? 'visivel' : 'oculto'}`}>
									<hr />
									<p className='text-warning'><i>Resultados obtidos em {moment().format('DD/MM/YYYY [às] HH[:]mm')}</i></p>
									<br />
									<div className="row">
										<h4 className='col-3'>Valor Ganho</h4>
										<p className='bg-secondary dado-relatorio col'>{somaGanhos}</p>
									</div>
									<div className="row">
										<h4 className='col-3'>Valor Gasto</h4>
										<p className='bg-secondary dado-relatorio col'>{somaGastos}</p>
									</div>
									<div className="row">
										<h4 className='col-3'>Saldo Total</h4>
										<p className='bg-secondary dado-relatorio col'>{saldoTotal}</p>
									</div>
								</div>
							</div>
						</Container>


						{/* Fim de Relatório*/}


					</Container>


				</Content >
			</div >
			<Footer />

		</>
	);
}

export default Home;