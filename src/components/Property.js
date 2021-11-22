import React from 'react'
import ShowerIcon from '@mui/icons-material/Shower';
import BedIcon from '@mui/icons-material/Bed';

function Property(){
  return(
    <div style={{lineHeight:"15px",fontSize:"0.7rem",border:"1px solid grey",width:"200px",borderRadius:"10px"}}>
      <img src="/room1.jpg" alt="logo" style={{width:"100%",height:"150px",objectFit:"cover",borderRadius:"10px"}}/>
      <div style={{padding:"5px"}}>
      <h3 style={{fontFamily:"Poppins-Bold"}}>Ksh. 6500</h3>
      <p>Virmaj</p>
      <p>GateC</p>
      <div style={{color:"grey",display:"flex",justifyContent:"space-around"}}>
        <ShowerIcon style={{fontSize:"1rem"}}/>
        <div style={{ display:"flex",justifyContent:"center",alignItems:"center"}}><p>1</p><BedIcon style={{fontSize:"1rem"}}/></div>
      </div>
      </div>
      
      {//<button type="">show properties</button>
      }
    </div>
  )
}

export default Property;