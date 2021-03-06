import React from 'react'
import {Link } from "react-router-dom"
import {Room,
        Star,
        Call,
        NavigateNext
} from '@mui/icons-material'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useStateValue } from "../components/StateProvider";
import Review from '../components/Review.js'
import Footer from '../components/Footer'
import 'antd/dist/antd.css'
import { Carousel } from "antd";
import * as turf from '@turf/turf'
import "antd/dist/antd.css";
function PropertyView(){
  const [{ product,}] = useStateValue();
  
  return(
    <div>
      {product.map((property)=>{
          return(
            <ViewDetails
                key={property.id}
                id={property.id}
                mainimage={property.mainimage}
                image1={property.image1}
                image2={property.image2}
                image3={property.image3}
                image4={property.image4}
                propertyname={property.propertyname}
                price={property.price}
                area={property.area}
                location={property.location}
                description={property.description}
                amenities={property.amenities}
                policy={property.policy}
                reviews={property.reviews}
                vacancy={property.vacancy}
                contact={property.contact}
                type={property.type}
                longitude={property.longitude}
                latitude={property.latitude}
          />
          )
      })}
    </div>
  )
}

export default PropertyView;

const ViewDetails=({
            id,
            mainimage,
            propertyname,
            price,
            location,
            stats,
            description,
            amenities,
            policy,
            image1,
            image2,
            image3,
            image4,
            vacancy,
            reviews,
            contact,
            area,
            type,
            longitude,
            latitude
          }
            
)=>{
  console.log(contact)
  const [{currentUser}]=useStateValue();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#ffa31a"),
    backgroundColor: "#ffa31a",
    '&:hover': {
      backgroundColor: "#ffa31a",
    },
  }));
  // eslint-disable-next-line no-unused-vars
  const [{showreviews},dispatch] = useStateValue('')
  const HandleShowAllReview=()=>{
    // console.log("show all reviews")
    // console.log("dispatch fired");
    // console.log(showreviews);
    dispatch({
        type: "SHOW_ALL_REVIEWS",
        showreviews: {
          id:id,
          reviews:reviews,
        },
      });
  }
  const contentStyle = {
      color: "#000",
      //lineHeight: "160px",
      textAlign: "center",
      background: "#ffa31a",
      width: "calc(100vw)",
      height:"400px",
      objectFit:"cover"
    };
    //calculating distance to nearest gate
    const lng = 37.0131750
    const lat = -1.0991730
    //console.log(longitude,latitude)
    const to = [longitude, latitude] //lng, lat
    const from = [lng, lat] //lng, lat
    const options = {
        units: 'metres'
      };
    const dist = turf.distance(to, from, options)
    const distance = Math.ceil(dist)
    //console.log(distance)

  return(
    <div style={{position:"relative"}}>
    {
      //Image
    }
    <Carousel autoplay >
        <div >
          <img src={mainimage} alt="logo" style={contentStyle} />
        </div>
        <div>
          <img src={image1} alt="logo" style={contentStyle}/>
        </div>
        <div>
          <img src={image2} alt="logo" style={contentStyle}/>
        </div>
        <div>
          <img src={image3} alt="logo" style={contentStyle}/>
        </div>
        <div>
          <img src={image4} alt="logo" style={contentStyle}/>
        </div>
      </Carousel>
    {
      //Information
    }
    <div style={{padding:"8px",fontSize:"0.99rem",color:"#000000"}}>
      <h3 style={{fontFamily:"Poppins-Bold",fontSize:"1.6rem"}}>{propertyname}</h3>
      <h4 style={{fontFamily:"Poppins-Bold",}}> {price} <span style={{color:"grey"}}>/ Month</span></h4>
      <div style={{display:'flex',color:"grey",}}>
        <Room style={{fontSize:"1.4rem",color:"#ffa31a"}}/>
        <p>{location}</p>
      </div>
      <div style={{color:"",display:"flex",width:"",fontSize:"1rem",margin:"5px 0"}}>
        <p>Distance to school(Approx):<span style={{color:"#ffa31a",margin:"0 5px"}}>{distance} meters</span></p>
        
      </div>
      <div style={{display:"flex"}}>
      <p style={{fontSize:"0.9rem"}}>Property Type :</p>
      <p style={{fontSize:"0.9rem",marginLeft:"5px",color:"#ffa31a"}}>{type}</p>
      </div>
      <div style={{display:"flex"}}>
      <p style={{fontSize:"0.9rem"}}>Area :</p>
      <p style={{fontSize:"0.9rem",marginLeft:"5px",color:"#ffa31a"}}>{area}</p>
      </div>
      
      {
        //share
      }
      
      {
        //Ratings
      }
      <div >
      {
        //Description
      }
      <div>
        <h4 >Description</h4>
        <p style={{color:"grey",whiteSpace:"pre"}}>{description}</p>
      </div>
      {
        //Amenities
      }
      <div style={{color:"grey"}}>
        <h4 style={{color:"#000000"}}>Amenities</h4>
        <p style={{whiteSpace:"pre"}}>{amenities}</p>
      </div>
      {
        //Policies
      }
      <div style={{color:"grey"}}>
        <h4 style={{color:"#000000"}}>Policies</h4>
        <p style={{whiteSpace:"pre"}}>{policy}</p>
      </div>
        {
          //Review
        }
        <div style={{backgroundColor:"#e5e5e5",padding:"5px",borderRadius:"5px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h4 style={{color:"#000000"}}>Reviews</h4>
              {
                currentUser?(<Link to="/reviews" style={{color:"#ffa31a",margin:"0px 10px",fontSize:"13px",fontFamily:"Poppins-Bold",textDecoration:"none"}} onClick={HandleShowAllReview}>Show All Reviews<NavigateNext style={{fontSize:"0.9rem",paddingTop:"2px"}}/></Link>)
                :
                (<p style={{fontSize:"0.8rem"}}><Link to="/login">Log in</Link> to see all reviews</p>)
              }
              
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Star style={{color:"#ffa31a",fontSize:"1.2rem"}}/>
                <p style={{fontFamily:""}}>4.0</p>
                <p style={{fontSize:"0.6rem",color:"grey",margin:"auto 10px"}}>reviews</p>
              </div>
            </div>  
            {reviews.length === 0  ?(
        <p style={{fontSize:"0.8rem"}}>We have no Reviews For this apartment yet</p>
      ):(
          reviews.slice(0,3).map((item)=>{
          return(
            <div>
              <Review item={item}/>
            </div>
          )
          
        }) 
      )}      
          </div>
          
          
        {
          //Contacts
        }
        <div style={{display:"flex",flexDirection:"column"}}>
          <h4>Contact</h4>
          <div style={{display:"flex",margin:"0 5px",alignItems:"",fontSize:"13px",flexDirection:""}}>
                      <ColorButton style={{display:"flex",alignItems:"center",textDecoration:"none",backgroundColor:"#ffa31a",width:"100%",padding:"5px",borderRadius:"5px",margin:"0"}}>
                        <Call style={{fontSize:"1rem",marginRight:"5px"}}/>
                        <a href="tel:{contact}"
                        >
                        {contact}</a>
                      </ColorButton>                      
                  </div>
        </div>
      
      </div>
    </div>
    
    <Footer />
  </div>
  )
}
