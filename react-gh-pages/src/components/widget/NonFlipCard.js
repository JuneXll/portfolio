import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import { projects } from '../../projectData';

const nonFlipCard = ()=>{

    const renderCard = (card, index) => {
        return (
            <Col className='col-lx-6  col-md-12'  >
            
                <div className='col-lx-6  col-md-12 mx-2 my-2'>

                    <Image thumbnail fluid key={index} src={card.image} className='shadow-sm m-1' />

                    
                    <div className='d-flex flex-column mb-4 shadow-sm' style={{backgroundColor:'white', borderRadius:'15px'}}>
                        
                        <div className='d-flex flex-column align-items-center'>
                            <h3>{card.title}</h3>
                            <h5>{card.subtitle}</h5>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <a href={card.github} target="_blank" alt='github' rel="noreferrer">
                                <i className="fab fa-github fa-2x mx-2" style={{color:'grey'}}></i>
                            </a>
                            <a href={card.link} target="_blank" alt={card.title} rel="noreferrer">
                                <i className="fas fa-laptop-code fa-2x mx-2" style={{color:'grey'}}></i>
                            </a>
                        </div>
                    </div> 
                    
                </div>
            </Col>
        )
    }
    

    return(
        <Row xs={1} m={2} xl={2} className='d-flex flex-wrap'>
            {projects.map(renderCard)}
        </Row> 
    )
}

export default nonFlipCard;