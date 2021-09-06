import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../widget/ProjectCard';

const Projects = (i)=>{
    return(
        <Container className='h-100 w-100 p-0'>
            <ProjectCard/>
        </Container>
    )
}

export default Projects;

