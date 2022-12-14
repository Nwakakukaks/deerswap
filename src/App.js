import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
// import Services from './components/pages/Services/Services';
import SearchDomain from './components/pages/Search/SearchDomain';


function App() {
  return (
    <Router> 
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/search' exact component={SearchDomain}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
