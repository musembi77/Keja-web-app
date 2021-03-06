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
import LogInPopUp from '../components/LogInPopUp'
import Mappage from './Mappage'
import Account from './Account'
import CoSharing from './CoSharing'

function App() {
     const [showmenu, setShowmenu]=useState('');
    
    const HandleMenu=()=>{
        setShowmenu(!showmenu);
    }
    
  return (
      <div style={{position:"relative"}} >
      <Router>
          <Header onClick={HandleMenu} showmenu={showmenu}/>
          
          <LogInPopUp />
          <div onClick={()=>{
             setShowmenu(false)
            }}>
            
          <Routes >
            <Route path='/' element={<Index />}/>
            <Route path='/home'  element = {<Home />}/>
            <Route path='/explore'  element = {<Explore />}/>
            <Route path="/property/:id"  element = {<PropertyView />}/>
            <Route path='/login'  element = {<Login />}/>
            <Route path='/wishlist'  element = {<WishList />}/>
            <Route path='/listwithUs'  element = {<ListingIndex />}/>
            <Route path='/postlisting'  element = {<PostListing />}/>
            <Route path='/servicelisting'  element = {<ServiceListing />}/>
            <Route path='/exploreservices'  element = {<Services />}/>
            <Route path='/services'  element = {<ServicesView />}/>
            <Route path='/about'  element = {<About />}/>
            <Route path='/kejacare'  element = {<Support />}/>
            <Route path='/reviews'  element = {<Reviewpage />}/>
            <Route path='/account'  element = {<Account />}/>
            <Route path='/CoSharing'  element = {<CoSharing />}/>
            <Route path='/map'  element = {<Mappage />}/>
          </Routes>
          </div>
        </Router>
      </div>
    
  );
}

export default App;
