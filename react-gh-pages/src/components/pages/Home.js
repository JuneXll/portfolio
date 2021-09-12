import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import pic from '../../images/profile-pic.JPG';
import { CDBAnimation } from "cdbreact";

const Home = ()=>{
    return(
        <Container className='h-100 w-100 mx-auto'>
            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column col-xl-6 col-sm-10 justify-content-center align-items-center my-4 py-2' style={{backgroundColor:'white', borderRadius:'15px'}}>

                    <Image className='col mb-3 img-thumbnail' style={{width:'325px',height:'325px'}} src={pic} roundedCircle/>

                    <CDBAnimation type='pulse' count='3'>
                        <h1 className='mb-3'>Hi there, I'm June.</h1>
                    </CDBAnimation>

                    <p className='px-5' style={{textIndent:'15px'}}>I am a Miami based Web Developer. As a novice developer, I am continuously learning new techniques to sharpen my skills. I strive for quality and excellence. I enjoy providing structure and order to all of my projects and maximizing user experience. Working on a team is always a rewarding endeavor, but I am definitely not afraid to get down to the nitty gritty and work on projects independently.</p>

                    <Button href='https://docs.google.com/document/d/1BRJwryHRSNR7SiqSzSzGPfpwgCMGXSiTb02sNJKKSms/edit?usp=sharing' target='_blank' variant='outline-dark' size='sm'><i class="fas fa-file-download"></i> Download my Resume</Button>
                </div>
            </div>
        </Container>
    )
}

export default Home;