import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = ()=>{
    return(
        <Container>
            <Navbar className='fixed-bottom'>
                <Container className='d-flex justify-content-center'>
                    <small>&copy;2021 June Hernandez</small>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Footer;