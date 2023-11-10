import { useState } from 'react';

// Imports do BS
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Store do usuário
import useUserStore from '../store/UserStore';

import { PiCoinsBold as Coin } from 'react-icons/pi';

function IconShop(props) {
    const [showShop, setShowShop] = useState(false);

    const changePhoto = useUserStore(state => state.changePhoto);
    const token = useUserStore(state => state.userToken);

    async function handleShop(photo) {
        console.log(photo);

        const res = fetch('http://localhost:3000/shop', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer: ${userToken}`,
            },
            credentials: "include",
            body: JSON.stringify(photo),
        });

        if (res.ok) {
            const data = await res.json();

            if (res.success) {
                changePhoto(photo);
                return 
            } else {
                alert(res.message)
                return
            }
        } else {
            alert('Erro de servidor interno');
            return
        }
    }


    // Estilos personalizados
    const cardItem = {
        padding: '.4rem',
        margin: '.4rem auto',
        maxWidth: "16rem",
        textAlign: "center",
    }

    const cardImg = {
        minHeight: "10rem",
        maxHeight: "10rem",
    }

    // Fazer uma animação com after para quando o mouse passar em cima da foto :3
    return (
        <>
            <img src={props.photo} alt="Sua foto de perfil" onClick={() => setShowShop(true)} />

            <Modal show={showShop} onHide={() => setShowShop(false)} centered>
                <Modal.Header className='bg-warning' closeButton><span className="display-6">Loja de icones</span></Modal.Header >
                <Modal.Body>
                    <p>Selecione um icone para comprar e usar no seu perfil!</p>
                    <Row>
                        <Col sm="12" md="6">
                            <Card style={cardItem}>
                                <Card.Header className='fw-medium'>Foto de perfil padrão</Card.Header>
                                <Card.Img style={cardImg} className='mb-2' src='img/pfps/pfp-padrao.png' />
                                <Button onClick={() => handleShop('img/pfps/pfp-padrao.png')}><span className="visually-hidden">Preço:</span> 0 <Coin /></Button>
                            </Card>
                        </Col>

                        <Col sm="12" md="6">
                            <Card style={cardItem}>
                                <Card.Header className='fw-medium'>Plantinhas e moedas</Card.Header>
                                <Card.Img style={cardImg} className='mb-2' src='img/pfps/coins-plants.jpg' />
                                <Button onClick={() => handleShop('img/pfps/coins-plants.jpg')}><span className="visually-hidden">Preço:</span> 1.000 <Coin /></Button>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default IconShop