import { useState, useEffect, useRef } from 'react';

// Imports do BS
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Store do usuário
import useUserStore from '../store/UserStore';


function IconShop() {

    // Hooks //
    const [showShop, setShowShop] = useState(false);
    const [data, setData] = useState([]);
    const [pfp, setPfp] = useState(null);
    const [coins, setCoins] = useState(null);
    const [feedback, setFeedback] = useState('');
    // Variáveis do Store //
    const wiseCoins = useUserStore(state => state.wiseCoins);
    const photo = useUserStore(state => state.photo);
    const token = useUserStore(state => state.userToken);
    const changePhoto = useUserStore(state => state.changePhoto);
    const refreshCoins = useUserStore(state => state.refreshCoins);

    useEffect(() =>{setPfp(photo)}, [photo]);
    useEffect(() =>{setCoins(wiseCoins)}, [wiseCoins]);

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
                    return
                } else {
                    setFeedback(iconData.message);
                    return
                }
            } else {
                const { message } = await res.json()
                setFeedback(message);
                return
            }
        }

        // Espera o token receber os dados do loader para então chamar esta função
        if (token) getIcons();
    }, [token, pfp]);

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
                // Atualiza o store
                if (typeof data.newBalance !== undefined) {refreshCoins(data.newBalance)}
                changePhoto(photo);
                // Atualiza os valores na página
                setPfp(photo);
                setCoins(newBalance);
            
                return 
            } else {
                alert(data.message);

                return
            }
        } else {
            const { message } = await res.json()
            setFeedback(message);
            return
        }
    }

    function checkObtainedIcons(icon) {
        const result = data?.userIcons.find(user => user.iconId === icon.id)

        if (result?.obtained) {
            
            return <span>Selecionar ícone</span>    
        } else {
            
            return <> <span className="visually-hidden">Preço:</span> {icon.price} <img src="img/wisecoin.webp" width="20rem" /> </>
        }       
    }

    function checkObtainedIcon(icon) {
         const result = data?.userIcons.find(user => user.iconId === icon.id);
         return !result?.obtained
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
                    <h1 className="h5">Selecione um ícone para comprar e usar no seu perfil!</h1>
                    <p className="text-center bg-secondary text-white p-1 rounded-pill">Seu saldo: {coins} <img src="img/wisecoin.webp" width="24rem" /></p>
                    <Row>
                        {
                            data.icons && data.icons.map(icon => (
                            <Col sm="12" md="6" key={icon.id}>
                                <Card style={cardItem}>
                                    <Card.Header className='fw-medium'>{icon.name}</Card.Header>
                                    <Card.Img style={cardImg} className='mb-2' src={icon.src} />

                                    <Button disabled={pfp === icon.src || wiseCoins < icon.price && checkObtainedIcon(icon)} onClick={() => handleShop(icon.src)}>
                                    { pfp === icon.src ? (
                                        "Selecionado" 
                                    ) : ( 
                                        checkObtainedIcons(icon)
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