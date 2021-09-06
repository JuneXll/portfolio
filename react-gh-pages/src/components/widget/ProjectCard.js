import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { projects } from '../../projectData';

const render = (style)=>(
    Object.entries(projects).map((project,index) => (
        <div className='col-lg-5 mx-2 my-2'>
            <Image thumbnail fluid key={`key=${index}`} src={project[1].image} className='shadow-sm'
            style={style}/>
        </div>
    ))
)

const ProjectCard = ()=>{

    const [hover, setHover] = useState({opacity:'1'});

    const handleMouseEnter = ()=>setHover({opacity:'.50'});
    const handleMouseLeave = ()=>setHover({opacity:'1'});

    return(
        <div className='d-flex flex-wrap' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {render(hover)}
        </div>
    )
}

export default ProjectCard;

// event listener onMouseOver...set on hover for cards