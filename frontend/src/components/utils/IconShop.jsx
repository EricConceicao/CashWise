import { useState, useEffect } from 'react';

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
    const [showShop, setShowShop] = useState(false);
    const [data, setData] = useState([]);
    
    const photo = useUserStore(state => state.photo);
    const [pfp, setPfp] = useState(null);

    const changePhoto = useUserStore(state => state.changePhoto);
    const token = useUserStore(state => state.userToken);

    useEffect(() =>{
        setPfp(photo);
    },[photo]);

    // Função para requerir os dados com os ícones disponiveis no banco //
    useEffect(() => {
        async function getIcons() {
            const res = await fetch('http://localhost:3000/shop/getIcons', {
                method: "GET",
                headers: {
                    'Authorization': `Bearer: ${token}`
                }
            });

            if (res.ok) {
                const iconData = await res.json();

                if (iconData.success) {
                    setData(iconData.iconsData);
                    console.log(data);
                    return
                } else {
                    alert(iconData.message)
                    return
                }
            } else {
                alert('Erro de servidor interno');
                return
            }
        }

        // Espera o token receber os dados do loader para então chamar esta função
        if (token) getIcons();
    }, [token]);

    async function handleShop(photo) {
        const res = await fetch('http://localhost:3000/shop', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer: ${token}`,
            },
            credentials: "include",
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
                    <p>Selecione um ícone para comprar e usar no seu perfil!</p>
                    <Row>
                        {
                            data.icons && data.icons.map(icon => (
                            <Col sm="12" md="6" key={icon.id}>
                                <Card style={cardItem}>
                                    <Card.Header className='fw-medium'>Foto de perfil padrão</Card.Header>
                                    <Card.Img style={cardImg} className='mb-2' src={icon.src} />

                                    <Button disabled={pfp === icon.src} onClick={() => handleShop(icon.src)}>
                                    { pfp === icon.src ? (
                                        "Selecionado" 
                                    ) : ( 
                                        data.userIcons.map(userIcons => (
                                            userIcons.iconId === icon.id && userIcons.obtained === true ? (
                                            <span>Selecionar ícone</span>
                                            
                                        ) : (
                                            <>
                                                <span className="visually-hidden">Preço:</span> {icon.price} <img src="img/wisecoin.webp" width="24rem" />
                                            </>
                                        )))
                                    )}
                                    </Button>
                                </Card>
                            </Col>
                            ))
                        }
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default IconShop