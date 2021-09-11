import React from 'react';
import { Button } from 'react-bootstrap';
//  import React, { useState } from 'react';
//  import { Button, Collapse } from 'react-bootstrap';
import { CDBAnimation } from 'cdbreact';

// const iconStyle = {
//     boxShadow: '0 0 15px #00aced',
//     transition: 'all 0.5s ease'
// }
 
const IconContainer = ()=>{
    //Icons
    const icons = {
        1: {
            name: 'HTML',
            icon: "fab fa-html5"
        },
        2: {
            name: 'CSS',
            icon: "fab fa-css3-alt"
        },
        3: {
            name: 'JavaScript',
            icon: "fab fa-js-square"
        },
        4: {
            name: 'React',
            icon: "fab fa-react"
        },
        5: {
            name: 'Bootstrap',
            icon: "fab fa-bootstrap"
        },
        6: {
            name: 'Node.js',
            icon: "fab fa-node-js"
        },
        7: {
            name: 'GitHub',
            icon: "fab fa-github"
        },
        8: {
            name: 'Node Package Manager',
            icon: "fab fa-npm"
        }
    } 
    
    // const [open, setOpen] = useState(false);
    
    const button = () => (Object.entries(icons).map(icon => (
        <div className='d-inline-block'>
            <CDBAnimation>
                <Button 
                    variant='light'
                    size='lg'
                    className='m-4'
                    style={{cursor:'default'}}
                    // onClick={()=>setOpen(!open)}
                    // aria-expanded={open}
                    >
                        <i className={icon[1].icon}></i>
                </Button>
            </CDBAnimation>
            {/* <Collapse in={open}>
                <div className='d-flex justify-content-center'>
                    {icon[1].name}
                </div>
            </Collapse> */}
        </div>
        )
    ))

    return(
        <div className='d-flex flex-wrap justify-content-center mx-2'>
            {button()}
        </div>
    )
}

export default IconContainer;

