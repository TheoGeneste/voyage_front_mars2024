import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const FooterComponent = () =>{

    return <>
        <Navbar className="bg-body-tertiary mt-3" >
        <Container>
            <Navbar.Brand href="#home">VoyageMars</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Théo BIALASIK</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
}

export default FooterComponent;