import React, { useState } from 'react';
import { useSpring, a } from '@react-spring/web'
import { Image, Col, Row } from 'react-bootstrap';
import { projects } from '../../projectData';

const ProjectCard = ()=>{
    //Card flip(spring)
    const [flipped, setFlipped] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    const renderCard = (card, index) => {
        return (
            <Col className='col-lx-6  col-md-12' onClick={() => setFlipped(state => !state)} >
                <a.div className='mx-2 my-2' style={{ opacity: opacity.to(o => 1 - o), transform, cursor:'pointer'}} >
        
                    <Image thumbnail fluid key={index} src={card.image} className='shadow-sm m-1' />
       
                </a.div>

                <a.div className='col-lx-6  col-md-12 mx-2 my-2' style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                    cursor:'pointer'
                    }}>

                    <Image thumbnail fluid key={index} src={card.image} className='shadow-sm m-1' style={{opacity:'.70'}} />

                    
                    <div 
                        className='d-flex flex-column col-8 justify-content-center align-items-center shadow-sm' style={{
                            backgroundColor:'white', 
                            willChange: 'transform, opacity',
                            borderRadius: '15px'
                        }}>
                        
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
                    
                </a.div>
            </Col>
        )
    }
    

    return(
        <Row xs={1} m={2} xl={2} className='d-flex flex-wrap'>
            {projects.map(renderCard)}
        </Row> 
    )
}

export default ProjectCard;

