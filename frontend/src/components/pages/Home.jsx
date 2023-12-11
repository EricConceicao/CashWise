import Header from '../layouts/Header';
import Content from "../layouts/Content"
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Footer from '../layouts/Footer';
import { Container, ModalFooter, ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCoin } from 'react-icons/bs';
import { HiOutlineCake } from 'react-icons/hi';
import { MdOutlineEmojiPeople } from 'react-icons/md';
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
import { IoAdd } from "react-icons/io5";
import { FcPlus } from "react-icons/fc";
import { FaPlusCircle } from "react-icons/fa";


const Home = () => {

	// Dados do store após o login do usuário ///////////////////////////////////////////////////////////////////////////////////////////////

	const token = useUserStore(state => state.userToken)
	const name = useUserStore(state => state.name);
	const sname = useUserStore(state => state.sname);
	const photo = useUserStore(state => state.photo);
	const exp = useUserStore(state => state.exp);
	const level = useUserStore(state => state.level);
	const wiseCoins = useUserStore(state => state.wiseCoins);

	// useStates ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	const [confirmationMessage, setConfirmationMessage] = useState("");
	const [ganhos, setganhos] = useState([]);
	const [gastos, setgastos] = useState([]);
	const [somatorioGanhos, setSomatorioGanhos] = useState(0);
	const [somatorioGastos, setSomatorioGastos] = useState(0);
	const [gastoEditado, setGastoEditado] = useState({});
	const [ganhoEditado, setGanhoEditado] = useState({});
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
	const [contas, setContas] = useState([]);
	const [contasAgenda, setContasAgenda] = useState([]);
	const [recorrenciaConta, setRecorrenciaConta] = useState("Mensal");
	const [contaEditada, setContaEditada] = useState({});
	const [gastosCategoriaAtual, setGastosCategoriaAtual] = useState([]);
	const [categoriaAtual, setCategoriaAtual] = useState("");
	const [ganhoIdParaEditar, setGanhoIdParaEditar] = useState(null);
	const [ganhoIdParaExcluir, setGanhoIdParaExcluir] = useState(null);
	const [gastoIdParaEditar, setGastoIdParaEditar] = useState(null);
	const [gastoIdParaExcluir, setGastoIdParaExcluir] = useState(null);
	const [contaIdParaEditar, setContaIdParaEditar] = useState(null);
	const [contaIdParaExcluir, setContaIdParaExcluir] = useState(null);
	const [relatorioVisivel, setRelatorioVisivel] = useState(false);
	const [erroData, setErroData] = useState('');
	const [dataInput, setDataInput] = useState(null);
	const [isMobile, setIsMobile] = useState(false);

	// Modais ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	const [showConfirmation, setShowConfirmation] = useState(false);
	const [showModalNovoGanho, setShowModalNovoGanho] = useState(false);
	const [showModalNovoGasto, setShowModalNovoGasto] = useState(false);
	const [showModalDetalhesFontes, setShowModalDetalhesFontes] = useState(false);
	const [showModalDetalhesCategoria, setShowModalDetalhesCategoria] = useState(false);
	const [showModalNovaFonte, setShowModalNovaFonte] = useState(false);
	const [showModalCategorias, setShowModalCategorias] = useState(false);
	const [showModalContas, setShowModalContas] = useState(false);
	const [showModalEditarGanho, setShowModalEditarGanho] = useState(false);
	const [showModalExcluirGanho, setShowModalExcluirGanho] = useState(false);
	const [showModalEditarGasto, setShowModalEditarGasto] = useState(false);
	const [showModalExcluirGasto, setShowModalExcluirGasto] = useState(false);
	const [showModalEditarConta, setShowModalEditarConta] = useState(false);
	const [showModalExcluirConta, setShowModalExcluirConta] = useState(false);

	// Mensagem de sucesso //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	const showConfirmationMessage = (message) => {
		setConfirmationMessage(message);
		setShowConfirmation(true);

		setTimeout(() => {
			setShowConfirmation(false);
		}, 3000);
	};

	// Controle mensal /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	const MesAno = moment().format('MM/YYYY');

	const getControleMensal = async () => {

		if (!token) return

		const dataControle = {
			data: moment().format('YYYY-MM'),
		};


		const response = await fetch(`http://localhost:3000/relatorio?data=${dataControle.data}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
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

	useEffect(() => {

		getControleMensal()

	}, [token])

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



	// Ganhos ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	useEffect(() => {

		const getganhos = async () => {
			if (!token) return
			const response = await fetch('http://localhost:3000/ganhos/listar', {
				headers: {
					"Authorization": `Bearer: ${token}`
				}
			});
			const data = await response.json();
			setganhos(data);
		}

		getganhos()

	}, [token])


	const getGanhosPorFonte = async () => {
		if (!token) return
		const response = await fetch('http://localhost:3000/ganhos/fontes', {
			headers: {
				"Authorization": `Bearer: ${token}`
			}
		});
		const data = await response.json();
		setFontes(data);
	};

	const handleSubmitNovoGanho = async (event) => {
		event.preventDefault();
		if (!token) return
		const novoGanho = {
			descricao: event.target.descricao.value,
			fonte: event.target.fonte.value,
			data: event.target.data.value,
			valor: event.target.valor.value,
		};
		console.log(novoGanho);

		const response = await fetch('http://localhost:3000/ganhos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `Bearer: ${token}`
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
					fonteExistente.totalGanho = parseFloat(fonteExistente.totalGanho) + parseFloat(novoGanho.valor);
					return [...prevFontes];
				} else {
					return [
						...prevFontes,
						{
							fonte: novoGanho.fonte,
							totalGanho: parseFloat(novoGanho.valor),
							ganhos: [data.ganho],
						},
					];
				}
			});

			getGanhosPorFonte();
		}
	};

	useEffect(() => {
		getGanhosPorFonte();
	}, [token]);


	const handleEditarGanho = (ganhoId) => {
		const ganhoAtual = ganhos.find((ganho) => ganho.id === ganhoId);
		setGanhoEditado(ganhoAtual);
		setGanhoIdParaEditar(ganhoId);
		setShowModalEditarGanho(true);
	}


	const handleSubmitEditarGanho = async (event) => {
		event.preventDefault();

		if (!token) return

		if (!ganhoIdParaEditar) {
			console.error('ID do ganho não definido.');
			return;
		}

		console.log("id do ganho", ganhoIdParaEditar)

		try {

			const descricao = event.target.descricao.value;
			const fonte = event.target.fonte.value;
			const data = event.target.data.value;
			const valor = event.target.valor.value;

			const ganhoEditado = {};

			if (descricao) {
				ganhoEditado.descricao = descricao;
			}

			if (fonte) {
				ganhoEditado.fonte = fonte;
			}

			if (data) {
				ganhoEditado.data = data;
			}

			if (valor) {
				ganhoEditado.valor = valor;
			}


			console.log("requisição ganho editado", ganhoEditado)

			const response = await fetch(`http://localhost:3000/ganhos/editar/${ganhoIdParaEditar}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `Bearer: ${token}`
				},
				body: JSON.stringify(ganhoEditado),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("resposta ganho editado", data)

				showConfirmationMessage("Ganho editado com sucesso!");
				setTimeout(() => {
					setShowModalEditarGanho(false);
				}, 2000);
				setganhos((prevGanhos) =>
					prevGanhos.map((g) => (g.id === ganhoIdParaEditar ? data.ganho : g))
				);

				setGanhosFonteAtual((prevGanhos) =>
					prevGanhos.map((g) => (g.id === ganhoIdParaEditar ? data.ganho : g))
				);

				getControleMensal();
				getGanhosPorFonte();

			} else {
				console.error('Erro ao editar ganho:', response.statusText);
			}
		} catch (error) {
			console.error('Erro ao editar ganho:', error);
		}
	};


	const handleExcluirGanho = (ganhoId) => {
		setGanhoIdParaExcluir(ganhoId);
		setShowModalExcluirGanho(true);
	};

	const handleSubmitExcluirGanho = async (event) => {
		event.preventDefault();

		if (!token) return

		if (!ganhoIdParaExcluir) {
			console.error('ID do ganho não definido.');
			return;
		}

		try {
			const response = await fetch(`http://localhost:3000/ganhos/deletar/${ganhoIdParaExcluir}`, {
				method: 'DELETE',
				headers: {
					"Authorization": `Bearer: ${token}`
				}
			});

			if (response.ok) {
				showConfirmationMessage("Ganho excluído com sucesso!");
				setTimeout(() => {
					setShowModalExcluirGanho(false);
				}, 2000);

				setganhos((prevGanhos) => prevGanhos.filter((ganho) => ganho.id !== ganhoIdParaExcluir));

				getControleMensal();
				getGanhosPorFonte();
			} else {
				console.error('Erro ao excluir ganho:', response.statusText);
			}
		} catch (error) {
			console.error('Erro ao excluir ganho:', error);
		}
	};

	// Gastos ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
					categoriaExistente.totalGasto = parseFloat(categoriaExistente.totalGasto) + parseFloat(novoGasto.valor);
					return [...prevCategorias];
				} else {
					return [
						...prevCategorias,
						{
							categoria: novoGasto.categoria,
							totalGasto: parseFloat(novoGasto.valor),
							gastos: [data.gasto],
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


	const handleEditarGasto = (gastoId) => {
		const gastoAtual = gastos.find((gasto) => gasto.id === gastoId);
		setGastoEditado(gastoAtual);
		setGastoIdParaEditar(gastoId);
		setShowModalEditarGasto(true);
	}


	const handleSubmitEditarGasto = async (event) => {
		event.preventDefault();

		if (!token) return

		if (!gastoIdParaEditar) {
			console.error('ID do gasto não definido.');
			return;
		}

		console.log("id do gasto", gastoIdParaEditar)

		try {

			const descricao = event.target.descricao.value;
			const categoria = event.target.categoria.value;
			const data = event.target.data.value;
			const valor = event.target.valor.value;

			const gastoEditado = {};

			if (descricao) {
				gastoEditado.descricao = descricao;
			}

			if (categoria) {
				gastoEditado.categoria = categoria;
			}

			if (data) {
				gastoEditado.data = data;
			}

			if (valor) {
				gastoEditado.valor = valor;
			}


			console.log("requisição gasto editado", gastoEditado)

			const response = await fetch(`http://localhost:3000/gastos/editar/${gastoIdParaEditar}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `Bearer: ${token}`
				},
				body: JSON.stringify(gastoEditado),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("resposta gasto editado", data)

				showConfirmationMessage("Gasto editado com sucesso!");
				setTimeout(() => {
					setShowModalEditarGasto(false);
				}, 2000);
				setgastos((prevGastos) =>
					prevGastos.map((g) => (g.id === gastoIdParaEditar ? data.gasto : g))
				);

				setGastosCategoriaAtual((prevGastos) =>
					prevGastos.map((g) => (g.id === gastoIdParaEditar ? data.gasto : g))
				);

				getControleMensal();
				getGastosPorCategoria();

			} else {
				console.error('Erro ao editar gasto:', response.statusText);
			}
		} catch (error) {
			console.error('Erro ao editar gasto:', error);
		}
	};

	const handleExcluirGasto = (gastoId) => {
		setGastoIdParaExcluir(gastoId);
		setShowModalExcluirGasto(true);
	};

	const handleSubmitExcluirGasto = async (event) => {
		event.preventDefault();

		if (!token) return

		if (!gastoIdParaExcluir) {
			console.error('ID do gasto não definido.');
			return;
		}

		try {
			const response = await fetch(`http://localhost:3000/gastos/deletar/${gastoIdParaExcluir}`, {
				method: 'DELETE',
				headers: {
					"Authorization": `Bearer: ${token}`
				}
			});

			if (response.ok) {
				showConfirmationMessage("Gasto excluído com sucesso!");
				setTimeout(() => {
					setShowModalExcluirGasto(false);
				}, 2000);
				

				setgastos((prevGastos) => prevGastos.filter((gasto) => gasto.id !== gastoIdParaExcluir));

				getControleMensal();
				getGastosPorCategoria();
			} else {
				console.error('Erro ao excluir gasto:', response.statusText);
			}
		} catch (error) {
			console.error('Erro ao excluir gasto:', error);
		}
	};



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
		setCategoriasCadastradas([...categoriasCadastradas, novaCategoria]);
	};

	const handleAdicionarNovaCategoria = () => {
		if (novaCategoria) {
			adicionarCategoria(novaCategoria);
			showConfirmationMessage("Nova categoria criada com sucesso!");
			setNovaCategoria('');
		}
	};



	// Contas ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Listar as contas
	useEffect(() => {

		const getcontas = async () => {
			if (!token) return
			const response = await fetch('http://localhost:3000/contas/listar', {
				headers: {
					"Authorization": `Bearer: ${token}`
				}
			})
			const data = await response.json()
			setContas(data)
		}

		getcontas()

	}, [token])

	// Organizar as contas numa agenda

	const getContasAgenda = async () => {
		if (!token) return
		try {
			const response = await fetch('http://localhost:3000/contas/agenda', {
				headers: {
					"Authorization": `Bearer: ${token}`
				}
			});
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

	useEffect(() => {

		getContasAgenda();

	}, [contas, token]);

	// Adicionar nova conta
	const handleSubmitNovaConta = async (event) => {
		event.preventDefault()

		if (!token) return

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
				'Content-Type': 'application/json',
				"Authorization": `Bearer: ${token}`
			},
			body: JSON.stringify(novaConta)
		})

		if (response.ok) {
			const data = await response.json()
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

	const handleEditarConta = (contaId) => {
		const contaAtual = contas.find((conta) => conta.id === contaId);
		setContaEditada(contaAtual);
		setContaIdParaEditar(contaId);
		setShowModalEditarConta(true);
	}


	const handleSubmitEditarConta = async (event) => {
		event.preventDefault();

		if (!token) return

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
					"Authorization": `Bearer: ${token}`
				},
				body: JSON.stringify(contaEditada),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("conta editada", data)

				showConfirmationMessage("Conta editada com sucesso!");
				setTimeout(() => {
					setShowModalEditarConta(false);
				}, 2000);

				setContas((prevContas) => prevContas.map((conta) => conta.id === contaIdParaEditar ?
					{
						...conta,
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

	const handleExcluirConta = (contaId) => {
		setContaIdParaExcluir(contaId);
		setShowModalExcluirConta(true);
	};

	const handleSubmitExcluirConta = async (event) => {
		event.preventDefault();

		if (!token) return

		if (!contaIdParaExcluir) {
			console.error('ID da conta não definido.');
			return;
		}

		try {
			const response = await fetch(`http://localhost:3000/contas/deletar/${contaIdParaExcluir}`, {
				method: 'DELETE',
				headers: {
					"Authorization": `Bearer: ${token}`
				}
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

	// Gráficos /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

	//Relatório /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	const inputRef = useRef();

	const abrirdivRelatorio = () => {
		if (dataInput) {
			setRelatorioVisivel(true);
		} else {
			setErroData('Por favor, selecione uma data.');
		}
	}

	const handleSubmitRelatorio = async (event) => {
		event.preventDefault()

		if (!token) return

		setRelatorioVisivel(false);

		if (!dataInput) {
			console.log('Erro: Por favor, selecione uma data.');
			setErroData('Por favor, selecione uma data.');
			return;
		}

		const dataAtual = new Date();

		if (dataInput > dataAtual) {
			console.log('Erro: Você não pode consultar datas futuras.');
			setErroData('Você não pode consultar datas futuras.');
			return;
		}

		setErroData('');

		const dataRelatorio = {
			data: moment(dataInput).format('YYYY-MM'),
		};

		const response = await fetch(`http://localhost:3000/relatorio?data=${dataRelatorio.data}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}

		})

		if (response.ok) {
			const data = await response.json()
			setSomatorioGanhos(data.somatorioGanhos);
			setSomatorioGastos(data.somatorioGastos);
			abrirdivRelatorio();
		}
		else {
			console.error('Erro ao obter relatório:', response.statusText);
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

	// Responsividade ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600);
		};

		// Adiciona o ouvinte de redimensionamento quando o componente é montado
		window.addEventListener('resize', handleResize);

		// Remove o ouvinte de redimensionamento quando o componente é desmontado
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);


	return (
		<div id='topo'>
			<Header />

			<div id="principal">
				<Container fluid className="conteudo bg-secondary">

					<Container fluid className='perfil w-100 mt-2'>

						<div className="perfil-usuario">
							<IconShop className="mb-5" />

							<h1 className='text-primary mt-2'><i>{name} {sname}</i></h1>

							<Row className='justify-content-center'>
								<div className="cartao-perfil">
									<div className="item">
										<h4 className=''>WiseCoins<BsCoin className='moeda' /></h4>
										<span className='bg-secondary'>{wiseCoins}</span>
									</div>
								</div>

							</Row>

						</div>

					</Container>

					<br />
					<Container fluid className='controle mt-5 pt-5 pb-5'>
						<div>
							<div className="controle-titulo">
								<h1>Controle Mensal</h1>
								<p className='text-primary text-center'><i>Acompanhe e registre aqui seus ganhos e gastos mensais. Além disso, você pode adicionar novas fontes de receita e categorias de gastos.</i></p>
							</div>
							<hr />
							<Row className='px-3'>
								<div className="cartao-controle col">
									<div className='item'>
										<h4>Mês/Ano</h4>
										<span className='bg-secondary text-primary'>{MesAno}</span>
									</div>
								</div>

								<div className="cartao-controle col">
									<div className="item">
										<h4>Ganhos</h4>
										<span className='bg-secondary text-primary'>{somaGanhosMensal}</span>
									</div>

									<div className="botoes">
										<div>
											<Button as="button" variant="" title='Novo ganho' className='botao border-0 text-info' onClick={() => setShowModalNovoGanho(true)}><FcPlus className='controle-icone' />Ganho</Button>

											<Modal
												show={showModalNovoGanho}
												onHide={() => setShowModalNovoGanho(false)}
												size="md"
												aria-labelledby="contained-modal-title-vcenter"
												centered
											>
												<Modal.Header className='bg-primary' closeButton>
													<span className="display-6">Novo Ganho</span>
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
															<Form.Label>Valor</Form.Label>
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
															<Button as='button' variant="primary" className='modal-button' type='submit'>
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
										</div>

										<div>
											<Button as="button" variant="" className='botao text-info' onClick={() => setShowModalNovaFonte(true)}><FcPlus className='botao-icone' />Fonte</Button>
											<Modal
												show={showModalNovaFonte}
												onHide={() => setShowModalNovaFonte(false)}
												size="md"
												aria-labelledby="contained-modal-title-vcenter"
												centered
											>
												<Modal.Header className='bg-primary' closeButton>
													<span className="display-6">Nova fonte de receita</span>
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
													<Button as='button' variant="primary" onClick={handleAdicionarNovaFonte}>
														Adicionar
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

								</div>


								<div className="cartao-controle col">
									<div className="item">
										<h4>Gastos</h4>
										<span className='bg-secondary text-primary'>{somaGastosMensal}</span>
									</div>
									<div className="botoes">
										<div>
											<Button as="button" variant="" className='botao border-0 text-info' onClick={() => setShowModalNovoGasto(true)}><FcPlus className='controle-icone' />Gasto</Button>

											<Modal
												show={showModalNovoGasto}
												onHide={() => setShowModalNovoGasto(false)}
												size="md"
												aria-labelledby="contained-modal-title-vcenter"
												centered
											>
												<Modal.Header className='bg-primary' closeButton>
													<span className="display-6 text-secondary">Novo Gasto</span>
												</Modal.Header>
												<Modal.Body>
													<Form onSubmit={handleSubmitNovoGasto}>
														<Form.Group className="mb-4">
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
														<Form.Group className="mb-4">
															<Form.Label>Descrição</Form.Label>
															<Form.Control
																type="text"
																name='descricao' />
														</Form.Group>
														<Form.Group className="mb-4">
															<Form.Label>Data</Form.Label>
															<Form.Control
																type="date"
																name='data'
															/>
														</Form.Group>
														<Form.Group className='mb-4'>
															<Form.Label>Valor</Form.Label>
															<div className="input-group">
																<span className="input-group-text">R$</span>
																<Form.Control
																	type="number"
																	step="0.01"  // Permita valores fracionados com duas casas decimais
																	name='valor'
																	min="0"
																/>
															</div>
														</Form.Group>
														<Modal.Footer>
															<Button as='button' variant="primary" className='modal-button' type='submit'>
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
										</div>

										<div>
											<Button className='botao text-info' as="button" variant="" onClick={() => setShowModalCategorias(true)}><FcPlus className='botao-icone' />Categoria</Button>
											<Modal
												show={showModalCategorias}
												onHide={() => setShowModalCategorias(false)}
												size="md"
												aria-labelledby="contained-modal-title-vcenter"
												centered
											>
												<Modal.Header className='bg-primary' closeButton>
													<span className="display-6 text-secondary">Nova categoria de gastos</span>
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
													<Button as='button' variant="primary" onClick={handleAdicionarNovaCategoria}>
														Adicionar
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

								</div>


								<div className="cartao-controle col">
									<div className='item'>
										<h4>Saldo</h4>
										<span className='bg-secondary text-primary'>{saldoTotalMensal}</span>
									</div>
								</div>

							</Row>
						</div>
					</Container>
					<br />


					<Container fluid className='agenda mt-5 pt-5 pb-5'>
						<div className='agenda-tabela'>
							<div className="controle-titulo">
								<h1>Agenda Financeira</h1>
								<p className='text-primary text-center'><i>Cadastre suas despesas mensais ou temporárias (por periodo) aqui. A coluna "Status" fornece mensagens personalizadas para lembrar você sobre vencimentos próximos.</i></p>
							</div>
							<hr />

							{contasAgenda.length > 0 ? (
								<div className='table-responsive'>
									<table className="tabela mb-2 text-center text-nowrap">
										{isMobile ? null : (
											<thead>
												<tr>
													<th className='px-3 py-3'>
														<p className='tabela-titulo'>Descrição</p>
													</th>
													<th className='px-3 py-3'>
														<p className='tabela-titulo'>Vencimento</p>
													</th>
													<th className='px-3 py-3'>
														<p className='tabela-titulo'>Status</p>
													</th>
													<th className='px-3 py-3'>
														<p className='tabela-titulo'>Valor</p>
													</th>
													<th className='px-3 py-3'>
														<p className='tabela-titulo'>Ação</p>
													</th>
												</tr>
											</thead>
										)}
										{contasAgenda.map((conta) => {
											const { mensagem, corFundo } = calcularDiasRestantes(conta.vencimento);

											return (
												<tbody key={conta.id}>
													<tr className={`agenda-conta ${isMobile ? 'flex-column' : ''}`}>
														<td className={isMobile ? 'py-3' : 'py-3'}>
															<div className="agenda-dado">
																{!isMobile ? (
																	<>
																		<FaPiggyBank className='icone-conta text-warning' />
																		{' '}
																		<p>{conta.descricao}</p>
																	</>
																) : (
																	<>
																		<FaPiggyBank className='icone-conta text-warning' />
																		{' '}
																		<p>Descrição: {conta.descricao}</p>
																	</>
																)}
															</div>
														</td>
														<td className={isMobile ? 'py-3' : 'py-3'}>
															<div className="agenda-dado">
																{!isMobile ? (
																	<>
																		<CiCalendar className='icone-conta' />
																		{' '}
																		<p>{conta.vencimento}</p>
																	</>
																) : (
																	<>
																		<CiCalendar className='icone-conta' />
																		{' '}
																		<p>Vencimento: {conta.vencimento}</p>
																	</>
																)}
															</div>
														</td>
														<td className={isMobile ? 'py-3' : 'py-3'}>
															<div className="agenda-dado">
																{!isMobile ? (
																	<>
																		<span className={`${corFundo}`}>{mensagem}</span>
																	</>
																) : (
																	<>
																		<p>Status: <span className={`${corFundo}`}>{mensagem}</span></p>
																	</>
																)}
															</div>
														</td>
														<td className={isMobile ? 'py-3' : 'py-3'}>
															<div className="agenda-dado">
																{!isMobile ? (
																	<>																			<CiBag1 className='icone-conta' />{' '}
																		<p>{Number(conta.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
																	</>
																) : (
																	<>
																		<CiBag1 className='icone-conta' />{' '}
																		<p>Valor: {Number(conta.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
																	</>
																)}
															</div>
														</td>

														<td className={isMobile ? 'py-3' : 'py-3'}>
															<div className="agenda-dado">
																{!isMobile ? (
																	<>
																		<Button variant='outline-info' title='Editar' onClick={() => handleEditarConta(conta.id)}><MdEdit /></Button>{' '}
																		<Button variant='outline-info' title='Excluir' onClick={() => handleExcluirConta(conta.id)}>
																			<FaTrashAlt />
																		</Button>
																	</>
																) : (
																	<>
																		<p>Ação:</p><Button variant='outline-info' title='Editar' onClick={() => handleEditarConta(conta.id)}><MdEdit /></Button>{' '}
																		<Button variant='outline-info' title='Excluir' onClick={() => handleExcluirConta(conta.id)}>
																			<FaTrashAlt />
																		</Button>
																	</>
																)}
															</div>
														</td>
													</tr>


												</tbody>
											);
										})}
									</table>
								</div>
							) : (
								<p className='agenda-oculta'><i>Nenhuma despesa informada.</i></p>
							)}

						</div>


						<div className="my-3">
							<Button className='botao text-info' variant="" onClick={() => setShowModalContas(true)}><FcPlus className='botao-icone' />Despesa</Button>
						</div>

						<Modal
							show={showModalEditarConta}
							onHide={() => setShowModalEditarConta(false)}
							size="md"
							aria-labelledby="contained-modal-title-vcenter"
							centered
						>
							<Modal.Header className='bg-primary' closeButton>
								<span className="display-6 text-secondary">Editar despesa</span>
							</Modal.Header>
							<Modal.Body>
								<Form onSubmit={handleSubmitEditarConta}>

									<Form.Group className="mb-3">
										<Form.Label>Descrição</Form.Label>
										<Form.Control
											type="text"
											name='descricao'
											value={contaEditada.descricao || ''}
											onChange={(e) => setContaEditada({ ...contaEditada, descricao: e.target.value })}
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
												min="0"
												value={contaEditada.valor || ''}
												onChange={(e) => setContaEditada({ ...contaEditada, valor: e.target.value })}
											/>
										</div>
									</Form.Group>

									<Form.Group className="mb-3">
										<Form.Label>Dia de vencimento</Form.Label>
										<Form.Control
											type="number"
											name='vencimento'
											value={contaEditada.diaVencimento || ''}
											min="0"
											onChange={(e) => setContaEditada({ ...contaEditada, diaVencimento: e.target.value })}
										/>
									</Form.Group>

									<Form.Group className="mb-3">
										<Form.Label>Recorrência</Form.Label>
										<Form.Select
											name='recorrencia'
											value={contaEditada.recorrencia || ''}
											onChange={(e) => setContaEditada({ ...contaEditada, recorrencia: e.target.value })}
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
													value={contaEditada.periodo?.inicio || ''}
													onChange={(e) => setContaEditada({ ...contaEditada, periodo: { ...contaEditada.periodo, inicio: e.target.value } })}
												/>
											</Form.Group>

											<Form.Group className="mb-3">
												<Form.Label>Fim do Período</Form.Label>
												<Form.Control
													type="month"
													name='fimPeriodo'
													value={contaEditada.periodo?.fim || ''}
													onChange={(e) => setContaEditada({ ...contaEditada, periodo: { ...contaEditada.periodo, fim: e.target.value } })}
												/>
											</Form.Group>
										</>
									)}
									<Modal.Footer>
										<Button as='button' type='submit' variant="primary">
											Salvar
										</Button>
									</Modal.Footer>
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
							<Modal.Header className='bg-danger' closeButton>
								<span className="display-6 text-info">Excluir despesa</span>
							</Modal.Header>
							<Modal.Body>
								<Form onSubmit={handleSubmitExcluirConta}>
									<h5 className='py-4'>Tem certeza que quer excluir essa despesa?</h5>
									<Modal.Footer>
										<Button as='button' type='submit' variant="danger">
											Excluir
										</Button>
									</Modal.Footer>
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
							<Modal.Header className='bg-primary' closeButton>
								<span className="display-6 text-secondary">Nova despesa</span>
							</Modal.Header>
							<Modal.Body>
								<Form onSubmit={handleSubmitNovaConta}>

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
												min="0"
											/>
										</div>
									</Form.Group>

									<Form.Group className="mb-3">
										<Form.Label>Dia de vencimento</Form.Label>
										<Form.Control
											type="number"
											name='vencimento'
											min='0'
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
									<Modal.Footer>
										<Button as='button' type='submit' variant="primary">
											Adicionar
										</Button>
									</Modal.Footer>
								</Form>
							</Modal.Body>
							{showConfirmation && (
								<div className="alert alert-success alert-custom" role="alert">
									{confirmationMessage}
								</div>
							)}
						</Modal>

					</Container>


					<Container fluid className='categorias mt-5 pt-5 pb-5'>
						<div className="categorias-titulo">
							<h1 className='text-center'>Ganhos por Fonte de Receita</h1>
							<p className='text-primary subtitulo text-center'><i>Acompanhe seus ganhos mensais por fonte de receita com um gráfico visual. Clique em "Listar" para ver e gerenciar seus ganhos.</i></p>
							<hr />
						</div>

						{fontes.length > 0 && <div className='cartoes-categoria'>
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
											size="sm"
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

							<Modal
								show={showModalDetalhesFontes}
								onHide={() => setShowModalDetalhesFontes(false)}
								size="lg"
								aria-labelledby="contained-modal-title-vcenter"
								centered
							>
								<Modal.Header className='bg-info' closeButton>
									<span className="display-6 text-secondary">Ganhos: {fonteAtual}</span>
								</Modal.Header>
								<Modal.Body>
									<div className="row bg-info text-secondary ganho-linha">
										<div className="col">Descrição</div>
										<div className="col">Data</div>
										<div className="col">Valor</div>
										<div className="col">Ação</div>
									</div>
									{ganhosFonteAtual.map((ganho, index) => (
										<div className="row bg-info text-secondary ganho-linha" key={index}>
											<div className="col">{ganho.descricao}</div>
											<div className="col">{moment(ganho.data).format('DD/MM/YYYY')}</div>
											<div className="col">
												{parseFloat(ganho.valor).toLocaleString('pt-BR', {
													style: 'currency',
													currency: 'BRL',
												})}
											</div>
											<div className="col">
												<Button as='button' size='sm' variant='outline-secondary' onClick={() => handleEditarGanho(ganho.id)}><MdEdit /></Button>{' '}
												<Button as='button' size='sm' variant='outline-secondary' onClick={() => handleExcluirGanho(ganho.id)}><FaTrashAlt /></Button>

												<Modal
													show={showModalEditarGanho}
													onHide={() => {
														setShowModalEditarGanho(false);
														setGanhoIdParaEditar(null);
													}}
													size="md"
													aria-labelledby="contained-modal-title-vcenter"
													centered
												>
													<Modal.Header className='bg-primary' closeButton>
														<span className="display-6 text-secondary">Editar Ganho</span>
													</Modal.Header>
													<Modal.Body>
														<Form onSubmit={handleSubmitEditarGanho}>
															<Form.Group className="mb-4">
																<Form.Label>Fonte de Receita</Form.Label>
																<Form.Select
																	name='fonte'
																	value={ganhoEditado.fonte || ''}
																	onChange={(e) => setGanhoEditado({ ...ganhoEditado, fonte: e.target.value })}
																>
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
																	name='descricao'
																	value={ganhoEditado.descricao || ''}
																	onChange={(e) => setGanhoEditado({ ...ganhoEditado, descricao: e.target.value })}
																/>
															</Form.Group>
															<Form.Group className="mb-4">
																<Form.Label>Data</Form.Label>
																<Form.Control
																	type="date"
																	name='data'
																	value={ganhoEditado.data || ''}
																	onChange={(e) => setGanhoEditado({ ...ganhoEditado, data: e.target.value })}
																/>
															</Form.Group>
															<Form.Group className='mb-4'>
																<Form.Label>Valor</Form.Label>
																<div className="input-group">
																	<span className="input-group-text">R$</span>
																	<Form.Control
																		type="number"
																		step="0.01"  // Permita valores fracionados com duas casas decimais
																		name='valor'
																		min="0"
																		value={ganhoEditado.valor || ''}
																		onChange={(e) => setGanhoEditado({ ...ganhoEditado, valor: e.target.value })}
																	/>
																</div>
															</Form.Group>
															<Modal.Footer>
																<Button as='button' variant="primary" className='modal-button' type='submit'>
																	Salvar
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

												<Modal
													show={showModalExcluirGanho}
													onHide={() => setShowModalExcluirGanho(false)}
													size="md"
													aria-labelledby="contained-modal-title-vcenter"
													centered
												>
													<Modal.Header className='bg-danger' closeButton>
														<span className="display-6 text-info">Excluir ganho</span>
													</Modal.Header>
													<Modal.Body>
														<Form onSubmit={handleSubmitExcluirGanho}>
															<h5 className='py-4'>Tem certeza que quer excluir esse ganho?</h5>
															<Modal.Footer>
																<Button as='button' type='submit' variant="danger">
																	Excluir
																</Button>
															</Modal.Footer>
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
									))}
								</Modal.Body>
								<Modal.Footer>
									<Button as="button" variant="primary" onClick={() => setShowModalDetalhesFontes(false)}>
										Fechar
									</Button>
								</Modal.Footer>
							</Modal>

						</div>}

						{fontesLegenda.length > 0 ? (
							<Container className='grafico'>
								<Pie
									data={graficoFontes}
									options={options}
								/>
							</Container>
						) : (
							<p><i>Nenhum ganho informado.</i></p>
						)
						}
					</Container>


					<Container fluid className='categorias mt-5 pt-5 pb-5'>
						<div className="categorias-titulo">
							<h1>Gastos por Categoria</h1>
							<p className='text-primary subtitulo text-center'><i>Acompanhe seus gastos mensais por categoria com um gráfico visual. Clique em "Listar" para ver e gerenciar seus gastos.</i></p>
							<hr />
						</div>
						{categorias.length > 0 && <div className='w-100 px-5 cartoes-categoria'>
							{categorias.map((categoria, index) => (
								<Row className="cartao-categoria justify-content-center" key={index}>
									<h4 className="text-capitalize h5 m-0 p-0">{categoria.categoria}</h4>
									
									<Col sm={8} className="categoria p-1">
										<p className='valor-categoria bg-secondary'>
											{parseFloat(categoria.totalGasto).toLocaleString('pt-BR', {
												style: 'currency',
												currency: 'BRL',
											})}
										</p>
									</Col>
									
									<Col sm={4} className="p-1 border-bottom">
										<Button
											as="button"
											size="sm"
											variant="outline-primary"
											className="botao mb-1"
											onClick={() => {
												setCategoriaAtual(categoria.categoria);
												setGastosCategoriaAtual(categoria.gastos);
												setShowModalDetalhesCategoria(true);
											}}
										>
											Listar
										</Button>
									</Col>
								</Row>
							))}

							<Modal
								show={showModalDetalhesCategoria}
								onHide={() => setShowModalDetalhesCategoria(false)}
								size="lg"
								aria-labelledby="contained-modal-title-vcenter"
								centered
							>
								<Modal.Header className='bg-info' closeButton>
									<span className="display-6 text-secondary">Gastos: {categoriaAtual}</span>
								</Modal.Header>
								<Modal.Body>
									<div className="row bg-info text-secondary ganho-linha">
										<div className="col">Descrição</div>
										<div className="col">Data</div>
										<div className="col">Valor</div>
										<div className="col">Ação</div>
									</div>
									{gastosCategoriaAtual.map((gasto, index) => (
										<div className="row bg-info text-secondary ganho-linha" key={index}>
											<div className="col">{gasto.descricao}</div>
											<div className="col">{moment(gasto.data).format('DD/MM/YYYY')}</div>
											<div className="col">
												{parseFloat(gasto.valor).toLocaleString('pt-BR', {
													style: 'currency',
													currency: 'BRL',
												})}
											</div>
											<div className="col">
												<Button as='button' size='sm' variant='outline-secondary' onClick={() => handleEditarGasto(gasto.id)}><MdEdit /></Button>{' '}
												<Button as='button' size='sm' variant='outline-secondary' onClick={() => handleExcluirGasto(gasto.id)}><FaTrashAlt /></Button>

												<Modal
													show={showModalEditarGasto}
													onHide={() => {
														setShowModalEditarGasto(false);
														setGastoIdParaEditar(null);
													}}
													size="md"
													aria-labelledby="contained-modal-title-vcenter"
													centered
												>
													<Modal.Header className='bg-primary' closeButton>
														<span className="display-6 text-secondary">Editar Gasto</span>
													</Modal.Header>
													<Modal.Body>
														<Form onSubmit={handleSubmitEditarGasto}>
															<Form.Group className="mb-4">
																<Form.Label>Categoria</Form.Label>
																<Form.Select
																	name='categoria'
																	value={gastoEditado.categoria || ''}
																	onChange={(e) => setGastoEditado({ ...gastoEditado, categoria: e.target.value })}
																>
																	<option value="">Selecione</option>
																	{categoriasCadastradas.map((categoria, index) => (
																		<option key={index} value={categoria}>
																			{categoria}
																		</option>
																	))}
																</Form.Select>
															</Form.Group>
															<Form.Group className="mb-4">
																<Form.Label>Descrição</Form.Label>
																<Form.Control
																	type="text"
																	name='descricao'
																	value={gastoEditado.descricao || ''}
																	onChange={(e) => setGastoEditado({ ...gastoEditado, descricao: e.target.value })}
																/>
															</Form.Group>
															<Form.Group className="mb-4">
																<Form.Label>Data</Form.Label>
																<Form.Control
																	type="date"
																	name='data'
																	value={gastoEditado.data || ''}
																	onChange={(e) => setGastoEditado({ ...gastoEditado, data: e.target.value })}
																/>
															</Form.Group>
															<Form.Group className='mb-4'>
																<Form.Label>Valor</Form.Label>
																<div className="input-group">
																	<span className="input-group-text">R$</span>
																	<Form.Control
																		type="number"
																		step="0.01"  // Permita valores fracionados com duas casas decimais
																		name='valor'
																		min="0"
																		value={gastoEditado.valor || ''}
																		onChange={(e) => setGastoEditado({ ...gastoEditado, valor: e.target.value })}
																	/>
																</div>
															</Form.Group>
															<Modal.Footer>
																<Button as='button' variant="primary" className='modal-button' type='submit'>
																	Salvar
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

												<Modal
													show={showModalExcluirGasto}
													onHide={() => setShowModalExcluirGasto(false)}
													size="md"
													aria-labelledby="contained-modal-title-vcenter"
													centered
												>
													<Modal.Header className='bg-danger' closeButton>
														<span className="display-6 text-info">Excluir gasto</span>
													</Modal.Header>
													<Modal.Body>
														<Form onSubmit={handleSubmitExcluirGasto}>
															<h5 className='py-4'>Tem certeza que quer excluir esse gasto?</h5>
															<Modal.Footer>
																<Button as='button' type='submit' variant="danger">
																	Excluir
																</Button>
															</Modal.Footer>
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
									))}
								</Modal.Body>
								<Modal.Footer>
									<Button as="button" variant="primary" onClick={() => setShowModalDetalhesCategoria(false)}>
										Fechar
									</Button>
								</Modal.Footer>
							</Modal>

						</div>}


						{categoriasLegenda.length > 0 ? (
							<div className='grafico text-info'>
								<Pie
									data={dataMyChart}
									options={options}
								/>
							</div>
						) : (
							<p><i>Nenhum gasto informado.</i></p>
						)
						}
					</Container>

					{/* Início de Relatório*/}
					<Container fluid className='relatorio mt-5 mb-5 pt-5 pb-5'>
						<div >
							<h1>Relatório</h1>
							<hr />
							<p className='text-primary text-center'><i>Selecione o mês e o ano e clique em "consultar" para obter um resumo dos valores totais dos seus gastos e ganhos.</i></p>
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