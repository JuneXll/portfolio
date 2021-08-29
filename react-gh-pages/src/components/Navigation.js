import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const Navigation = () => {
    return(
        <div>
            <Container>
                <Navbar>
                    <Nav.Brand as={Link} to={Home}>June Hernandez</Nav.Brand>
                    <Nav.Link as={Link} to={Experience}>Experience</Nav.Link>
                    <Nav.Link as={Link} to={Projects}>Projects</Nav.Link>
                    <Nav.Link as={Link} to={Contact}>Hire Me</Nav.Link>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navigation;