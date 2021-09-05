import React from 'react';
import { Container, Image } from 'react-bootstrap';
import pic from '../../images/profile-pic.JPG';
import { CDBAnimation } from 'cdbreact';

const Home = ()=>{
    return(
        <Container className='h-100 w-100'>
            <main className='d-flex flex-column justify-content-center align-items-center my-5'>

                <Image className='col mb-3 img-thumbnail' style={{width:'325px',height:'325px'}} src={pic} roundedCircle/>

                <CDBAnimation type='pulse' count='5'>
                    <h1 className='mb-3'>Hi there, I'm June.</h1>
                </CDBAnimation>
            
                <p className='px-5' style={{textIndent:'15px'}}>I am a Miami based Web Developer. As a novice developer, I am continuously learning new techniques to sharpen my skills. I strive for quality and excellence. I enjoy providing structure and order to all of my projects and maximizing user experience. Working on a team is always a rewarding endeavor, but I am definitely not afraid to get down to the nitty gritty and work on projects independently.</p>
            </main>
        </Container>
    )
}

export default Home;