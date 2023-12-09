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
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from "react-chartjs-2";

import { Bar } from 'react-chartjs-2';
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

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
import { GiClick, GiConsoleController } from "react-icons/gi";
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
	const token = useUserStore(state => state.userToken)
	const name = useUserStore(state => state.name);
	const sname = useUserStore(state => state.sname);
	const photo = useUserStore(state => state.photo);
	const exp = useUserStore(state => state.exp);
	const level = useUserStore(state => state.level);
	const wiseCoins = useUserStore(state => state.wiseCoins);

	// 	const sessionToken = await createSession(user.id, req, res);
	// if (sessionToken) {
	//     const userToken = await createToken(user.id);
	//     return res.status(200).json({
	//         success: true,
	//         message: 'Usuário autenticado com sucesso.',
	//         userData: {
	//             id: user.id,
	//             name: user.name,
	//             sname: user.sname,
	//             photo: user.photo,
	//             wiseCoins: user.wiseCoins,
	//             level: user.level,
	//             exp: user.exp,
	//         },
	//         userToken,
	//     });
	// }

	// const handleLogin = async () => {
	//     // Lógica de autenticação...
	//     const response = await login(userInput);
	//     const userId = response.userData.id;
	//     // Restante do código...
	// }


	// useStates
	const [ganhos, setganhos] = useState([])
	const [somatorioGanhos, setSomatorioGanhos] = useState(0);
	const [gastos, setgastos] = useState([])
	const [somatorioGastos, setSomatorioGastos] = useState(0);
	const [somatorioGanhosMensal, setSomatorioGanhosMensal] = useState(0);
	const [somatorioGastosMensal, setSomatorioGastosMensal] = useState(0);
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
	const [ganhosFonteAtual, setGanhosFonteAtual] = useState([]);
	const [fonteAtual, setFonteAtual] = useState("");
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


	// Modais
	const [showModalNovoGanho, setShowModalNovoGanho] = useState(false);
	const [showModalNovoGasto, setShowModalNovoGasto] = useState(false);
	const [showModalDetalhesFontes, setShowModalDetalhesFontes] = useState(false);
	const [showModalNovaFonte, setShowModalNovaFonte] = useState(false);
	const [showModalCategorias, setShowModalCategorias] = useState(false);

	// Controle mensal	

	const MesAno = moment().format('MM/YYYY');

	// Novo ganho

	useEffect(() => {

		const getganhos = async () => {
			const response = await fetch('http://localhost:3000/ganhos/listar')
			const data = await response.json();
			setganhos(data);
		}

		getganhos()

	}, [])


	const getGanhosPorFonte = async () => {
		const response = await fetch('http://localhost:3000/ganhos/fontes');
		const data = await response.json();
		setFontes(data);
		console.log("fontes", fontes);
	};

	const handleSubmitNovoGanho = async (event) => {
		event.preventDefault();
		const novoGanho = {
			descricao: event.target.descricao.value,
			fonte: event.target.fonte.value,
			data: event.target.data.value,
			valor: event.target.valor.value,
			//   userId: userId,
		};
		console.log(novoGanho);

		const response = await fetch('http://localhost:3000/ganhos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(novoGanho),
		});

		if (response.ok) {
			const data = await response.json();
			showConfirmationMessage("Novo ganho adicionado com sucesso!");

			const dataGanho = new Date(data.ganho.data);
			const dataAtual = new Date();

			dataGanho.setMonth(dataGanho.getMonth() + 1);
			dataAtual.setMonth(dataAtual.getMonth() + 1);

			if (
				dataGanho.getMonth() === dataAtual.getMonth() &&
				dataGanho.getFullYear() === dataAtual.getFullYear()
			) {
				setSomatorioGanhosMensal(
					somatorioGanhosMensal + parseInt(data.ganho.valor)
				);
			}

			setganhos([...ganhos, data.ganho]);

			setFontes((prevFontes) => {
				const fonteExistente = prevFontes.find((f) => f.fonte === novoGanho.fonte);

				if (fonteExistente) {
					// Atualiza o total de ganhos para a fonte existente
					fonteExistente.totalGanho = parseFloat(fonteExistente.totalGanho) + parseFloat(novoGanho.valor);
					return [...prevFontes];
				} else {
					// Adiciona uma nova fonte
					return [
						...prevFontes,
						{
							fonte: novoGanho.fonte,
							totalGanho: parseFloat(novoGanho.valor), // Certifique-se de converter para número
							ganhos: [data.ganho], // Inicializa com um array contendo o novo ganho
						},
					];
				}
			});


			getGanhosPorFonte();
		}
	};

	useEffect(() => {
		getGanhosPorFonte();
	}, []);




	// Novo gasto

	useEffect(() => {

		const getgastos = async () => {
			if (!token) return 
			const response = await fetch('http://localhost:3000/gastos/listar', {
				headers: {
					"Authorization": `Bearer: ${token}`
				}
			});
			const data = await response.json();
			setgastos(data);
		}

		getgastos()

	}, [token])


	const getGastosPorCategoria = async () => {
		if (!token) return 

		const response = await fetch('http://localhost:3000/gastos/categorias', {
			headers: {
				"Authorization": `Bearer: ${token}`
			}
		});
		const data = await response.json();
		setCategorias(data);
		console.log("categorias", categorias);
	};

	const handleSubmitNovoGasto = async (event) => {
		event.preventDefault();
		if (!token) return 
		const novoGasto = {
			descricao: event.target.descricao.value,
			categoria: event.target.categoria.value,
			data: event.target.data.value,
			valor: event.target.valor.value,
		};
		console.log(novoGasto);

		const response = await fetch('http://localhost:3000/gastos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `Bearer: ${token}`
			},
			body: JSON.stringify(novoGasto),
		});

		if (response.ok) {
			const data = await response.json();
			showConfirmationMessage("Novo gasto adicionado com sucesso!");

			const dataGasto = new Date(data.gasto.data);
			const dataAtual = new Date();

			dataGasto.setMonth(dataGasto.getMonth() + 1);
			dataAtual.setMonth(dataAtual.getMonth() + 1);

			if (
				dataGasto.getMonth() === dataAtual.getMonth() &&
				dataGasto.getFullYear() === dataAtual.getFullYear()
			) {
				setSomatorioGastosMensal(
					somatorioGastosMensal + parseInt(data.gasto.valor)
				);
			}

			setgastos([...gastos, data.gasto]);

			setCategorias((prevCategorias) => {
				const categoriaExistente = prevCategorias.find((f) => f.categoria === novoGasto.categoria);

				if (categoriaExistente) {
					// Atualiza o total de gastos para a categoria existente
					categoriaExistente.totalGasto = parseFloat(categoriaExistente.totalGasto) + parseFloat(novoGasto.valor);
					return [...prevCategorias];
				} else {
					// Adiciona uma nova categoria
					return [
						...prevCategorias,
						{
							categoria: novoGasto.categoria,
							totalGasto: parseFloat(novoGasto.valor), // Certifique-se de converter para número
							gastos: [data.gasto], // Inicializa com um array contendo o novo gasto
						},
					];
				}
			});


			getGastosPorCategoria();
		}
	};

	useEffect(() => {
		getGastosPorCategoria();
	}, [token]);


	// useEffect(() => {

	// 	const getgastos = async () => {
	// 		const response = await fetch('http://localhost:3000/gastos/listar')
	// 		const data = await response.json();
	// 		setgastos(data);
	// 	}

	// 	getgastos()

	// }, [])


	// const handleSubmitNovoGasto = async (event) => {
	// 	event.preventDefault()
	// 	const novoGasto = {
	// 		descricao: event.target.descricao.value,
	// 		categoria: event.target.categoria.value,
	// 		data: event.target.data.value,
	// 		valor: event.target.valor.value
	// 	}
	// 	console.log(novoGasto);

	// 	const response = await fetch('http://localhost:3000/gastos', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(novoGasto)
	// 	})

	// 	if (response.ok) {
	// 		const data = await response.json()
	// 		showConfirmationMessage("Novo gasto adicionado com sucesso!");

	// 		const dataGasto = new Date(data.gasto.data);
	// 		const dataAtual = new Date();

	// 		dataGasto.setMonth(dataGasto.getMonth() + 1);
	// 		dataAtual.setMonth(dataAtual.getMonth() + 1);

	// 		if (dataGasto.getMonth() === dataAtual.getMonth() &&
	// 			dataGasto.getFullYear() === dataAtual.getFullYear()) {

	// 			setSomatorioGastosMensal(somatorioGastosMensal + parseInt(data.gasto.valor));
	// 		}
	// 	}
	// }



	// Fontes de receita

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


	// Categorias

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

	const [showModalDetalhesCategoria, setShowModalDetalhesCategoria] = useState(false);
	const [gastosCategoriaAtual, setGastosCategoriaAtual] = useState([]);
	const [categoriaAtual, setCategoriaAtual] = useState("");


	// useEffect(() => {

	// 	const getGastosPorCategoria = async () => {
	// 		const response = await fetch('http://localhost:3000/gastos/categorias')
	// 		const data = await response.json()
	// 		setCategorias(data);
	// 	}

	// 	getGastosPorCategoria()

	// }, [])






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

	categorias?.map((categoria, index) => {

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

	const valorFontes = []
	const fontesLegenda = []

	fontes.map((fonte, index) => {

		fontesLegenda.push(fonte.fonte)
		labelsColors.push(colors[index])
		valorFontes.push(fonte.totalGanho)

	})

	const graficoFontes = {
		labels: fontesLegenda,
		datasets: [{
			label: ' Ganhos (R$)',
			data: valorFontes,
			backgroundColor: labelsColors,
			borderWidth: 2,
			hoverOffset: 4
		}]
	}

	const valorRelatorio = [somatorioGanhos, somatorioGastos]
	const relatorioLegenda = ['Ganhos', 'Gastos']

	const graficoRelatorio = {
		labels: relatorioLegenda,
		datasets: [{
			label: ' Valor em Reais ',
			data: valorRelatorio,
			backgroundColor: labelsColors,
			borderColor: '#fff',
			borderWidth: 2,
			hoverOffset: 4,
			labels: {
				color: labelsColors,
			},
		}]
	}

	const options1 = {
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

				// Ordena contas por dia de vencimento
				const contasOrdenadas = contas.sort((a, b) => a.diaVencimento - b.diaVencimento);

				// Filtra contas válidas
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

						const formatoData = moment(vencimento).format('DD-MM-YYYY');
						acc.push({
							...conta,
							vencimento: formatoData,
						});


					} else if (conta.recorrencia === 'POR_PERIODO' && conta.periodo) {
						// Se a recorrência for "POR_PERIODO" e houver um período associado
						let dataAtual = new Date();
						let formatoDataAtual = `${dataAtual.getFullYear()}-${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}`;
						const dataMoment = moment(formatoDataAtual, 'YYYY-MM');

						const inicioPeriodo = moment(conta.periodo.inicio, 'YYYY-MM');
						const fimPeriodo = moment(conta.periodo.fim, 'YYYY-MM');


						let diaDoMes = dataAtual.getDate();
						if (dataMoment >= inicioPeriodo && dataMoment <= fimPeriodo) {
							// Se a data atual estiver dentro do período, definir vencimento
							vencimento = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), conta.diaVencimento);

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
							// console.log(`A conta ${conta.id} não está dentro do período e não será adicionada.`);
						}

					}

					return acc;
				}, []).filter(Boolean);

				// Ordena contas filtradas
				const contasFiltradasOrdenadas = contasFiltradas.sort((a, b) => {
					const [diaA, mesA, anoA] = a.vencimento.split('-').map(Number);
					const [diaB, mesB, anoB] = b.vencimento.split('-').map(Number);

					// Cria objetos Date a partir dos valores extraídos
					const dataVencimentoA = new Date(anoA, mesA - 1, diaA); // O mês é base 0 no objeto Date
					const dataVencimentoB = new Date(anoB, mesB - 1, diaB);

					return dataVencimentoA - dataVencimentoB;
				});

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
			setContas([...contas, data.conta])
			getContasAgenda();
		}
	}

	const calcularDiasRestantes = (dataVencimento) => {
		const dataAtual = new Date();
		const partesDataVencimento = dataVencimento.split('-');
		const dataVencimentoFormatada = new Date(partesDataVencimento[2], partesDataVencimento[1] - 1, partesDataVencimento[0]);

		// Calcula a diferença em dias
		const umDiaEmMilissegundos = 24 * 60 * 60 * 1000; // Número de milissegundos em um dia
		const diferencaEmMilissegundos = dataVencimentoFormatada - dataAtual;
		const diasRestantes = Math.ceil(diferencaEmMilissegundos / umDiaEmMilissegundos);

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

	const [showModalEditarConta, setShowModalEditarConta] = useState(false);
	const [contaIdParaEditar, setContaIdParaEditar] = useState(null);

	const handleEditarConta = (contaId) => {
		setContaIdParaEditar(contaId);
		setShowModalEditarConta(true);
	}


	const handleSubmitEditarConta = async (event) => {
		event.preventDefault();

		if (!contaIdParaEditar) {
			console.error('ID da conta não definido.');
			return;
		}

		console.log("id da conta", contaIdParaEditar)

		try {

			const descricao = event.target.descricao.value;
			const valor = event.target.valor.value;
			const vencimento = parseInt(event.target.vencimento.value, 10);
			const recorrencia = event.target.recorrencia.value;
			const inicioPeriodo = (event.target.inicioPeriodo?.value) ?? '';
			const fimPeriodo = (event.target.fimPeriodo?.value) ?? '';

			// Constroi o objeto contaEditada apenas com os campos preenchidos
			const contaEditada = {};

			if (descricao) {
				contaEditada.descricao = descricao;
			}

			if (valor) {
				contaEditada.valor = valor;
			}

			if (vencimento) {
				contaEditada.diaVencimento = parseInt(vencimento, 10);
			}

			if (recorrencia) {
				contaEditada.recorrencia = recorrencia;

				// Adicione o período se ambos os campos estiverem preenchidos
				if (recorrencia === 'POR_PERIODO' && inicioPeriodo && fimPeriodo) {
					contaEditada.periodo = {
						inicio: inicioPeriodo,
						fim: fimPeriodo,
					};
				}
			}

			console.log("dados editados", contaEditada)

			const response = await fetch(`http://localhost:3000/contas/editar/${contaIdParaEditar}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(contaEditada),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("conta editada", data)
				// Atualize o estado ou realize alguma ação após a exclusão bem-sucedida
				showConfirmationMessage("Conta editada com sucesso!");
				setTimeout(() => {
					setShowModalEditarConta(false);
				}, 2000);

				setContas((prevContas) => prevContas.map((conta) => conta.id === contaIdParaEditar ?
					{
						...conta,
						// Adicione dados específicos da resposta, se necessário
						dadosAdicionais: data.dadosAdicionais,
					}
					: conta));
				getContasAgenda();
			} else {
				console.error('Erro ao editar conta:', response.statusText);
			}
		} catch (error) {
			console.error('Erro ao editar conta:', error);
		}
	};


	const [showModalExcluirConta, setShowModalExcluirConta] = useState(false);
	const [contaIdParaExcluir, setContaIdParaExcluir] = useState(null);

	const handleExcluirConta = (contaId) => {
		setContaIdParaExcluir(contaId);
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
				showConfirmationMessage("Conta excluída com sucesso!");
				setTimeout(() => {
					setShowModalExcluirConta(false);
				}, 2000);

				setContasAgenda((prevContas) => prevContas.filter((conta) => conta.id !== contaIdParaExcluir));
			} else {
				console.error('Erro ao excluir conta:', response.statusText);
			}
		} catch (error) {
			console.error('Erro ao excluir conta:', error);
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


	return (
		<div id='topo'>
			<Header />

			<div id="principal">
				<Container fluid className="conteudo bg-secondary">

					<div className='perfil w-100 mt-2'>

						<div className="perfil1">
							<IconShop className="mb-5" />

							<h1 className='text-primary mt-4'><i>{name} {sname}</i></h1>

							<Row className='justify-content-center my-3'>
								<div className="cartao-perfil1">
									<div className="item">
										<h4 className=''>Idade<HiOutlineCake className='moeda' /></h4>
										<span className='bg-secondary'>30 anos</span>
									</div>

								</div>

								<div className="cartao-perfil1">
									<div className="item">
										<h4 className=''>Perfil<MdOutlineEmojiPeople className='moeda' /></h4>
										<span className='bg-secondary'>{level}</span>
									</div>

								</div>

								<div className="cartao-perfil1">
									<div className="item">
										<h4 className=''>WiseCoins<BsCoin className='moeda' /></h4>
										<span className='bg-secondary'>{wiseCoins}</span>
									</div>

								</div>

								<div className="cartao-perfil1">
									<div className="item">
										<h4 className=''>Experiência<BsStars className='moeda' /></h4>
										<span className='bg-secondary'>Empresário</span>
									</div>

								</div>

							</Row>

							{/* <WithLabelExample /> */}
						</div>

					</div>

					<br />
					<Container fluid className='controle mt-5 pt-5 pb-5'>
						<h1>Controle Mensal</h1>
						<Row className='px-3'>
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
								<Modal.Header className='bg-primary' closeButton>
									<span className="display-6 text-info">Novo Ganho</span>
								</Modal.Header>
								<Modal.Body className='modal-body'>
									<Form onSubmit={handleSubmitNovoGanho}>
										<Form.Group className="mb-4">
											<Form.Label>Fonte de Receita</Form.Label>
											<Form.Select name='fonte' >
												<option value="">Selecione</option>
												{fontesCadastradas.map((fonte, index) => (
													<option key={index} value={fonte}>
														{fonte}
													</option>
												))}
											</Form.Select>
										</Form.Group>
										<Form.Group className="mb-4">
											<Form.Label>Descrição</Form.Label>
											<Form.Control
												type="text"
												name="descricao"
												placeholder='Opcional'
											/>
										</Form.Group>
										<Form.Group className="mb-4">
											<Form.Label>Data</Form.Label>
											<Form.Control
												type="date"
												name="data"
											/>
										</Form.Group>
										<Form.Group className='mb-4'>
											<Form.Label>Valor a ser adicionado</Form.Label>
											<div className="input-group">
												<span className="input-group-text">R$</span>
												<Form.Control
													type="number"
													step="0.01"  // Permita valores fracionados com duas casas decimais
													min="0"
													name='valor'
												/>
											</div>
										</Form.Group>
										<Modal.Footer>
											<Button as='button' variant="primary" className='modal-button text-info' type='submit'>
												Adicionar
											</Button>
										</Modal.Footer>
									</Form>
								</Modal.Body>
								{showConfirmation && (
									<div className="alert alert-custom" role="alert">
										{confirmationMessage}
									</div>
								)}
							</Modal>



							<div className="cartao-perfil col">
								<div className="item">
									<h4>Valor Gasto</h4>
									<span className='bg-secondary text-success'>{somaGastosMensal}</span>
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
								className='home-modal'
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
												name='descricao' />
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Label>Data</Form.Label>
											<Form.Control
												type="date"
												name='data'
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
							<div className=''><Button className='click' as="button" variant="secondary" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#fff" }} onClick={() => setShowModalNovaFonte(true)}>Nova fonte de receita<GiClick className='icone-click' /></Button>
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
							<div><Button className='click' as="button" variant="secondary" style={{ display: "flex", alignItems: "center", gap: "5px", color: "#fff" }} onClick={() => setShowModalCategorias(true)}>Nova categoria de gasto<GiClick className='icone-click' /></Button>
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


					<Container fluid className='painel my-5 px-5 table-responsive'>
						<h1 className='mt-4 mb-4'>Agenda Financeira</h1>

						<table className="tabela mb-2 text-center text-nowrap">
							<thead className="bg-secondary fs-5 border border-secondary border-3">
								<tr>
									<th className='px-3 py-3'>Descrição</th>
									<th className='px-3 py-3'>Vencimento</th>
									<th className='px-3 py-3'>Status</th>
									<th className='px-3 py-3'>Valor</th>
									<th className='px-3 py-3'>Ação</th>
								</tr>
							</thead>
							{contasAgenda.map((conta) => {
								const { mensagem, corFundo } = calcularDiasRestantes(conta.vencimento);

								return (
									<tbody key={conta.id} className='pagar fs-5'>
										<tr className='border border-secondary border-3'>
											<td className="vertical-align-center p-3">
												{' '}
												{conta.descricao}
											</td>
											<td className='p-3'>
												<CiCalendar className='icone-conta' />{' '}
												{conta.vencimento}
											</td>
											<td className='p-3'>
												<span className={`${corFundo}`}>{mensagem}</span>
											</td>
											<td className='p-3'>
												<CiBag1 className='icone-conta' />{' '}
												{Number(conta.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
											</td>

											<td className='p-3'>
												<Button variant='outline-info' title='Editar' onClick={() => handleEditarConta(conta.id)}><MdEdit /></Button>{' '}
												<Button variant='outline-info' title='Excluir' onClick={() => handleExcluirConta(conta.id)}>
													<FaTrashAlt />
												</Button>
											</td>
										</tr>


									</tbody>
								);
							})}
						</table>

						<div className="botao-painel my-3">
							<Button className='click' variant="secondary" onClick={() => setShowModalContas(true)}>Nova despesa<GiClick className='icone-click' /></Button>
						</div>

						<Modal
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
						</Modal>

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


					</Container>

					{/*style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#D3D3D3' }}*/}
					{/* className={`${categoriasVisivel ? 'visivel' : 'oculto'}`} */}

					<div>
						{categorias.length > 0 && <Container fluid className="categorias p-3 mb-5">
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

										</div>

										<hr />

										<div>
											<Button
												as="button"
												size=""
												variant="outline-primary"
												className="botao"
												onClick={() => {
													setCategoriaAtual(categoria.categoria);
													setGastosCategoriaAtual(categoria.gastos);
													setShowModalDetalhesCategoria(true);
												}}
											>
												Listar
											</Button>

										</div>

									</div>
								))}

							</div>


							<Modal
								show={showModalDetalhesCategoria}
								onHide={() => setShowModalDetalhesCategoria(false)}
								size="lg"
								aria-labelledby="contained-modal-title-vcenter"
								centered
							>
								<Modal.Header closeButton>
									<Modal.Title id="contained-modal-title-vcenter">
										Meus gastos com {categoriaAtual}
									</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<div className="row">
										<div className="col fw-bold">Descrição</div>
										<div className="col fw-bold">Data</div>
										<div className="col fw-bold">Valor</div>
									</div>
									<br />
									{gastosCategoriaAtual.map((gasto, index) => (
										<div className="row" key={index}>
											<div className="col">{gasto.descricao}</div>
											<div className="col">{moment(gasto.data).format('DD/MM/YYYY')}</div>
											<div className="col">
												{parseFloat(gasto.valor).toLocaleString('pt-BR', {
													style: 'currency',
													currency: 'BRL',
												})}
											</div>
										</div>
									))}
								</Modal.Body>
								<Modal.Footer>
									<Button as="button" variant="secondary" onClick={() => setShowModalDetalhesCategoria(false)}>
										Fechar
									</Button>
								</Modal.Footer>
							</Modal>


						</Container>}


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
												size=""
												variant="outline-primary"
												className="botao"
												onClick={() => {
													setFonteAtual(fonte.fonte);
													setGanhosFonteAtual(fonte.ganhos);
													setShowModalDetalhesFontes(true);
												}}
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
										Ganhos: {fonteAtual}
									</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<div className="row">
										<div className="col fw-bold">Descrição</div>
										<div className="col fw-bold">Data</div>
										<div className="col fw-bold">Valor</div>
									</div>
									<br />
									{ganhosFonteAtual.map((ganho, index) => (
										<div className="row" key={index}>
											<div className="col">{ganho.descricao}</div>
											<div className="col">{moment(ganho.data).format('DD/MM/YYYY')}</div>
											<div className="col">
												{parseFloat(ganho.valor).toLocaleString('pt-BR', {
													style: 'currency',
													currency: 'BRL',
												})}
											</div>
										</div>
									))}
								</Modal.Body>
								<Modal.Footer>
									<Button as="button" variant="secondary" onClick={() => setShowModalDetalhesFontes(false)}>
										Fechar
									</Button>
								</Modal.Footer>
							</Modal>


						</Container>

						{categoriasLegenda.length > 0 ? (
							<Container className='grafico text-info'>
								<h1>Perfil de ganhos</h1>
								<Pie className='grafico-torta'
									data={graficoFontes}
									options={options}
								/>
							</Container>
						) : null
						}

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
			</div >
			<Footer anchor='topo' />

		</div >
	);
}

export default Home;