import React from 'react'
import {Link } from "react-router-dom"
import RoomIcon from '@mui/icons-material/Room';
import ShowerIcon from '@mui/icons-material/Shower';
import BedIcon from '@mui/icons-material/Bed';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import LinkIcon from '@mui/icons-material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import {useState} from 'react'
import { styled } from '@mui/material/styles';

function PropertyView(){
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#ffa31a"),
    backgroundColor: "#ffa31a",
    '&:hover': {
      backgroundColor: "#ffa31a",
    },
  }));
  const [showcontact,setShowContact]=useState();

  const HandleContact = () =>{
    setShowContact(true)
  }
  
  const contactList=[{
    name:"Dennis Sammy",
    title: "Landlord",
    messageTel: "0759233322",
    email: "sam77@gmail.com",
    callTel: "0759233322"
  },
  {
    name:"Musembi",
    title: "Caretaker",
    messageTel: "0759233322",
    email: "sam77@gmail.com",
    callTel: "0759233322"
  }]
  const roomView=[{
    image:"./room1.jpg"
  },
  {
    image:"./room1.jpg"
  },
  {
    image:"./room1.jpg"
  },
  {
    image:"./room1.jpg"
  }
]
const Perks=[
  {item:"kitchen",},
  {item:"balcony",},
  {item:"security",},
  {item:"lighting",},
  {item:"Wi-fi",},
]
const Review=[
  {
  name:"Sam",
  date:"20-02-21",
  review:"Good House I cold give it a 10 but it has water issues and electricity shortages once in a while at the most inconviniencing moments"
  },
  {
    name:"Sam",
    date:"20-02-21",
    review:"Good House I cold give it a 10 but it has water issues and electricity shortages once in a while at the most inconviniencing moments"
  },
]
  return(
     <div style={{position:"relative"}}>
        {
          //Image
        }
        <div>
          <img src="/room1.jpg" alt="logo" style={{width:"100%",height:"50vh",objectFit:"cover"}}/>
        </div>
        {
          //Information
        }
        <div style={{padding:"8px",fontSize:"0.99rem",color:"#000000"}}>
          <h3 style={{fontFamily:"Poppins-Bold",fontSize:"1.6rem"}}>Virmaj Towers</h3>
          <h4 style={{fontFamily:"Poppins-Bold",}}> Ksh 6,400 <span style={{color:"grey"}}>/ Month</span></h4>
          <div style={{display:'flex',color:"grey",}}>
            <RoomIcon style={{fontSize:"1.4rem",color:"#ffa31a"}}/>
            <p>Opposite Gate C,next to nyamwaj apartments</p>
          </div>
          <div style={{color:"grey",display:"flex",justifyContent:"space-between",width:"80px",fontSize:"1rem",margin:"5px 0"}}>
            <ShowerIcon style={{fontSize:"1.3rem"}}/>
            <BedIcon style={{fontSize:"1.3rem"}}/>
            <ElectricalServicesIcon style={{fontSize:"1.3rem"}}/>
          </div>
          {
            //share
          }
          <div style={{display:"flex",}}>
            <p>Share :</p>
            <Link to='' style={{margin:"0 5px"}}><WhatsAppIcon style={{fontSize:"1.3rem",color:"#25D366"}}/></Link>
            <Link to='' style={{margin:"0 5px"}}><FacebookIcon style={{fontSize:"1.3rem",color:"#1877f2"}}/></Link>
            <Link to='' style={{margin:"0 5px"}}><InstagramIcon style={{fontSize:"1.3rem",color:"#DD2A7B"}}/></Link>
            <Link to='' style={{margin:"0 5px"}}><LinkIcon style={{fontSize:"1.3rem",color:"#000000"}}/></Link>
          </div>
          {
            //Ratings
          }
          <div >
            <h4 style={{color:"#000000"}}>Stats</h4>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{fontSize:"1rem",display:"flex"}}>
                <StarIcon style={{color:"#ffa31a",}}/>
                <p style={{
                  width:"55px",
                  padding:"2.5px",
                  fontSize:"0.85rem",
                  fontFamily:"Poppins-bold"
                }}>4.3</p>
              </div>
            </div>
          {
            //Description
          }
          <div>
            <h4 >Description</h4>
            <p style={{color:"grey"}}>Are you looking for family friendly neighborhood with great neighbors large lot with a creek that runs through the back</p>
          </div>
          {
            //Amenities
          }
          <div style={{color:"grey"}}>
            <h4 style={{color:"#000000"}}>Amenities</h4>
            {Perks.map((item)=>{
              return(
                <p>{item.item}</p>
              )
            })}
            
          </div>
          {
            //overview
          }
          <div style={{color:"grey"}}>
            <h4 style={{color:"#000000"}}>Overview</h4>
            {roomView.map((item)=>{
              return(
                <img src={item.image} alt='roomview'style={{width:"150px",height:"100px",margin:"0 5px", objectFit:"cover",borderRadius:"10px"}}/>
              )
            })}
          </div>
            {
              //Reviews
            }
            <div style={{color:""}}>
            <h3 style={{}}>Reviews</h3>
              <div style={{display:"flex"}}>
                {Review.map((item)=>{
                  return(
                    <div style={{
                      width:"200px",
                      height:"150px",
                      padding:"5px",
                      border:"1px solid #e5e5e5",
                      borderRadius:"5px",
                      fontSize:"0.9rem",
                      fontFamily:"Poppins-regular",
                      overflow:"clip",
                      margin:" 0 8px",
                    }}>
                      <div style={{display:"flex"}}>
                        <AccountCircleIcon style={{fontSize:"2rem"}}/>
                        <div style={{fontSize:"0.7rem"}}>
                          <p style={{color:"#000000"}}>{item.name}</p>
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <p style={{color:"grey",fontSize:"0.8rem"}}>{item.review}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            {
              //Contacts
            }
            {showcontact ? (
              <div style={{display:"flex",flexDirection:"column"}}>
              <h4>Contacts</h4>
              {contactList.map((item)=>{
                return(
                  <div style={{display:"flex",flexDirection:"column",margin:"10px 0",borderRadius:"10px",padding:"10px",backgroundColor:"#eeeeee"}}>
                    <div style={{display:"flex"}}>
                      <AccountCircleIcon style={{fontSize:"2rem"}}/>
                      <div style={{lineHeight:"12px"}}>
                        <h5>{item.name}</h5>
                        <small>{item.title}</small>
                      </div>
                    </div>
                    <div style={{display:"flex",margin:"0 5px",alignItems:"center",fontSize:"13px"}}>
                        <CallIcon style={{fontSize:"1rem"}}/>
                        <p>{item.callTel}</p>
                    </div>          
                    {
                      /*<div style={{display:"flex",fontSize:"13px"}}>
                      <div style={{display:"flex",margin:"0 5px",alignItems:"center"}}>
                        <MessageIcon style={{fontSize:"1rem"}}/>
                        <p>{item.messageTel}</p>
                      </div>
                      <div style={{display:"flex",margin:"0 5px",alignItems:"center"}}>
                        <EmailIcon style={{fontSize:"1rem"}}/>
                        <p>{item.email}</p>
                        
                      </div>
                      </div>
                    */}
                  </div>
                )
              })}
              </div>
              
            ):
            (
              <ColorButton style={{display:"flex",margin:"10px 5px",alignItems:"center",fontSize:"13px",width:"100%",}} onClick={HandleContact}>      
                <p>Check Availability</p>
                  {//<link>{item.callTel}</link>
                  }
              </ColorButton>
              
            )
          }
            
          </div>
        </div>
        
     </div>
  )
}

export default PropertyView;