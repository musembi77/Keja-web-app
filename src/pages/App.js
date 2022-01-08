import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home'
import Explore from './Explore';
import Index from './Index';
import PropertyView from './PropertyView';
import ListingIndex from './ListingIndex';
import Login from './Login';
import Header from '../components/Header';
import PostListing from './PostListing'
import ServiceListing from './ServiceListing'
import WishList from './WishList';
import Services from './Services'
import About from './About'
import Support from './Support'

import ServicesView from './ServicesView'
import Reviewpage from './Reviewpage'

function App() {
   const [showmenu, setShowmenu]=useState('');
    
    const HandleMenu=()=>{
        setShowmenu(!showmenu);
    }

  return (
      <div style={{position:"relative"}} >
      <Router>
          <Header onClick={HandleMenu} showmenu={showmenu}/>
          <div onClick={()=>{
             setShowmenu(false)
            }}>
          <Routes >
            <Route path='/' element={<Index />}/>
            <Route path='/home'  element = {<Home />}/>
            <Route path='/explore'  element = {<Explore />}/>
            <Route path='/property'  element = {<PropertyView />}/>
            <Route path='/login'  element = {<Login />}/>
            <Route path='/wishlist'  element = {<WishList />}/>
            <Route path='/listwithUs'  element = {<ListingIndex />}/>
            <Route path='/postlisting'  element = {<PostListing />}/>
            <Route path='/servicelisting'  element = {<ServiceListing />}/>
            <Route path='/exploreservices'  element = {<Services />}/>
            <Route path='/services'  element = {<ServicesView />}/>
            <Route path='/about'  element = {<About />}/>
            <Route path='/support'  element = {<Support />}/>

            <Route path='/reviews'  element = {<Reviewpage />}/>
          </Routes>
          </div>
        </Router>
      </div>
    
  );
}

export default App;
