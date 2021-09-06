import React from 'react';
import { Image } from 'react-bootstrap';
import { CDBMask, CDBView, CDBContainer } from "cdbreact";

const Projects = ()=>{
    return(
        <CDBContainer>
            <CDBView>
                <Image/>
                <CDBMask overlay='grey-light'></CDBMask>
            </CDBView>
        </CDBContainer>
    )
}

export default Projects;

