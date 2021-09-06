import React from 'react';
import IconContainer from '../widget/IconContainer';
import { Container, Row, Col } from 'react-bootstrap';
import { CDBAnimation } from 'cdbreact';


const Tech = ()=>{

    return(
        <Container className='h-100 w-100'>
            <Row style={{margin:'2rem', paddingTop:'1rem'}}>
                <Col className='col-lg-6 col-md-6 col-sm-auto d-flex flex-column align-items-center py-2'>
                    <CDBAnimation type='pulse' count='2'>
                        <h1>Front-End</h1>
                    </CDBAnimation> 
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React.js</li>
                        <li>GraphQL/ApolloClient</li>
                    </ul>
                </Col>
                <Col className='col-lg-6 col-md-6 col-sm-auto d-flex flex-column align-items-center py-2'>
                    <CDBAnimation type='pulse' count='2' delay='2s'>
                        <h1>Back-End</h1>
                    </CDBAnimation>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>REST APIs</li>
                        <li>GraphQL/ApolloServer</li>
                    </ul>
                </Col>
                <Col className='col-lg-6 col-md-6 col-sm-auto d-flex flex-column align-items-center py-2'>
                    <CDBAnimation type='pulse' count='2' delay='4s'>
                        <h1>Tools</h1>
                    </CDBAnimation>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>Chrome Developer Tools</li>
                        <li>GitHub</li>
                        <li>Node Package Manager</li>
                    </ul>
                </Col>
                <Col className='col-lg-6 col-md-6 col-sm-auto d-flex flex-column align-items-center py-2'>
                    <CDBAnimation type='pulse' count='2' delay='6s'>
                        <h1>Frameworks</h1>
                    </CDBAnimation>
                    <ul>
                        <li>React-Bootstrap</li>
                        <li>Bootstrap</li>
                        <li>Express.js</li>
                        <li>Bulma CSS</li>
                        <li>Materialize CSS</li>
                    </ul>
                </Col>
            </Row>

            <IconContainer/>
        </Container>
    )
}

export default Tech;