import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';

// Components
import Navbar from '../src/components/NavBar/NavBar'
import Footer from '../src/components/Footer/Footer'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Route exact path='/' component={Homepage} />
        <Route path='/pokemon/:id' component={PokemonPage}/>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
