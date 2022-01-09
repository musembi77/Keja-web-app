import React,{useState} from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useStateValue } from "../components/StateProvider";
import {Room,
        Call,
        FavoriteBorder,
        Favorite,
} from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from '../components/Footer'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                overviewimage={service.overviewimage}
                servicename={service.servicename}
                type={service.type}
                area={service.area}
                location={service.location}
                stats={service.stats}
                description={service.description}
                policies={service.policies}
                reviews={service.reviews}
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
            amenities,
            overviewimage,
            vacancy,
            reviews,
            contact,
            area
          }
            
)=>{
  //console.log(reviews)
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#ffa31a"),
    backgroundColor: "#ffa31a",
    '&:hover': {
      backgroundColor: "#ffa31a",
    },
  }));
  // eslint-disable-next-line no-unused-vars
  const [{showreviews},dispatch] = useStateValue('')
  
  const [showcontact,setShowContact]=useState();
  const HandleContact = () =>{
    setShowContact(true)
  }

  const[like,setLike]=useState();
  const HandleLike=()=>{
    setLike(!like);
  }
  return(
    <div style={{position:"relative"}}>
    {
      //Image
    }
    <div style={{position:"  relative",cursor:"pointer"}}>
      <img src={mainimage} alt="logo" style={{width:"100%",height:"50vh",objectFit:"cover"}}/>
      <div onClick={HandleLike} style={{width:"30px",height:"30px",backgroundColor:"#e5e5e5",borderRadius:"100px",textAlign:"center",position:"absolute",top:"10px",right:"10px"}}>
      {like ? 
        <Favorite style={{fontSize:"1.2rem",margin:"6px auto",color:"#ffa31a"}}/>
        :
        <FavoriteBorder style={{fontSize:"1.2rem",margin:"6px auto"}}/>}
      </div>
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
      <p style={{fontSize:"0.9rem"}}>{area}</p>
      <div >
      {
        //Description
      }
      <div>
        <h4 >Description</h4>
        <p style={{color:"grey"}}>{description}</p>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        <img src={overviewimage} alt="logo" style={{width:"150px",height:"120px",objectFit:"cover",borderRadius:"10px",margin:"5px 10px"}}/>
        <img src={overviewimage} alt="logo" style={{width:"150px",height:"120px",objectFit:"cover",borderRadius:"10px",margin:"5px 10px"}}/>
        <img src={overviewimage} alt="logo" style={{width:"150px",height:"120px",objectFit:"cover",borderRadius:"10px",margin:"5px 10px"}}/>
        <img src={overviewimage} alt="logo" style={{width:"150px",height:"120px",objectFit:"cover",borderRadius:"10px",margin:"5px 10px"}}/>
      </div>        
        {
          //Contacts
        }
        {showcontact ? (
          <div style={{display:"flex",flexDirection:"column"}}>
          <h4>Contacts</h4>
          <div style={{display:"flex",flexDirection:"column",margin:"10px 0",borderRadius:"10px",padding:"10px",backgroundColor:"#eeeeee"}}>
                <div>
                  <div style={{display:"flex"}}>
                    <img src='./Keja.jpg' alt="logo" style={{margin:"0 5px",fontSize:"2rem",width:"30px",height:"30px",borderRadius:"100px"}}/>
                    <p style={{fontSize:"0.9rem"}}>Keja Agent</p>
                  </div>
                  <div style={{display:"flex",margin:"0 5px",alignItems:"",fontSize:"13px",flexDirection:""}}>
                      <div style={{display:"flex",alignItems:"center",textDecoration:"none",backgroundColor:"#ffa31a",width:"110px",padding:"5px",borderRadius:"5px",margin:"5px 0"}}>
                        <Call style={{fontSize:"1rem",marginRight:"5px"}}/>
                        <p href = "https://wa.link/nv8tti" 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        0771712005</p>
                      </div>
                      <div style={{display:"flex",alignItems:"center",textDecoration:"none",backgroundColor:"#ffa31a",width:"110px",padding:"5px",borderRadius:"5px",margin:"5px"}}>
                        <WhatsAppIcon style={{fontSize:"1rem",margin:"0 5px"}} />
                        <a href = "https://wa.link/nv8tti" 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        0771712005</a>
                      </div>
                      
                  </div>
                </div>
                <div>
                  <div style={{display:"flex"}}>
                    <AccountCircleIcon  style={{margin:"0 5px",fontSize:"2rem",width:"30px",height:"30px",borderRadius:"100px"}}/>
                    
                  </div>
                  <div style={{display:"flex",margin:"0 5px",alignItems:"",fontSize:"13px",flexDirection:""}}>
                      <div style={{display:"flex",alignItems:"center",textDecoration:"none",backgroundColor:"#ffa31a",width:"110px",padding:"5px",borderRadius:"5px",margin:"5px 0"}}>
                        <Call style={{fontSize:"1rem",marginRight:"5px"}}/>
                        <p href = "https://wa.link/nv8tti" 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        {contact}</p>
                      </div>                      
                  </div>
                </div>
              </div>
        </div>
        ):
        (
          <ColorButton style={{display:"flex",margin:"10px 5px",alignItems:"center",fontSize:"13px",width:"100%",}} onClick={HandleContact}>      
            <p>Check Availability</p>
          </ColorButton>
        )
      }
        
      </div>
    </div>
    <Footer />
  </div>
  )
}