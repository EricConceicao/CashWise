import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

/*
O prop anchor recebe o 'id' do elemento que você quer dar como destino
para o botão "Voltar ao topo". Tentem usar 'topo' como id.
*/

const Footer = ({ anchor }) => {
    return (
        <footer className='d-flex justify-content-between align-items-center bg-dark p-4 text-light'>
            <a className="text-info text-decorarion-underline" href={`#${anchor}`}>Voltar ao Topo</a>
            
            <div>
                <Nav className="fw-bold gap-2 me-4 justify-content-end text-decoration-underline">
                    <NavLink className="nav-link text-info" to="/sobre">Sobre o CashWise</NavLink>
                    <NavLink className="nav-link text-info" to="/contato">Contate-nos</NavLink>
                </Nav>
                <p className="m-0 fw-light">
                    &copy; 2023 Copyright <a className="text-primary fw-bold" href="/sobre" title="Sobre nós.">CashWise</a>. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;