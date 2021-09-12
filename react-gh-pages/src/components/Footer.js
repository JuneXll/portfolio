import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = ()=>{
    return(
        <Navbar className='fixed-bottom'>
            <Container className='d-flex justify-content-end' style={{color:'white'}}>
                <small>&copy;2021 June Hernandez</small>
            </Container>
        </Navbar>
    )
}

export default Footer;