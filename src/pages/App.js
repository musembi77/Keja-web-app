import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home'
import Explore from './Explore';
import Index from './Index';
import PropertyView from './PropertyView';
import PostApartment from './PostApartment';
import LoginPage from './LoginPage';
import Header from '../components/Header';




function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/home'  element = {<Home />}/>
          <Route path='/explore'  element = {<Explore />}/>
          <Route path='/property'  element = {<PropertyView />}/>
          <Route path='/login'  element = {<LoginPage />}/>
          <Route path='/postanApartment'  element = {<PostApartment />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
