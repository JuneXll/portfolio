import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import Tech from './components/pages/Tech';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className='d-flex'>
        <Sidebar className='col'/>
        <Switch>
          <Container fluid className='col overflow-auto'>
            <Route exact path='/' component={Home}/>
            <Route exact path='/react-gh-pages' component={Home}/>
            <Route exact path='/tech' component={Tech}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/contact' component={Contact}/>
          </Container>
          <Route render={()=><h1 className='display-2'>Oops! Wrong Page!</h1>}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
