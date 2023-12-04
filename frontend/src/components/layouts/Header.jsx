import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import useUserStore from '../store/UserStore';

import './Header.css';

function Header() {
    const name = useUserStore(state => state.name);
    const logout = useUserStore(state => state.logout);
    const navigate = useNavigate();

    async function handleLogout(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/auth/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
        });

        if (response) {
            const data = await response.json();

            if (data.success) {
                logout();
                navigate('/');
            } else {
                logout();
                navigate('/');
            }
        }
    }

    return (
        <Navbar expand="md" className="position-sticky z-1 top-0 p-0 bg-primary">
            <Container fluid>
                <figure className='d-flex align-items-center py-1'>
                    <img className="rounded-pill p-1" 
                    src="/img/logo-cashwise.png" 
                    alt="Logo marca do CashWise"
                    title="CashWise. Educação Financeira"
                    width="100rem" />
                    <figcaption className='fs-5 fw-light'>CashWise</figcaption>
                </figure>               

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end my-1 px-3" id="basic-navbar-nav">
                    <Nav className="fw-bold gap-2 m-2" id="header-nav">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/boletim">Boletim Informativo</NavLink>
                        <NavLink className="nav-link" to="/simule">Minha Simulação</NavLink>
                    </Nav>    
                    <Button size="sm" variant="outline-secondary mt-1" onClick={handleLogout}>Logout</Button>               
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header