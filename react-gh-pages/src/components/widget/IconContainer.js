 import React, { useState } from 'react';
 import { Button, Collapse } from 'react-bootstrap';
 
 const IconContainer = ()=>{
     //Icons
    const icons = {
        1: {
            name: 'HTML',
            icon: (<i class="fab fa-html5"></i>)
        },
        2: {
            name: 'CSS',
            icon: (<i class="fab fa-css3-alt"></i>)
        },
        3: {
            name: 'JavaScript',
            icon: (<i class="fab fa-js-square"></i>)
        },
        4: {
            name: 'React',
            icon: (<i class="fab fa-react"></i>)
        },
        5: {
            name: 'Bootstrap',
            icon: (<i class="fab fa-bootstrap"></i>)
        },
        6: {
            name: 'Node.js',
            icon: (<i class="fab fa-node-js"></i>)
        },
        7: {
            name: 'GitHub',
            icon: (<i class="fab fa-github"></i>)
        },
        8: {
            name: 'Node Package Manager',
            icon: (<i class="fab fa-npm"></i>)
        }
    } 
    
    const [open, setOpen] = useState(false);

    Object.keys(icons).map((i, key)=>{
        console.log(i);
        console.log(key);
        return(
           <div className=''>
               <Button 
               size='lg'
               key={key}
               className='m-4'
               onClick={()=>setOpen(!open)}
               aria-expanded={open}>
                   {i.name}
               </Button>
               <Collapse in={open}>
               <div id="example-collapse-text">
                   adsfasdfasdfasdfa
               </div>
               </Collapse>
           </div>
        )
    })
    
    // const arr = [];
    // for (let i=0;i<icons.length;i++){
    //     console.log(icons[i]);
    //    arr.push(
    //     <div className=''>
    //         <Button 
    //             size='lg'
    //             className='m-4'
    //             onClick={()=>setOpen(!open)}
    //             aria-expanded={open}>
                    
    //         </Button>
    //         <Collapse in={open}>
    //             <div id="example-collapse-text">
    //                 adsfasdfasdfasdfa
    //             </div>
    //   </Collapse>
    //     </div>
    //    )
    // }
    // return arr;

}

 

 export default IconContainer;

