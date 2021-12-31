import React,{useState} from 'react';
import {Link } from "react-router-dom"
import {newproperty} from '../components/dummydata.js'
import {Location} from '../components/dummydata.js'
import ContentSlider from '../components/ContentSlider.js';
import MapIcon from '@mui/icons-material/Map';
import Map from '../components/Map.js'
import CloseIcon from '@mui/icons-material/Close';

function Home({property}){
  const [showmap,setShowMap]=useState('')
  const HandleMap=()=>{
    setShowMap(!showmap)
  }
  return(
    <div>
      
      <div style={{padding:"5px"}}>
      {
        //Communities
      } 
      <div >
        <p>Communities</p>
          <div style={{
            display:"flex",
            //justifyContent:"space-between",
            alignItems:"center",
            textAlign:"center",
            overflow:"auto",
            whiteSpace:"nowrap",
            width:"100%",

          }} className="scrollbar">
            {Location.map((item)=>{
              return(
                <div> 
                  <ul style={{
                    backgroundColor:"#eeeeee",
                    width:"100px",
                    marginRight:"5px",
                    textDecoration:"none",
                    listStyle:"none",
                    
                  }}>
                    <li >
                      <Link style={{                      
                        fontSize:"0.9rem",
                        fontFamily:"Poppins-Regular",
                        textDecoration:"none",
                        color:"#000000",
                        backgroundColor:"",
                      }} to='/explore'>
                      {item.title}
                      </Link>
                    </li>
                  </ul>
                  
                </div>
              )
            })}
          </div>
      </div>
      <div style={{width:"100vw",objectFit:"contain"}}>
        
        {showmap?
          <> 
          <CloseIcon onClick={HandleMap}/>
          <Map />
          </>:
          <div style={{height:"",backgroundColor:"#eee",display:"flex",margin:"10px 0"}}>
          <p style={{fontSize:"0.8rem"}}>Click Map to Find apartments near you</p>
          <MapIcon onClick={HandleMap}/>
          </div>
        }
        
        
      </div>
      
      {
        //Featured / Recommended
      } 
      <div>
        <p>Featured</p>
        <div style={{
          display:"flex",
          //justifyContent:"space-between",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
          margin:"5px",
          //padding:"10px",
        }} className="scrollbar">
          {newproperty.map((property)=>{
            return(
                <ul style={{
                  //backgroundColor:"#f79d00",
                  width:"150px",
                  height:"100%",
                  textAlign:"center",
                  placeItems:"center",
                  position:"relative",
                  borderRadius:"10px",
                  //margin:"0 10px",
                  textDecoration:"none",
                  listStyle:"none",
                  //borderRadius:"30px"
                }}>
                  <li >
                    <ContentSlider
                    property={property}
                    />
                  </li>
                </ul>
                )
          })}
        </div>
      </div>
      {
        //Services
      } 
      
      {
        //NewBuildings
      }
      <div>
        <p>NewBuildings</p>
        <div style={{
          display:"flex",
          //justifyContent:"space-between",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
          margin:"5px",
          //padding:"10px",
        }} className="scrollbar">
          {newproperty.map((property)=>{
            return(
                <ul style={{
                  //backgroundColor:"#f79d00",
                  width:"150px",
                  height:"100%",
                  textAlign:"center",
                  placeItems:"center",
                  position:"relative",
                  borderRadius:"10px",
                  //margin:"0 10px",
                  textDecoration:"none",
                  listStyle:"none",
                  //borderRadius:"30px"
                }}>
                  <li >
                    <ContentSlider
                    property={property}
                    />
                  </li>
                </ul>
                )
          })}
        </div>
      </div>            
      </div>
    </div>
  )
}

export default Home