import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import axios from 'axios';
import ClientService from '../Services/ClientService';

const NavBarComponent = () => {
    const {isAuthenticated, setIsAuthenticated, setToken, roles} = useContext(AuthContext);
    const navigate = useNavigate()

    const logout = () => {
        setIsAuthenticated(false);
        setToken(null);
        ClientService.logout();
    }
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
                {isAuthenticated ? <>
                    <Nav.Link onClick={() => {navigateTo('/categories')}}>Categories</Nav.Link>
                    <Nav.Link onClick={() => {navigateTo('/clients')}}>Clients</Nav.Link>
                    {roles === "ROLE_ADMIN" && <>
                        <Nav.Link onClick={() => {navigateTo('/reservations')}}>Reservations</Nav.Link>
                    </>}
                    <Nav.Link onClick={() => {navigateTo('/monCompte')}}>Mon Compte</Nav.Link>
                    <button className='btn btn-primary p-2' onClick={logout}>Deconnexion</button>
                </> : <>
                    <Nav.Link onClick={() => {navigateTo('/login')}}>Connexion</Nav.Link>
            
                </>}
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