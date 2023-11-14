import { useEffect, useState } from 'react';

// Imports do BS
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Store do usuário
import useUserStore from '../store/UserStore';

import { PiCoinsBold as Coin } from 'react-icons/pi';

function IconShop() {
    // Hooks para o visual //
    const [showShop, setShowShop] = useState(false);
    const [pfp, setPfp] = useState();

    // Dados do store //
    const photo = useUserStore(state => state.photo);
    const changePhoto = useUserStore(state => state.changePhoto);
    const token = useUserStore(state => state.userToken);

    // Isto faz com que a foto atualize após o retorno do banco com a foto atual, e não com a foto padrão
    useEffect(() => {
        setPfp(photo);
    }, [photo]);

    useEffect(() => {
        async function getIcons() {
            const res = await fetch('http://localhost:3000/shop/showList', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer: ${token}`,
                },
            });
            const data = await res.json();

            if (res.ok) {
                console.log(data)
                return 
            } else {
                alert(data.error)
                return
            }
        }
        if (token) {getIcons()}
    }, [token]);

    async function handleShop(photo) {
        const res = await fetch('http://localhost:3000/shop', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer: ${token}`,
            },
            body: JSON.stringify({ photo: photo }),
        });

        if (res.ok) {
            const data = await res.json();

            if (data.success) {
                changePhoto(photo);
                setPfp(photo);

                return 
            } else {
                alert(data.message)
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
            <img src={pfp} alt="Sua foto de perfil" onClick={() => setShowShop(true)} />

            <Modal show={showShop} onHide={() => setShowShop(false)} centered>
                <Modal.Header className='bg-warning' closeButton><span className="display-6">Loja de icones</span></Modal.Header >
                <Modal.Body>
                    <p>Selecione um icone para comprar e usar no seu perfil!</p>
                    <Row>
                        <Col sm="12" md="6">
                            <Card style={cardItem}>
                                <Card.Header className='fw-medium'>Foto de perfil padrão</Card.Header>
                                <Card.Img style={cardImg} className='mb-2' src='img/pfps/pfp-padrao.png' />

                                <Button disabled={pfp === 'img/pfps/pfp-padrao.png'} onClick={() => handleShop('img/pfps/pfp-padrao.png')}>
                                    { pfp === 'img/pfps/pfp-padrao.png' ? 
                                        "Selecionado" : <> <span className="visually-hidden">Preço:</span> 0 <img src="img/wisecoin.webp" width="24rem" /></>
                                    }
                                </Button>
                            </Card>
                        </Col>

                        <Col sm="12" md="6">
                            <Card style={cardItem}>
                                <Card.Header className='fw-medium'>Plantinhas e moedas</Card.Header>
                                <Card.Img style={cardImg} className='mb-2' src='img/pfps/coins-plants.jpg' />

                                <Button disabled={pfp === 'img/pfps/coins-plants.jpg'} onClick={() => handleShop('img/pfps/coins-plants.jpg')}>
                                    { pfp === 'img/pfps/coins-plants.jpg' ? 
                                        "Selecionado" : <> <span className="visually-hidden">Preço:</span> 1000 <img src="img/wisecoin.webp" width="24rem" /></>
                                    }
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default IconShop