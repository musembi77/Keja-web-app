import React from 'react'
import {Link } from "react-router-dom"
import {Room,
        Shower,
        Bed,
        ElectricalServices,
        Star,
        AccountCircle,
        Call,
        Facebook,
        Instagram,
        WhatsApp,
        FavoriteBorder,
        Favorite,
} from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link';
import Button from '@mui/material/Button';
import {useState} from 'react'
import { styled } from '@mui/material/styles';
import { useStateValue } from "../components/StateProvider";

function PropertyView(){
  const [{ product }] = useStateValue();
  return(
    <div>
      {product.map((property)=>{
          return(
            <ViewDetails
                key={property.id}
                id={property.id}
                coverimg={property.coverimg}
                name={property.name}
                price={property.price}
                location={property.location}
                stats={property.stats}
                description={property.description}
                amenities={property.amenities}
                overview={property.overview}
                review={property.review}
                contact1={property.contact1}
                contact1name={property.contact1name}
                contact2={property.contact2}
                contact2name={property.contact2name}
                reviewdate={property.reviewdate}
                reviewname={property.reviewname}
                vacancy={property.vacancy}
          />
          )
      })}
    </div>
  )
}

export default PropertyView;

const ViewDetails=({
            coverimg,
            name,
            price,
            location,
            stats,
            description,
            amenities,
            overview,
            overviewimg1,
            contact1,
            contact1name,
            contact2name,
            contact2,
            reviewname,
            reviewdate,
            review,
            vacancy,
          }
            
)=>{
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
      <img src={coverimg} alt="logo" style={{width:"100%",height:"50vh",objectFit:"cover"}}/>
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
      <h3 style={{fontFamily:"Poppins-Bold",fontSize:"1.6rem"}}>{name}</h3>
      <h4 style={{fontFamily:"Poppins-Bold",}}> {price} <span style={{color:"grey"}}>/ Month</span></h4>
      <div style={{display:'flex',color:"grey",}}>
        <Room style={{fontSize:"1.4rem",color:"#ffa31a"}}/>
        <p>{location}</p>
      </div>
      <div style={{color:"",display:"flex",width:"80px",fontSize:"1rem",margin:"5px 0"}}>
        <p>Vacancy:<span style={{color:"#ffa31a",margin:"0 5px"}}>{vacancy}</span></p>
      </div>
      {
        //share
      }
      <div style={{display:"flex",}}>
        <p>Share :</p>
        <Link to='' style={{margin:"0 5px"}}><WhatsApp style={{fontSize:"1.3rem",color:"#25D366"}}/></Link>
        <Link to='' style={{margin:"0 5px"}}><Facebook style={{fontSize:"1.3rem",color:"#1877f2"}}/></Link>
        <Link to='' style={{margin:"0 5px"}}><Instagram style={{fontSize:"1.3rem",color:"#DD2A7B"}}/></Link>
        <Link to='' style={{margin:"0 5px"}}><LinkIcon style={{fontSize:"1.3rem",color:"#000000"}}/></Link>
      </div>
      {
        //Ratings
      }
      <div >
        <div style={{display:"flex",justifyContent:""}}>
          <p style={{color:"#000000"}}>Stats:</p>
          <div style={{fontSize:"1rem",display:"flex"}}>
              <Star style={{color:"#ffa31a",fontSize:"1.2rem"}}/>
              <p style={{
                width:"55px",
                padding:"2.5px",
                fontSize:"0.85rem",
                fontFamily:"Poppins-bold"
              }}>{stats}</p>
          </div>
        </div>
      {
        //Description
      }
      <div>
        <h4 >Description</h4>
        <p style={{color:"grey"}}>{description}</p>
      </div>
      {
        //Amenities
      }
      <div style={{color:"grey"}}>
        <h4 style={{color:"#000000"}}>Amenities</h4>
        <p>{amenities}</p>
      </div>
      {
        //overview
      }
      <div style={{color:"grey"}}>
        <h4 style={{color:"#000000"}}>Overview</h4>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          {overview.map((item)=>{
            return(
              <div>
                <img 
                src={item.overviewimg} 
                alt='roomview'
                style={{width:"150px",
                  height:"100px",
                  margin:"2.5px 5px", 
                  objectFit:"cover",
                  borderRadius:"10px"}}
                />
              </div>
              )
          })}
        </div>
      </div>
      {
          //Reviews
        }
        <div style={{color:""}}>
        <h3 style={{}}>Reviews</h3>
          <div style={{
            display:"flex",
            //justifyContent:"space-between",
            alignItems:"center",
            textAlign:"center",
            overflow:"auto",
            //whiteSpace:"nowrap",
            width:"95%",
            margin:"10px 0",
          }} className="scrollbar">
            {review.map((item)=>{
              return(
                <div> 
                  <ul 
                    style={{
                      //backgroundColor:"#f79d00",
                      width:"200px",
                      height:"150px",
                      textAlign:"center",
                      placeItems:"center",
                      borderRadius:"10px",
                      margin:"0 5px",
                      textDecoration:"none",
                      listStyle:"none",
                      //borderRadius:"30px"
                    }}
                    >
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        //width:"175px",
                        height:"150px",
                        padding:"5px",
                        fontSize:"0.9rem",
                        fontFamily:"Poppins-regular",
                        textAlign:"center",
                        margin:" 0 8px",
                      }}>
                        <div style={{display:"flex"}}>
                          <AccountCircle style={{fontSize:"2rem"}}/>
                          <div style={{fontSize:"0.7rem"}}>
                            <p style={{color:"#000000"}}>{item.name}</p>
                            <span>{item.date}</span>
                          </div>
                        </div>
                        
                        <p style={{color:"grey",fontSize:"0.7rem",overflowWrap:"break-word"}}>{item.content}</p>
                    </div>
                  </ul>
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
          <div style={{display:"flex",flexDirection:"column",margin:"10px 0",borderRadius:"10px",padding:"10px",backgroundColor:"#eeeeee"}}>
                <div style={{display:"flex"}}>
                  <AccountCircle style={{fontSize:"2rem"}}/>
                  <div style={{lineHeight:"12px"}}>
                    <h5>{contact1name}</h5>
                  </div>
                </div>
                <div style={{display:"flex",margin:"0 5px",alignItems:"center",fontSize:"13px"}}>
                    <Call style={{fontSize:"1rem"}}/>
                    <p>{contact1}</p>
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
  </div>
  )
}