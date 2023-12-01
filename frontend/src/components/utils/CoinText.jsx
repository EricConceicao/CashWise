import { useState, useEffect } from 'react';
import useUserStore from '../store/UserStore';

import Toast from 'react-bootstrap/Toast';

import useCoinTextStore from '../store/CoinTextStore';

function CoinText({ textId, children }) {
	// Altera a visibilidade do Toast
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow(!show); 

	// Stores //
	const coinTexts = useCoinTextStore(state => state.coinTexts);
	const setCoinText = useCoinTextStore(state => state.setCoinText);
	const refreshCoins = useUserStore(state => state.refreshCoins);
	const wiseCoins = useUserStore(state => state.wiseCoins);
	const token = useUserStore(state => state.userToken);

	// Booleano para impedir mais clicks.
	const [click, setClick] = useState(false);

	useEffect(() => {
		// Se não houver nada no store. Ele para.
		console.log("passando: ", coinTexts);
		if (!coinTexts) return

		const result = coinTexts.find(item => item.id === textId);
		console.log("passando a mais: ", result);
		
		result && setClick(result.found);

	}, [coinTexts]);

	async function handleClick(textId) {
		if (click) return
		setShow(true);

		const res = await fetch("http://localhost:3000/coin/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer: ${token}`
			},
			body: JSON.stringify({textId: textId})
		});

		if (res) {
			const data = await res.json();

			if (data.success) {
				setClick(true);
				refreshCoins(data.newBalance);
				setCoinText([...coinTexts, { id: textId, found: true }]);
				return
			} else {
				console.log('Falhou', data);
				return
			}
		}
		return
	}

	// Estilos de posicionamento do Toast
	const toastStyle = {
		position: "fixed",
		bottom: "0",
		right: ".1rem",
		zIndex: "2",
		width: "15rem"
	}

	return (
		<>
			<span className={click ? "bg-primary text-decoration-underline rounded-3 px-2" : ""} onClick={() => handleClick(textId)}>{children}</span>

			<Toast style={toastStyle} className="border-2 border-secondary" show={show} onClose={toggleShow}>
				<Toast.Header className="fw-medium bg-success justify-content-between">Palavra Chave Encontrada!</Toast.Header>
				<Toast.Body className="fs-2 py-1 text-center">
					10+ <img width="32rem" src="img/wisecoin.webp" alt="Wisecoins"/>
				</Toast.Body>
			</Toast>
		</>
	);
}

export default CoinText