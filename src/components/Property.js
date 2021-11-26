import React from 'react'
import {Link} from 'react-router-dom';


function Property(){
  return(
    <div  style={{
      lineHeight:"14px",
      fontSize:"0.7rem",
      border:"1px solid grey",
      width:"10rem",
      borderRadius:"10px",
      height:"210px",
      margin:"5px auto"
    }}>
      <Link
      style={{fontFamily:"Poppins-Bold",textDecoration:"none",color:"#000000"}}
      to='/property'
      >
          <img src="/room1.jpg" alt="logo" style={{width:"100%",height:"150px",objectFit:"cover",borderRadius:"10px"}}/>
          <div style={{padding:"5px"}}>
            <h3 style={{fontFamily:"Poppins-Bold"}}>Ksh. 6500</h3>
            <p>Virmaj</p>
            <p>GateC</p>
          </div>
      </Link>
    </div>
    
  )
}

export default Property;