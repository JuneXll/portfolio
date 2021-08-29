import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = ()=>{
    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
            <a href='#home'>
                Link
            </a>
            <ul>

            </ul>
        </div>
    )
}

export default NavBar;