import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <Navbar expand="md" className="position-sticky z-1 top-0 p-0 bg-primary">
            <Container>
                <Navbar.Brand href='#foi'>
                    <img className="rounded-pill" 
                    src="/img/logo-cashwise.jpg" 
                    alt="Logo marca do CashWise"
                    title="CashWise. Educação Financeira"
                    width="42%" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="fw-bold gap-2" id="header-nav">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/boletim">Boletim Informativo</NavLink>
                        <NavLink className="nav-link" to="/previdencia">Previdência Aqui</NavLink>
                        <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
                        <NavLink className="nav-link" to="/contato">Contato</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header