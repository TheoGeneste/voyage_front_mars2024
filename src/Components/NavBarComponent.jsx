import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const NavBarComponent = () => {
    const navigate = useNavigate()

    const navigateTo = (route) => {
        navigate(route);
    }

    return <>
        <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
        <Container>
            <Navbar.Brand onClick={() => {navigateTo('/')}}>VoyageMars</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={() => {navigateTo('/')}}>Home</Nav.Link>
                <Nav.Link onClick={() => {navigateTo('/categories')}}>Categories</Nav.Link>
                <Nav.Link onClick={() => {navigateTo('/clients')}}>Clients</Nav.Link>
                <Nav.Link onClick={() => {navigateTo('/reservations')}}>Reservations</Nav.Link>
                <Nav.Link onClick={() => {navigateTo('/login')}}>Connexion</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
}

export default NavBarComponent;