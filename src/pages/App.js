import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home'
import Explore from './Explore';
import Index from './Index';
import PropertyView from './PropertyView';
import ListingIndex from './ListingIndex';
import Login from './Login';
import Header from '../components/Header';
import PostListing from './PostListing'
import WishList from './WishList';
import ProductView from './ProductView'

function App() {
  return (
    
      <div >
      
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Index />}/>
            <Route path='/home'  element = {<Home />}/>
            <Route path='/explore'  element = {<Explore />}/>
            <Route path='/property'  element = {<PropertyView />}/>
            <Route path='/login'  element = {<Login />}/>
            <Route path='/wishlist'  element = {<WishList />}/>
            <Route path='/listwithUs'  element = {<ListingIndex />}/>
            <Route path='/postlisting'  element = {<PostListing />}/>
            <Route path='/productview'  element = {<ProductView />}/>
            
          </Routes>
        </Router>
        
      </div>
    
  );
}

export default App;
