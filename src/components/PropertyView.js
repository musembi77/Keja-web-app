import React from 'react'
import RoomIcon from '@mui/icons-material/Room';
import ShowerIcon from '@mui/icons-material/Shower';
import BedIcon from '@mui/icons-material/Bed';
function PropertyView(){
  return(
     <div>
        <div>
          <img src="/room1.jpg" alt="logo" style={{width:"100%",height:"50vh",objectFit:"cover"}}/>
        </div>
        <div style={{padding:"5px"}}>
          <h3 style={{fontFamily:"Poppins-Bold",fontSize:"1.2rem"}}> Ksh 6,500</h3>
          <div style={{display:'flex',color:"grey",fontSize:"0.8rem",}}>
            <RoomIcon style={{fontSize:"0.9rem"}}/>
            <p>Opposite Gate C,next to nyamwaj apartments</p>
          </div>
          <div style={{color:"grey",display:"flex"}}>
            <ShowerIcon style={{fontSize:"1rem"}}/>
          <div style={{display:"flex",justifyContent:"space-around",textAlign:"center"}}>
            <span>1</span>
            <BedIcon style={{fontSize:"1rem"}}/>
          </div>
      </div>
        </div>
        
     </div>
  )
}

export default PropertyView;