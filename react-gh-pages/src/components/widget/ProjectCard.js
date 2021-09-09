import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Image } from 'react-bootstrap';
import { projects } from '../../projectData';

const render = ()=>(
    Object.entries(projects).map((project,index) => (
        <Image thumbnail fluid key={`key=${index}`} src={project[1].image} className='shadow-sm'/>
    ))
)

const ProjectCard = ()=>{
    //Card flip
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = ()=> {
        setIsFlipped(!isFlipped);
    }

    // //Hover
    // const [hover, setHover] = useState({opacity:'1'});

    // const handleMouseEnter = ()=>setHover({opacity:'.50'});
    // const handleMouseLeave = ()=>setHover({opacity:'1'});

    return(
        // <div className='d-flex flex-wrap' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        //     {render(hover)}
        // </div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" className='d-flex flex-wrap'>
            <div className='col-lg-5 mx-2 my-2' onClick={handleClick}>
                {/* <Image thumbnail fluid  src={project[1].image} className='shadow-sm' onClick={handleClick}/> */}
                {/* <button onClick={handleClick}>Click to flip</button> */}
                {render()}
            </div>

            <div className='col-lg-5 mx-2 my-2'>
                This is the back of the card.
                <button onClick={handleClick}>Click to flip</button>
            </div>
        </ReactCardFlip>
    )
}

export default ProjectCard;

// event listener onMouseOver...set on hover for cards
//onHover be able to see the opacity with text saying Project Name, short content, pill button 'launch' and 'github'

{/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <YOUR_FRONT_CCOMPONENT>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_FRONT_CCOMPONENT>

        <YOUR_BACK_COMPONENT>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_BACK_COMPONENT>
</ReactCardFlip> */}