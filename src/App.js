import React from 'react'
//import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Index from './components/Index';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/home'  element = {<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
