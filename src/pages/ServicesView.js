import React from 'react'
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
import { useStateValue } from "../components/StateProvider";
import {Room,
        Call,
} from '@mui/icons-material'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from '../components/Footer'

function ServicesView(){
	const [{ services,}] = useStateValue();
  
	return(
		<div>
			<div>
      {services.map((service)=>{
          return(
            <ViewDetails
                key={service.id}
                id={service._id}
                mainimage={service.mainimage}
                servicename={service.servicename}
                type={service.type}
                area={service.area}
                location={service.location}
                description={service.description}
                contact={service.contact}
          />
          )
      })}
    </div>
		</div>
	)
} 

export default ServicesView;

const ViewDetails=({
            id,
            mainimage,
            servicename,
            type,
            location,
            stats,
            description,
            contact,
            area
          }
            
)=>{
  return(
    <div style={{position:"relative"}}>
    {
      //Image
    }
    <div style={{position:"  relative",cursor:"pointer"}}>
      <img src={mainimage} alt="logo" style={{width:"100%",height:"50vh",objectFit:"cover"}}/>
    </div>
    {
      //Information
    }
    <div style={{padding:"8px",fontSize:"0.99rem",color:"#000000"}}>
      <h3 style={{fontFamily:"Poppins-Bold",fontSize:"1.6rem"}}>{servicename}</h3>
      <div style={{display:'flex',color:"grey",}}>
        <Room style={{fontSize:"1.4rem",color:"#ffa31a"}}/>
        <p>{location}</p>
      </div>
      <p style={{fontSize:"0.9rem"}}>Area : {area}</p>
      <div >
      {
        //Description
      }
      <div>
        <h4 >Description</h4>
        <p style={{color:"grey",whiteSpace:"pre"}}>{description}</p>
      </div>     
        {
          //Contacts
        }
        <div style={{display:"flex",flexDirection:"column"}}>
          <h4>Contacts</h4>
          <div style={{display:"flex",alignItems:"center",textDecoration:"none",backgroundColor:"#ffa31a",width:"120px",padding:"5px",borderRadius:"5px",margin:"5px 0"}}>
                        <Call style={{fontSize:"1rem",marginRight:"5px"}}/>
                        <p style={{fontSize:'0.9rem'}}
                        >
                        {contact}</p>
                      </div>
              
        </div>
        
        
      </div>
    </div>
    <Footer />
  </div>
  )
}
