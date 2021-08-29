import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Navigation/>
        <Switch>
          <Container>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Experience' component={Experience}/>
            <Route exact path='/Projects' component={Projects}/>
            <Route exact path='/Contact' component={Contact}/>
          </Container>
          <Route render={()=><h1 className='display-2'>Oops! Wrong Page!</h1>}/>
        </Switch>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
