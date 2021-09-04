import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >June Hernandez
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tech" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tools">Technologies</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/projects" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="code">Projects</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="id-card">
                Contact
              </CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            JH
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
// import Home from './pages/Home';
// import Tech from './pages/Tech';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

// const Sidebar = () => {
//     return(
//         <div className='d-flex justify-content-center' style={{width:'75px', borderRight:'solid 2px black', height:'100vh'}}>
//             <Navbar className='flex-column'>   
                
//                 <Nav.Item>
//                     <Nav.Link as={Link} to={Home}>JH</Nav.Link>
//                 </Nav.Item>
               
//                 <hr style={{color:'black'}}></hr>
                
//                 <ul className="nav flex-column mt-5">
//                     <Nav.Item className='mb-2'>
//                         <Nav.Link as={Link} to={Home}>
//                             <i class="fas fa-home"></i>
//                         </Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item className='mb-2'>
//                         <Nav.Link as={Link} to={Tech}>
//                             <i class="fas fa-tools"></i>
//                         </Nav.Link>
//                     </Nav.Item >
//                     <Nav.Item className='mb-2'>
//                         <Nav.Link as={Link} to={Projects}>
//                             <i class="fas fa-code"></i>
//                         </Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item className='mb-2'>
//                         <Nav.Link as={Link} to={Contact}>
//                             <i class="fas fa-id-card"></i>
//                         </Nav.Link>
//                     </Nav.Item>
//                 </ul>
//             </Navbar>
//         </div>
//     )
// }

// export default Sidebar;