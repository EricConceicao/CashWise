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
                    <Nav className="gap-2 me-auto" id="header-nav">
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