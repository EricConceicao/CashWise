import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="md" className="z-1 position-sticky top-0 bg-primary">
            <Container>
                <Navbar.Brand href='#foi'>
                    <img className="w-50 rounded-pill" 
                    src="/img/logo-cashwise.jpg" 
                    alt="Logo marca do CashWise"
                    title="CashWise" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/boletim">Boletim Informativo</NavLink>
                        <NavLink to="/previdencia">Previdência Aqui</NavLink>
                        <NavLink to="/sobre">Sobre</NavLink>
                        <NavLink to="/contato">Contato</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header