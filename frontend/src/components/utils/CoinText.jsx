import { useState } from 'react';
import useUserStore from '../store/UserStore';

import Toast from 'react-bootstrap/Toast';

function CoinText({children}) {
	// Booleano para impedir mais clicks.
	const [click, setClick] = useState(false);

	// Altera a visibilidade do Toast
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow(!show); 

	const token = useUserStore(state => state.userToken);

	async function handleClick() {
		if (click) return

		setShow(true);
		setClick(true);
		console.log('passou')

		const res = await fetch("http://localhost:3000/coins/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer: ${token}`
			},
			credentials: "include",
		});

		if (res) {
			const data = await res.json();

			if (data.success) {
				console.log('Deu bom' , data.message);
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
			<span className={click ? "bg-primary text-decoration-underline rounded-3 px-2" : ""} onClick={handleClick}>{children}</span>

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