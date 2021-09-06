import React from 'react';
import { Container, Col } from 'react-bootstrap';

const Contact = ()=>{

    return(
        <Container className='h-100 w-100'>
            <main className='d-flex flex-column justify-content-center align-items-center my-5'>

                <h1>Hire Me</h1>
            
                <Container className='d-flex flex-wrap my-5 justify-content-center'>
                    <Col className='d-flex justify-content-center col-xl-2 col-md-6 my-2'>
                        <a href='mailto:juniettehernandez@yahoo.com'>
                            <i className="fas fa-envelope fa-7x" ></i>
                        </a>
                    </Col>

                    <Col className='d-flex justify-content-center col-xl-2 col-md-6 my-2'>
                        <a href="https://www.linkedin.com/in/juniettehernandez/" target="_blank" alt='linkedin' rel="noreferrer" >
                            <i className="fab fa-linkedin fa-7x"></i>
                        </a>
                    </Col>

                    <Col className='d-flex justify-content-center col-xl-2 col-md-6 my-2'>
                        <a href="https://github.com/JuneXll" target="_blank" alt='github' rel="noreferrer" >
                            <i className="fab fa-github-square fa-7x"></i>
                        </a>
                    </Col>

                    <Col className='d-flex justify-content-center col-xl-2 col-md-6 my-2'>
                        <a href="https://twitter.com/JunebugXll" target="_blank" alt='twitter' rel="noreferrer" >
                            <i className="fab fa-twitter-square fa-7x"></i>
                        </a>
                    </Col>
                </Container>

                <Container>

                </Container>

            </main>
        </Container>
    )
}

export default Contact;