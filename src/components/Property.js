import React from 'react'
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider"

function Property({property}){
    // eslint-disable-next-line no-unused-vars
    const [ {product},dispatch] = useStateValue();
    const ViewProperty=()=>{
      // console.log("dispatch fired");
     
      dispatch({
        type: "VIEW_PROPERTY",
        product: {
          id:property._id,
          mainimage:property.mainimage,
          propertyname:property.propertyname,
          price:property.price,
          location:property.location,
          stats:property.stats,
          description:property.description,
          policy:property.policy,
          amenities:property.amenities,
          image1:property.image1,
          image2:property.image2,
          image3:property.image3,
          image4:property.image4,
          reviews:property.reviews,
          vacancy:property.vacancy,
          contact:property.contact,
          area:property.area
        },
      });
    }
   return(
    <div  style={{
      lineHeight:"14px",
      fontSize:"0.7rem",
      //border:"1px solid grey",
      width:"10rem",
      borderRadius:"10px",
      height:"210px",
      margin:"5px auto"
    }}
    onClick={ViewProperty}
    >
    <Link
      style={{fontFamily:"Poppins-Bold",textDecoration:"none",color:"#000000"}}
      to='/property'
      >
          <img 
            src={property.mainimage}  
            alt="logo" style={{width:"100%",height:"150px",objectFit:"cover",borderRadius:"10px"}}
            />
          <div style={{padding:"5px"}}>
            <h3 style={{fontFamily:"Poppins-Bold"}}>Ksh.{property.price}<span style={{color:"#eeeeee"}}>/month</span></h3>
            <p>{property.propertyname}</p>
            <p style={{fontSize:"0.6rem",color:"grey"}}>{property.area}</p>
          </div>
      </Link>
    </div>
    
  )
}

export default Property;